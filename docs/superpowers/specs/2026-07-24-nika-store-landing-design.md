# NiKa Store — Landing page design

## Obiettivo

Creare una landing page vetrina single page per annunciare la prossima apertura di NiKa Store, negozio di abbigliamento casual uomo e donna a prezzi accessibili in Corso Italia 121, 66020 Sambuceto (CH).

La pagina non include funzionalità e-commerce. Le conversioni principali sono:

1. avviare una conversazione WhatsApp;
2. ottenere indicazioni stradali tramite Google Maps;
3. seguire il profilo TikTok per aggiornamenti sulla prossima apertura.

## Pubblico e posizionamento

- Pubblico adulto trasversale, indicativamente 20–55 anni.
- Abbigliamento casual e quotidiano per donna e uomo.
- Nessun abbigliamento per bambini.
- Posizionamento conveniente, comunicato con formule curate come “stile accessibile” e “novità a prezzi convenienti”.
- Il termine “low cost” non sarà il messaggio dominante dell’interfaccia; i contenuti SEO potranno descrivere esplicitamente la convenienza senza compromettere la percezione del marchio.

## Informazioni confermate

- Stato: prossima apertura, senza data comunicabile.
- Indirizzo: Corso Italia, 121, 66020 Sambuceto (CH).
- WhatsApp: +39 349 562 7208.
- Link WhatsApp: `https://wa.me/393495627208`.
- TikTok: `https://www.tiktok.com/@nikastore.sambuceto`.
- Google Maps: `https://www.google.com/maps/place/NiKa+Store/@42.4221038,14.1850912,17z/data=!3m1!4b1!4m6!3m5!1s0x1331afa08df1dfbd:0x8bce4cdc180049ee!8m2!3d42.4220999!4d14.1876715!16s%2Fg%2F11nr54ysq8?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D`.
- Asset reali disponibili: logo e fotografia dell’esterno del negozio.
- Le fotografie fashion iniziali saranno stock e verranno sostituite in futuro con materiale originale.

## Direzione visiva

La direzione approvata è “Editoriale contemporaneo”: elegante ma accessibile, con molto spazio, immagini ampie e movimento morbido.

### Palette

- Verde bosco profondo derivato dal logo: colore principale per testi, pulsanti e sezioni ad alto contrasto.
- Bianco caldo/avorio: sfondo principale.
- Verde salvia molto chiaro: separazione di sezioni e superfici secondarie.
- Lime desaturato: accento raro per stati interattivi e piccoli dettagli.

I valori esatti saranno ricavati dagli asset e verificati per il contrasto.

### Tipografia

- Serif editoriale per titoli e messaggi emozionali.
- Sans-serif pulito per navigazione, testi, CTA e informazioni pratiche.
- Cormorant Garamond sarà usato per i titoli e Manrope per il testo, caricati tramite `next/font` per evitare richieste runtime a servizi di font esterni.

### Identità nell’header

- Desktop: “NiKa”, simbolo del logo, “Store”.
- Mobile: solo simbolo.
- Il logo fornito sarà ottimizzato e ritagliato per eliminare spazio superfluo senza alterarne il disegno.

## Architettura della pagina

### 1. Header sticky

- Posizione sticky durante lo scroll.
- Stato iniziale leggero o trasparente sulla hero.
- Stato compatto con fondo solido dopo lo scroll.
- Link ad ancora: Stile, Novità, Negozio, Contatti.
- CTA desktop “Scrivici” verso WhatsApp.
- Navigazione mobile compatta e accessibile.

### 2. Hero

- Eyebrow: “Prossima apertura · Sambuceto”.
- H1: “Il tuo stile, ogni giorno.”
- Testo di supporto dedicato all’abbigliamento casual uomo e donna.
- Immagine fashion stock editoriale.
- CTA primaria verso WhatsApp.
- CTA secondaria verso Google Maps.
- Indirizzo chiaramente visibile.

### 3. Manifesto

Breve introduzione al marchio: proposte casual per donna e uomo, pensate per la quotidianità, con stile e prezzi accessibili.

### 4. Selezione donna e uomo

- Due blocchi fotografici distinti.
- Testi brevi per i due pubblici.
- Le fotografie stock saranno presentate come evocative, non come disponibilità di prodotto.
- Indicazione discreta “immagini indicative” sotto la prima coppia di fotografie stock.

### 5. Punti di forza

Quattro messaggi:

- stile quotidiano;
- proposte donna;
- proposte uomo;
- prezzi accessibili.

### 6. Prossima apertura

- Sezione ad alto impatto grafico.
- Nessuna data, countdown o promessa temporale.
- Invito a ricevere aggiornamenti tramite TikTok e WhatsApp.
- Ticker discreto: “Donna · Uomo · Everyday style · Sambuceto”.

### 7. Negozio e posizione

- Fotografia reale dell’esterno.
- Indirizzo completo.
- Pulsante Google Maps.
- Nessuna mappa incorporata nella prima versione, per proteggere privacy e prestazioni. Il link a Google Maps resta chiaramente disponibile.

### 8. Footer

- Identità NiKa Store.
- Indirizzo.
- Link TikTok, WhatsApp e Google Maps.
- La prima versione non inventa partita IVA o informazioni legali non ancora fornite.

### 9. WhatsApp flottante

- Posizione fissa in basso a destra.
- Collegamento a `https://wa.me/393495627208`.
- Etichetta accessibile e focus da tastiera.
- Posizionamento adattivo per non coprire CTA o contenuti su mobile.

## Animazioni e interazioni

