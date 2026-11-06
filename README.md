# SYPcoin website

Sitio web público oficial de SYPcoin.

## Estado

**v0.1 — identidad y landing inicial**

La web refleja el estado real del proyecto: SYPcoin sigue en desarrollo y todavía no presenta métricas de una red pública como si fueran datos reales.

## Estructura

- `index.html` — portada y contenido público inicial.
- `styles.css` — sistema visual responsive sin frameworks.
- `app.js` — navegación móvil y animaciones progresivas.
- `assets/syp-mark.svg` — símbolo provisional de SYPcoin.

## Principios

- Sitio estático y ligero.
- Sin dependencias externas.
- Mobile-first / responsive.
- Sin métricas ficticias.
- SYPcoin y SYPC Solidaria se presentan como conceptos relacionados pero diferenciados.
- Preparado para integrar más adelante Explorer, estadísticas de red y documentación técnica real.

## Publicación

Este repositorio es el GitHub Pages de la cuenta `sypcoin2026`.

https://sypcoin2026.github.io

## Identidad visual oficial v0.2

Los recursos gráficos aprobados para SYPcoin proceden de la lámina oficial validada para la marca y se han exportado para web sin redibujarla ni alterar su composición.

- `assets/brand/logo-principal.webp` — logo original aprobado para portada (exportación web).
- `assets/brand/moneda.webp` — representación oficial de la moneda SYPC.
- `assets/brand/favicon.webp` — versión cuadrada derivada del icono aprobado.

El diseño principal se preserva y los archivos se sirven desde este repositorio. No se cargan imágenes de terceros.


## Compromiso solidario y transparencia pública v0.3

- Antes: el 1 % solidario estaba previsto a cargo de la minería.
- Nuevo reparto: 0,5 % desde minería y aportación equivalente a 0,5 % desde tesorería; se mantiene el objetivo solidario agregado, con menor carga de minería.
- La base de cálculo exacta y la implementación en la cadena se deben especificar y comprobar antes de mainnet. La web NO declara que estas reglas estén confirmadas ya on-chain.
- El importe explícitamente comprometido como donación se entregará íntegro al beneficiario. Los gastos, comisiones, conversión y obligaciones se separan y documentan.
- Los ingresos brutos y gastos de cualquier venta solidaria no deben confundirse con el importe comprometido de donación.
- El libro se estructura por fondos diferenciados, con TX en cadena y comprobantes documentales de recepción.
- La privacidad de menores, pacientes y terceros se protegerá en las copias públicas de los justificantes.
- Página pública: `/transparencia/`; datos iniciales `data/solidaria-ledger.json`, sin movimientos ni cifras ficticias.

## Estado visual y seguridad pública v0.4

El estado visible de la web se gobierna con una única constante: `PROJECT_RELEASE_STAGE` en `app.js`.

- `development`: rojo, **EN DESARROLLO** (actual).
- `advanced`: naranja, **EN PRUEBAS AVANZADAS**, tras las verificaciones que lo justifiquen.
- `ready`: verde, **LISTA PARA LANZAMIENTO**, solo cuando se hayan completado los requisitos de lanzamiento.

La etiqueta visual no garantiza que el protocolo sea seguro ni sustituye la auditoría técnica.

La página `/seguridad/` describe la arquitectura defensiva prevista, pruebas pendientes, criterios de evidencia y divulgación responsable. No debe publicitar resultados ni auditorías que no puedan acreditarse. Ninguna cifra de ranking o promesa de invulnerabilidad se publica.


## Publicación y comprobación de GitHub Pages

- Sitio de usuario: `https://sypcoin2026.github.io/`.
- Rama de trabajo: `main`.
- Entrada web: `index.html` situada en la raíz del repositorio.
- Los recursos estáticos se publican desde la raíz con `.nojekyll`.
- El resultado **success** de GitHub Actions confirma el proceso de despliegue, no sustituye la comprobación HTTP de la dirección pública.
- Ante un 404, revisar **Settings → Pages**: URL activa y origen de publicación; inspeccionar también el estado del dominio y la respuesta HTTP pública.

## Estadísticas web — Cloudflare Web Analytics

Web Analytics se instala mediante la etiqueta `beacon.min.js` al final de las páginas `index.html`, `seguridad/index.html` y `transparencia/index.html`. Las estadísticas empiezan cuando Cloudflare recibe eventos del sitio y no son retroactivas. El identificador público de sitio no es una credencial secreta. Los datos se revisan desde la cuenta de Cloudflare del proyecto.

## Hitos del desarrollo — publicación web v0.5

