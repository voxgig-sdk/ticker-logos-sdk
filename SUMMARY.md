# Ticker Logos

Ticker Logos by AllInvestView: a free CDN that returns a company&#39;s logo image for its website domain. No key or sign-up. Rate limit: 20,000 requests/day per IP, burst max 30 requests per 10 s (HTTP 429 beyond). Attribution: a visible dofollow link to https://www.allinvestview.com/tools/ticker-logos/ is required on every page that shows the logos. Knowledge source: the documentation page https://www.allinvestview.com/tools/ticker-logos/, probed live on 2026-10-23. Observed: logos come back as 128x128 RGBA PNG (`image/png`, cached for a year); the domain may carry a `www.` prefix or even a scheme (`https://apple.com` resolved); a ticker symbol such as `AAPL` is NOT accepted (HTTP 400 `&#123;&quot;error&quot;: &quot;Bad domain&quot;&#125;`) despite the catalogue blurb, and an unknown domain returns HTTP 404 `&#123;&quot;error&quot;: &quot;Not found&quot;&#125;` as JSON. Ticker-to-domain lookup is a separate search API on another host (GET https://www.allinvestview.com/api/logo-search/?q=AAPL, 60 requests/minute, returns &#123;query, count, results[&#123;symbol, name, website, exchange&#125;]&#125;); it is left out of this spec because the SDK takes a single base URL. Unverified: whether formats other than PNG are ever served (the docs say &quot;typically PNG&quot;); any size or format query options (none documented).

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 1 entities and 1 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### GetLogo

Results: The logo image (observed: 128x128 PNG with transparency).

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| GetLogo | `load` | `GET /{domain}` | See reference |

## Connect to the API

- Logo CDN: `https://cdn.tickerlogos.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `ticker-logos_list`: List records for an entity. No active entity supports this operation.
- `ticker-logos_load`: Load one record for an entity. Supported entities: `get_logo`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

