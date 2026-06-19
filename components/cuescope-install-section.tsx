"use client"

import { useState } from "react"
import { BadgeCheck, CheckCircle2, ShieldCheck, TerminalSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const packageFacts = [
  { label: "Package", value: "@greenhouselabs/cuescope-mcp" },
  { label: "Binary", value: "cuescope-mcp" },
  { label: "Version", value: "1.0.2" },
  { label: "Runtime", value: "Node.js 20+" },
  { label: "Default Mode", value: "Review Mode" },
]

const globalInstallCommand = "npm install -g @greenhouselabs/cuescope-mcp"

const setupRequirements = [
  {
    label: "vMix Web Controller",
    detail: "vMix running, Web Controller enabled, default port 8088.",
  },
  {
    label: "API reachability",
    detail:
      "MCP host can reach the vMix Web Controller API on the configured host and port.",
  },
  {
    label: "MCP client",
    detail: "Claude Desktop, Claude Code, Cursor, or Codex.",
  },
  {
    label: "First-run boundary",
    detail: "Trusted local/network use only; leave VMIX_CONTROL_MODE unset.",
  },
]

const setupTabs = [
  {
    id: "claude-desktop",
    label: "Claude Desktop / JSON",
    language: "json",
    note: "Use this shape for MCP clients that read a server configuration file.",
    code: `{
  "mcpServers": {
    "cuescope": {
      "command": "npx",
      "args": ["-y", "@greenhouselabs/cuescope-mcp"],
      "env": {
        "VMIX_HOST": "localhost",
        "VMIX_HTTP_PORT": "8088",
        "VMIX_TCP_PORT": "8099"
      }
    }
  }
}`,
  },
  {
    id: "claude-code",
    label: "Claude Code",
    language: "bash",
    note: "Claude Code can add the published package as an MCP server with npx.",
    code: "claude mcp add cuescope -- npx -y @greenhouselabs/cuescope-mcp",
  },
  {
    id: "codex",
    label: "Codex",
    language: "bash",
    note: "Codex CLI can add the same published package as a CueScope MCP server.",
    code: "codex mcp add cuescope -- npx -y @greenhouselabs/cuescope-mcp",
  },
  {
    id: "windows",
    label: "Windows",
    language: "json",
    note: "On Windows, Claude Desktop often needs cmd /c npx instead of calling npx directly.",
    code: `{
  "mcpServers": {
    "cuescope": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@greenhouselabs/cuescope-mcp"],
      "env": {
        "VMIX_HOST": "localhost",
        "VMIX_HTTP_PORT": "8088",
        "VMIX_TCP_PORT": "8099"
      }
    }
  }
}`,
  },
  {
    id: "remote",
    label: "Remote vMix",
    language: "bash",
    note: "For vMix running on another trusted machine, set VMIX_HOST to that LAN host or IP.",
    code:
      "claude mcp add cuescope -e VMIX_HOST=192.168.1.100 -- npx -y @greenhouselabs/cuescope-mcp\n" +
      "codex mcp add cuescope --env VMIX_HOST=192.168.1.100 -- npx -y @greenhouselabs/cuescope-mcp",
  },
]

const smokeTestPrompt =
  "Use CueScope. Read vmix://server/status and vmix://state/summary. Do not control vMix yet."

const smokeTestExpected = [
  "server reports Review Mode",
  "controlMode is false",
  "highImpactMode is false",
  "18 review-only tools are available by default",
  "vmix://state/summary returns current vMix state",
  "no live-control tool is called",
]

function CodeBlock({
  code,
  language,
}: {
  code: string
  language: string
}) {
  return (
    <div className="max-w-full min-w-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
      <pre className="max-w-full overflow-x-auto p-4 text-left text-xs leading-6 text-neutral-200">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export function CueScopeInstallSection() {
  const [activeTabId, setActiveTabId] = useState("claude-desktop")
  const activeTab =
    setupTabs.find((tab) => tab.id === activeTabId) || setupTabs[0]

  return (
    <section id="install" className="border-y border-white/10 bg-neutral-900/25">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="min-w-0 space-y-5">
            <Badge
              variant="outline"
              className="mb-4 border-amber-400/30 bg-amber-500/10 text-amber-200"
            >
              Available on npm
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Install CueScope
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              CueScope installs as an MCP package from npm as{" "}
              <span className="break-words font-mono text-emerald-200">
                @greenhouselabs/cuescope-mcp
              </span>
              . Version 1.0.2 is live. Start with Review Mode, then enable
              control only after the read-only setup is working.
            </p>

            <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2">
              {packageFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="min-w-0 rounded-lg border border-white/10 bg-neutral-950/50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {fact.label}
                  </p>
                  <p className="mt-2 break-words font-mono text-sm text-neutral-200">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="min-w-0 rounded-lg border border-emerald-400/20 bg-emerald-950/20 p-5">
              <div className="mb-3 flex items-center gap-2 text-neutral-200">
                <TerminalSquare className="h-4 w-4 text-emerald-300" />
                <h3 className="font-semibold">Global install</h3>
              </div>
              <CodeBlock code={globalInstallCommand} language="bash" />
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                MCP client setups can also run the published package with npx,
                as shown in the examples.
              </p>
            </div>

            <div className="min-w-0 rounded-lg border border-white/10 bg-neutral-950/50 p-5">
              <div className="mb-2 flex items-center gap-2 text-neutral-200">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                <h3 className="font-semibold">Control Mode Safety</h3>
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                Control Mode is not a first-run step. Only enable{" "}
                <span className="font-mono text-neutral-200">
                  VMIX_CONTROL_MODE=true
                </span>{" "}
                after Review Mode is working. High-Impact Control requires both{" "}
                <span className="font-mono text-neutral-200">
                  VMIX_CONTROL_MODE=true
                </span>{" "}
                and{" "}
                <span className="font-mono text-neutral-200">
                  VMIX_HIGH_IMPACT=true
                </span>
                .
              </p>
            </div>
          </div>

          <div className="min-w-0 space-y-5">
            <div className="min-w-0 rounded-lg border border-white/10 bg-neutral-950/50 p-4">
              <div className="mb-3 flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">Requirements</h3>
                  <p className="text-sm text-neutral-400">
                    First-run setup starts in Review Mode.
                  </p>
                </div>
              </div>
              <div className="space-y-2.5">
                {setupRequirements.map((requirement) => (
                  <div key={requirement.label} className="flex min-w-0 gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="min-w-0 text-sm leading-5 text-neutral-300">
                      <span className="font-medium text-neutral-100">
                        {requirement.label}:
                      </span>{" "}
                      {requirement.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-red-400/20 bg-red-950/20 p-3">
                <p className="text-xs leading-5 text-neutral-300 sm:text-sm">
                  vMix Web Controller is unauthenticated. Do not expose it to
                  the public internet.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-lg border border-white/10 bg-neutral-950/50 p-4">
              <div
                className="mb-4 flex min-w-0 gap-1.5 overflow-x-auto pb-1"
                role="tablist"
                aria-label="CueScope setup options"
              >
                {setupTabs.map((tab) => {
                  const isActive = tab.id === activeTab.id

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`cuescope-install-${tab.id}`}
                      id={`cuescope-install-tab-${tab.id}`}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`shrink-0 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-100"
                          : "border-white/10 bg-white/[0.03] text-neutral-400 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              <div
                id={`cuescope-install-${activeTab.id}`}
                role="tabpanel"
                aria-labelledby={`cuescope-install-tab-${activeTab.id}`}
                className="min-w-0"
              >
                <div className="mb-3 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">
                      {activeTab.label}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-neutral-400">
                      {activeTab.note}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit shrink-0 border-amber-400/30 bg-amber-500/10 text-amber-200"
                  >
                    npm live
                  </Badge>
                </div>
                <CodeBlock code={activeTab.code} language={activeTab.language} />
              </div>
            </div>

            <div className="min-w-0 rounded-lg border border-emerald-400/20 bg-emerald-950/20 p-5">
              <div className="mb-4 flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                  <TerminalSquare className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">First-Run Smoke Test</h3>
                  <p className="text-sm text-neutral-400">
                    Start with a read-only prompt.
                  </p>
                </div>
              </div>
              <CodeBlock code={smokeTestPrompt} language="text" />
              <div className="mt-4 grid min-w-0 gap-2 sm:grid-cols-2">
                {smokeTestExpected.map((item) => (
                  <div key={item} className="flex min-w-0 gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="min-w-0 text-sm leading-6 text-neutral-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