- Portada: `#hitos` con tres resultados destacados.
- Historial completo: `/hitos/`.
- Datos públicos estructurados: `/data/hitos.json`, que debe mantenerse sincronizado con las tarjetas HTML.
- Campos: `date` (fecha de consecución), `title`, `summary`, `details`, `status` (`en desarrollo`, `en pruebas`, `verificado`), `scope`, `checks` y `evidence` (solo enlaces públicos comprobados).
- `verificado` describe pruebas exitosas en laboratorio, no certificación externa ni consenso activado.
- Sin enlaces públicos disponibles: mostrar `Evidencia pública pendiente`. No publicar rutas locales, datos privados ni enlaces a repos privados.
- La prueba de dos nodos es **Ergo devnet local con consenso heredado** y **no** la red o testnet propia de SYPcoin.
- La etiqueta de proyecto `EN DESARROLLO` permanece roja: `PROJECT_RELEASE_STAGE = 'development'` en `app.js`.
- La conversación de web solo modifica el repositorio `sypcoin2026.github.io`, nunca el núcleo de la moneda.

## Revisión de sitio público 2026-11-04

- Mantener el logo y el diseño original; no mover ni alterar imágenes oficiales.
- Centro de documentación y preguntas frecuentes en `/documentacion/`; política de privacidad en `/privacidad/`.
- Los cuatro elementos de Documentación en portada son enlaces reales y llevan al apartado adecuado.
- Avisos expresos: sin red SYPcoin pública activa, minero descargable, wallet oficial, Explorer ni API.
- Hitos Ergo devnet local descritos como pruebas internas con consenso heredado, no testnet SYPcoin.
- `404.html`, `sitemap.xml` y `robots.txt` para rutas inexistentes y descubrimiento.
- Enlaces internos, anclas y recursos sometidos a validación estática antes de publicar.
- Canal de errores de contenido: GitHub Issues del **repositorio de la web**, nunca del núcleo. No usarlo para información sensible.
- Estado rojo `EN DESARROLLO` y Cloudflare Web Analytics conservados.

## Validación estática de publicación (2026-11-04)

- 192 referencias internas HTML y archivos revisadas con correspondencia en el repositorio y anclas existentes: **0 referencias rotas**.
- 7 páginas HTML, sin etiquetas o identificadores duplicados detectados.
- Cloudflare Web Analytics: un script por página; estado de proyecto rojo y sin datos privados en enlaces públicos.
- Las comprobaciones son **estáticas**; el acceso HTTP público y los servicios externos deben verificarse además en navegador. Un despliegue GitHub Pages con resultado `success` no sustituye esa comprobación.

## Arquitectura editorial v1.0 — 2026-11-04

La portada conserva el arte oficial de dragón y moneda, el tema visual y el indicador general rojo, pero resume cada área y dirige a páginas monográficas completas:

- `/red/`: red y modelo P2P/UTXO/PoW.
- `/mineria/`: minería GPU, mediciones y disponibilidad.
- `/emision/`: reglas monetarias, premine y pruebas ErgoTree.
- `/seguridad/`: modelo de amenazas, pruebas y divulgación.
- `/hitos/`: cronología, estados y criterios de evidencia pública.
- `/solidaria/`: política 0,5 % + 0,5 % y lotes voluntarios.
- `/transparencia/`: fondos, reconciliación, movimientos y privacidad.
- `/roadmap/`: fases y gates para testnet/mainnet.
- `/documentacion/`: referencias, guías, FAQ y glosario.
- `/privacidad/`: alojamiento, analítica y datos sensibles.

No se publican claves, rutas locales, puertos internos, datos bancarios, informes privados ni código del núcleo. Ergo devnet local es laboratorio, nunca una testnet SYPcoin. Todos los enlaces de portada deben llevar a capítulos concretos.

## Bilingual public website (2026-11-04)

- Spanish and English are maintained as separate static pages with canonical and hreflang pairs.
- The release stage remains red; the English status is IN DEVELOPMENT.
- Primary evidence is not yet public; posted milestone cards are summaries, not independent audits.
- English documentation also covers FAQ, participation, privacy and evidence summaries.
- Independent visual/browser audit is not verified due public-site DNS access limitations in this environment.

## Hitos del desarrollo — actualización editorial 2026-11-04

- Se han integrado los hitos H04–H13 del puente de avances suministrado por el propietario y se han conservado los cinco registros históricos SYPC-LAB existentes. H01–H03 se corresponden con SYP-LAB-001/002/003; no se duplican.
- Se han rectificado fechas históricas no confirmadas: hasta 2026-11-02 en los primeros ensayos, mes sin día confirmado para registros históricos posteriores, intervalo 3–4 de noviembre para minería GPU sobre Ergo devnet.
- CI experimental privada 42/42 PASS no significa dos nodos SYPcoin nativos reales, minería GPU nativa ni testnet pública. H11–H13 se distinguen como objetivos no conseguidos.
- Solo se muestran enlaces a evidencias públicas cuando se hayan verificado como públicamente accesibles. No se han añadido enlaces privados.
- Las páginas española e inglesa presentan los nuevos avances manteniendo el diseño y la identidad visual actuales.
- El documento original de traspaso es local y **no se incorpora ni se sube a GitHub**. El registro `data/hitos.json` contiene exclusivamente resúmenes editoriales públicos.