- Entrate leggere di testo e immagini durante lo scroll.
- Reveal mascherato per le immagini.
- Parallasse molto contenuta solo su dispositivi compatibili.
- Transizione dell’header tra stato hero e stato compatto.
- Microinterazioni su pulsanti, link e icona WhatsApp.
- Animazioni implementate con CSS e Intersection Observer, senza librerie di animazione aggiuntive.
- Supporto completo a `prefers-reduced-motion`.
- Nessuna animazione deve bloccare contenuti, navigazione o indicizzazione.

## Responsive design

- Approccio mobile-first.
- Breakpoint definiti in base al contenuto, non a dispositivi specifici.
- Immagini più verticali e CTA a larghezza adeguata su schermi piccoli.
- Touch target di almeno 44×44 px.
- Menu mobile navigabile da tastiera, con gestione corretta del focus.
- Il contenuto essenziale resta disponibile anche senza JavaScript.

## Architettura tecnica

- React tramite Next.js App Router.
- TypeScript.
- Prerendering statico della landing.
- Deploy previsto su Vercel.
- Server Components per il contenuto statico.
- Client Components limitati a header, menu, animazioni e osservazione dello scroll.
- Nessun backend o database.
- Nessun CMS nella prima versione.
- Contenuti, link e riferimenti alle immagini raccolti in moduli dati piccoli e centralizzati per agevolare le sostituzioni future.

## SEO tradizionale e locale

- H1 unico e struttura semantica con `header`, `nav`, `main`, `section`, `address` e `footer`.
- Titolo orientato a “abbigliamento uomo e donna a Sambuceto”.
- Meta description chiara e locale.
- URL canonical basato sulla variabile pubblica `NEXT_PUBLIC_SITE_URL`, con fallback documentato all’URL Vercel della build.
- Metadata Open Graph e social preview.
- `robots.txt` e `sitemap.xml` generati tramite le convenzioni di Next.js.
- JSON-LD conforme a `ClothingStore`/`LocalBusiness`, con nome, indirizzo, telefono, coordinate, URL e profili social.
- Coordinate confermate dal link Google Maps: 42.4220999, 14.1876715.
- Copy naturale basato su abbigliamento casual, uomo, donna, prezzi accessibili, Sambuceto e provincia di Chieti.
- Nessun keyword stuffing.
- Alt text descrittivi; le immagini puramente decorative avranno alt vuoto.
- Link esterni sicuri e descrittivi.

## Prestazioni

- Immagini servite localmente e ottimizzate con `next/image`.
- Dimensioni esplicite per evitare layout shift.
- Hero image prioritaria; immagini sotto la piega lazy-loaded.
- Formati moderni generati dalla pipeline di Vercel.
- Font ridotti ai pesi necessari.
- JavaScript client minimo.
- Obiettivo: buoni Core Web Vitals su mobile e nessun blocco di rendering non necessario.

## Accessibilità

- Contrasto conforme almeno a WCAG AA.
- Navigazione completa da tastiera.
- Focus visibile.
- Link e pulsanti con nomi accessibili.
- Icone accompagnate da testo accessibile.
- Menu mobile con stato annunciato.
- Rispetto delle preferenze di movimento.
- Gerarchia dei titoli lineare.

## Privacy e analytics

- Nessun analytics nella prima versione.
- Nessun cookie non tecnico.
- TikTok, WhatsApp e Maps sono collegamenti esterni.
- Una mappa incorporata non sarà caricata automaticamente nella prima versione, per evitare dipendenze e trasferimenti di dati non necessari.
- Analytics e banner consenso richiederanno una decisione separata.

## Gestione delle risorse e dei fallback

- Le fotografie stock saranno selezionate con licenza adatta e salvate nel progetto, non caricate a runtime da host terzi.
- Ogni fotografia stock avrà una sostituzione chiaramente documentata.
- Se un’immagine non viene caricata, sfondo, proporzioni e testo manterranno leggibile il layout.
- Le CTA esterne saranno link standard e resteranno utilizzabili anche senza JavaScript.

## Verifica

Prima della consegna saranno eseguiti:

- build Next.js di produzione;
- controllo responsive alle larghezze mobile, tablet e desktop;
- verifica menu, ancore e header sticky;
- verifica dei link WhatsApp, TikTok e Google Maps;
- controllo navigazione da tastiera e focus;
- controllo `prefers-reduced-motion`;
- validazione di metadata, canonical, robots, sitemap e JSON-LD;
- controllo che le immagini abbiano dimensioni e alt corretti;
- controllo dell’HTML iniziale per confermare la presenza dei contenuti indicizzabili;
- analisi Lighthouse o equivalente su una build di produzione.

## Fuori ambito

- E-commerce, catalogo prodotti, disponibilità e prezzi dei singoli capi.
- Pagamenti, account e area riservata.
- Modulo contatti con backend.
- CMS.
- Countdown o data di apertura.
- Abbigliamento per bambini.
- Analytics e cookie banner.
- Gestione automatica degli orari di apertura.

## Criteri di accettazione

La landing è accettata quando:

1. comunica chiaramente prossima apertura, assortimento uomo/donna e posizionamento accessibile;
2. il branding desktop e mobile segue le indicazioni approvate;
3. WhatsApp, TikTok e Google Maps sono raggiungibili;
4. l’header resta sticky e le animazioni funzionano senza penalizzare accessibilità o prestazioni;
5. i contenuti essenziali sono presenti nell’HTML prerenderizzato;
6. metadata, dati strutturati, sitemap e robots sono corretti;
7. la build è distribuibile su Vercel senza configurazioni manuali non documentate;
8. le fotografie stock sono facilmente sostituibili.
