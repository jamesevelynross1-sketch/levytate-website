# LevyTate website

Public marketing site for [LevyTate](https://www.levytate.co.uk). The employer application lives separately at `https://app.levytate.co.uk`.

## Pages

- `/` homepage, the three-part employer story
- `/apprenticeships`, `/funding`, `/manage-apprenticeships`
- `/early-access`
- `/solutions/employers`, `/solutions/employees`, `/solutions/training-providers`
- `/privacy`, `/early-access-terms`, `/data-processing`, `/support`, `/account-help`, `/data-rights`

`/login` and `/app/*` redirect to the application. Older `/levytate/...` marketing URLs redirect to these root paths.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when you need a platform origin other than the default.

```bash
NEXT_PUBLIC_PLATFORM_URL=https://app.levytate.co.uk
```

That value is the origin only. Login links, sign-in links and `/app` redirects use it.

Early Access posts JSON to `{NEXT_PUBLIC_PLATFORM_URL}/api/levytate-early-access` with credentials omitted. Because the body is JSON, the browser sends a CORS preflight. The platform must answer `OPTIONS` and `POST` with `Access-Control-Allow-Origin` for this website, `Access-Control-Allow-Methods: POST, OPTIONS`, and `Access-Control-Allow-Headers: Content-Type`. Until those headers exist, the browser blocks the submission.

## Checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```
