## GitHub Copilot Chat

- Extension Version: 0.26.3 (prod)
- VS Code: vscode/1.99.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": true,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (9 ms)
- DNS ipv6 Lookup: timed out after 10 seconds
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (238 ms)
- Node.js https: HTTP 200 (1002 ms)
- Node.js fetch: HTTP 200 (457 ms)
- Helix fetch: HTTP 200 (343 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.22 (70 ms)
- DNS ipv6 Lookup: timed out after 10 seconds
- Proxy URL: None (39 ms)
- Electron fetch (configured): HTTP 200 (290 ms)
- Node.js https: HTTP 200 (1161 ms)
- Node.js fetch: HTTP 200 (1188 ms)
- Helix fetch: HTTP 200 (1157 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).