## Editorial update (2026-11-04)
Added milestone H14 and summarized the approved 24-hour solidarity-sales donation/evidence commitment, exclusively attributable costs and taxes, fiscal reconciliation, no designated beneficiary, separation from development funds and pending implementation. Both languages updated; no transactions added. No private coordination document or private links published.

## Experimental monetary disclosure clarification (2026-11-04)
The laboratory genesis includes initial solidarity, development and mining reward funds, so blanket claims of zero pre-created units were corrected. A personal founder reserve is not planned. Approximate 35-year emission, 240-second blocks and FRM contributions from year eight remain experimental and unratified. Private CI 42/42 results are not external audits or live native-network tests. No current site layouts or brand assets were changed.

## Publication sync: native P2P, offline signing and GPU-monitoring tests (2026-11-05)

The home and ES/EN network summaries now reflect the verified two-JVM native P2P handshake without blocks, distinct from historical Ergo devnet synchronization. Home milestone previews preserve the existing three-card layout and link to H23, H25 and H26. No native PoW block or GPU mining is claimed. Private coordination material and private evidence links are not published.

## Mining, security and roadmap editorial sync — 2026-11-05

Spanish/English Mining, Security and Roadmap pages now distinguish real P2P connectivity between two native JVM processes (without blocks), offline signed issuance, partial consensus cases and read-only GPU sensor CI from pending native mining. No new visual styles, images, site status changes or private core material were introduced.

## Testnet launch email opt-in (2026-11-05)
- Optional ES/EN launch-alert form at /participa/#testnet and /en/participa/#testnet, reachable from the homepage.
- FormSubmit POST forwards a single-purpose email opt-in to the designated project mailbox. Initial email activation and an end-to-end test must be performed by the mailbox owner before considering the form operational; subscriber email ownership is not verified.
- No subscribers are stored in this GitHub repository. Hidden honeypot and FormSubmit's default captcha limit automated abuse; no passwords, wallet keys or payments are accepted.
- Consent is unchecked by default, contains the one-notification purpose, privacy notice, manual unsubscribe contact, controller contact and planned retention.
- Custom ES/EN submission feedback pages retain the site's brand/design and release stage; site CSS only gained additive form rules.
- When sending manually, use BCC, honor unsubscribes, preserve consent evidence and delete subscriber records according to the published retention commitment.

## External form outage fallback (2026-11-05)

The optional testnet signup now uses FormSubmit's documented AJAX endpoint, never interpreting HTTP 200 or string `"false"` as success. FormSubmit outages, 522 errors and pending activation are shown inline with explicitly unconfirmed registration. A manual mailto option opens a prepared consent request, which visitors must send from their own email app. No emails are stored on GitHub, and the red development status, logo and original design remain unchanged.

## Web3Forms testnet opt-in — 2026-11-05

The existing Spanish and English testnet alert forms now POST to Web3Forms, using the provider's public client-side form access key and the existing email-only consent. JS uses JSON and accepts only a true boolean success response: a provider acknowledgment is not confirmation of inbox delivery or visitor email ownership. No private subscriber addresses are stored in GitHub. The optional Web3Forms botcheck field replaces the old honeypot. The manual mailto alternative and red development stage remain. FormSubmit is no longer used by the active forms; the project owner must verify a real end-to-end registration in their Proton inbox.

## Editorial sync — 2026-11-05 / bridge revision 15

- Source reviewed privately, with only public-facing summaries committed. No private document, local paths or private verification links published.
- H11/H12 updated: first native height-1 SYPcoin GPU-mined PoW (AMD RX 7900 XTX/Kubuntu Linux) was accepted, propagated and persisted by two private JVM nodes in v41.3. This is not complete network consensus or public mining.
- v41.4-R2 signed and verified a height-2 candidate offline; R3 passed 10/10 focused tests. No second block was mined or accepted, and no public miner exists.
- Mining architecture and planned compatibility now describe vendor-neutral core, separate mining engines, external optional SYP EcoMiner, AMD/Linux lab result, AMD/Windows then NVIDIA/Windows, NVIDIA/Linux later, Intel upon hardware availability. Per-device GPU controls never become core consensus rules.
- All site identity assets, CSS, navigation, status badge and project red development stage preserved.

## Public development record — 2026-11-06

- H28 records a mathematical model audit over 4,599,000 scheduled issuance heights (no native contract/admission claim).
- H29 records 16/16 native Scala fixture tests for work identity and UTXO-tip coherence, without a live node.
- H30 was updated from pending to 1/1 PASS on a local Ergo Akka test using real NodeViewHolder/CandidateGenerator actors and forced regeneration after one disposable block. It does not show autonomous SYPC issuance or sustained automatic mining.
- The public data record, ES/EN milestones and home summaries are synchronized in this revision. No private worktree path, secret, log, signing key or unpublished code is exposed.
- Development status, CSS, assets, logos, miner binaries and chain configuration stay unchanged.
