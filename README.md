# Podarcis for Obsidian

A sidebar to configure a [Podarcis](https://github.com/XicuM/podarcis-skill) research vault: the Git repositories for `sources/`, `wiki/`, and `workspace/`, the agents to set up, recommended and custom MCP servers with their credentials, and extra skills. **Apply** saves `.agents/podarcis.yaml` and `.agents/.env` and runs the skill's setup, which clones the repositories and configures every agent. **Update** installs the latest podarcis-skill release.

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
