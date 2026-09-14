# Lifestyle storefront v1 (staging)

Feature branch: `feat/lifestyle-storefront-aug11` off `staging`.
Production (`main`, www.amplify-arg.com) was not touched. No deploy.

## How to run

```bash
cd "/Users/francovirzi/Documents/Claude OS/personal/amplify"
bun install
bun run dev    # http://localhost:3000
bun run build
```

## Split IA

Lifestyle is the new default home. Hi-Fi stays at `/catalogo`.

- Lifestyle: `/` `/tienda` `/tienda/[id]` `/carrito` `/checkout` — Bose first, then Denon Home, optional Sonos. ARS + cuotas + cart.
- Hi-Fi: `/catalogo` `/catalogo/[id]` — USD, WhatsApp, no cart. Unchanged catalog data.

The two grids never mix.

## Shipping (one staging rule)

Retiro sin cargo en Nunez o Palermo. Envio CABA/GBA \$12.500 (24-48 hs). Envio interior \$18.900 (3-7 dias habiles). Same copy in lifestyle FAQs, checkout, and the hi-fi FAQ.

## Placeholders

- ARS prices from the 2026-08-11 brief.
- Stock counts are realistic fakes (2-8 units).
- Reviews are seeded rioplatense copy for UX.
- Product images are branded SVGs in `public/images/lifestyle/`, not official brand photos.

## Checkout gate

Full UI (contact, shipping, 6 cuotas / transferencia / WhatsApp). Submit does not charge, does not call a PSP, stores nothing on a server. Shows a sandbox order id and a WhatsApp handoff.

## Deferred

Native apps, MercadoLibre, backoffice, live stock, official photography, Sonos as hero (on purpose).
