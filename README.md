# NiKa Store

Landing page ufficiale per la prossima apertura di NiKa Store a Sambuceto.

## Sviluppo

```bash
npm install
npm run dev
```

La variabile `NEXT_PUBLIC_SITE_URL` deve contenere il dominio canonico di produzione su Vercel.

## Deploy su Vercel

- Framework Preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: configurazione automatica di Next.js
- Environment Variable: `NEXT_PUBLIC_SITE_URL` con il dominio finale, incluso `https://` e senza slash finale

Le anteprime Vercel possono lasciare la variabile non impostata: Next.js userà l’URL di produzione esposto da Vercel. Prima dell’indicizzazione pubblica, il dominio definitivo deve essere configurato in `NEXT_PUBLIC_SITE_URL`.

## Fotografie

Le immagini editoriali sono segnaposto indicativi e non rappresentano capi già disponibili in negozio.

| File locale | Autore | Pagina sorgente | Licenza | Sostituzione futura |
| --- | --- | --- | --- | --- |
| `editorial-hero.jpg` | Charles Puaud | [Unsplash](https://unsplash.com/photos/couple-walking-down-a-street-with-shops-AZJz2PGf6TA) | Unsplash License | Campagna NiKa uomo/donna |
| `editorial-women.jpg` | Zulfugar Karimov | [Unsplash](https://unsplash.com/photos/woman-in-casual-clothing-standing-outside-modern-building-n6dxGoXVJJE) | Unsplash License | Collezione donna NiKa |
| `editorial-men.jpg` | Lgnwvr | [Unsplash](https://unsplash.com/photos/man-in-casual-clothing-standing-near-a-garage-door-lezdON0Vw1M) | Unsplash License | Collezione uomo NiKa |

Logo ed esterno del negozio sono stati forniti direttamente da NiKa Store.
