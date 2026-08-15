# Security Notes

## Current static demo

The browser does not submit reservation data to an external endpoint. The form only demonstrates UI and client-side validation.

## Production checklist

- Validate every field on the server.
- Apply strict request size limits.
- Rate-limit reservation/contact endpoints.
- Add CSRF protection when using cookie-based sessions.
- Use parameterized database queries.
- Store secrets only in server environment variables/secrets.
- Configure Content-Security-Policy appropriate to your deployment.
- Enable HSTS only when HTTPS is fully configured.
- Set `X-Content-Type-Options: nosniff`.
- Use an appropriate `Referrer-Policy`.
- Avoid rendering untrusted HTML.
- Log security-relevant events without logging sensitive personal data.
