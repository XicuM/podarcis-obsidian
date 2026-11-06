# Podarcis for Obsidian

A sidebar to configure a [Podarcis](https://github.com/XicuM/podarcis-skill) research vault: the Git repositories for `sources/`, `wiki/`, and `workspace/`, recommended and custom MCP servers with their credentials, and extra skills. **Apply** saves `.agents/podarcis/config.yaml` (repositories), `.agents/podarcis/tools.yaml` (servers and skills), and `.agents/podarcis/.env` (credentials), then runs the skill's setup, which clones the repositories and gives the tools to every agent: Claude Code, Codex, OpenCode, and VS Code. To upgrade Podarcis, rerun setup with a newer release tag (see the [skill's README](https://github.com/XicuM/podarcis-skill#set-up-a-vault)); there is no Update button.

In a [PodarcisNest](https://github.com/XicuM/podarcis-nest) workspace, the server provides Podarcis and writes `.agents/podarcis/nest.json`. The sidebar then shows the workspace's sources mode (team Drive files, own papers, or both) with a link to the Account page to change it, and hides the repositories when the administrator manages them.

In a vault without the skill, the sidebar runs the latest podarcis-skill release from GitHub, which installs it into `.agents/skills/podarcis`.

## Requirements

Obsidian desktop and [uv](https://docs.astral.sh/uv/), plus git to sync folders with Git repositories, with network access on first use. Apps started from the desktop may not see your shell `PATH`; set uv's absolute path in the plugin settings if needed.

## Install

Copy `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/XicuM/podarcis-obsidian/releases/latest) to `<vault>/.obsidian/plugins/podarcis/`, then enable **Podarcis** in Community plugins. Open it from the ribbon or the command **Podarcis: Open setup panel**.

## Development

```bash
npm ci && npm test && npm run build
```

Releases: set `version` in `manifest.json` and `package.json`, then push the tag `<version>` (Obsidian's convention, no `v`). The workflow drafts a release with the plugin files.

[AGPL-3.0](LICENSE)
