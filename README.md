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
- SYPcoin y SYP Solidaria se presentan como conceptos relacionados pero diferenciados.
- Preparado para integrar más adelante Explorer, estadísticas de red y documentación técnica real.

## Publicación

Este repositorio es el GitHub Pages de la cuenta `sypcoin2026`.

https://sypcoin2026.github.io

## Identidad visual oficial v0.2

Los recursos gráficos aprobados para SYPcoin proceden de la lámina oficial validada para la marca y se han exportado para web sin redibujarla ni alterar su composición.

- `assets/brand/logo-principal.webp` — logo original aprobado para portada (exportación web).
- `assets/brand/moneda.webp` — representación oficial de la moneda SYP.
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
