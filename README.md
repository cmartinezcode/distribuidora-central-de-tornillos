# Central de Tornillos

Sitio web estático de tornillería técnica al por mayor para Colombia, construido con
Astro 7, TypeScript y CSS propio. Incluye catálogo filtrable, fichas de producto,
cotización por volumen en COP, sectores, páginas de confianza y solicitud directa de
cotización sin registro ni carrito.

## Puesta en marcha

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # genera el sitio en dist/
npm run preview    # revisa el build de producción
npm run check      # comprobación de tipos y plantillas Astro
```

En este entorno el servidor de desarrollo se gestiona con
`astro dev --background`, `astro dev status`, `astro dev logs` y `astro dev stop`.
Si el binario no está en el `PATH`, usa `./node_modules/.bin/astro`.

## Antes de publicar

El proyecto funciona, pero los datos de negocio siguen siendo marcadores. Hay que
sustituirlos por los reales:

1. **Contacto y empresa** — `src/data/site.ts`: teléfono, WhatsApp, email, dirección,
   horario, NIT, año de fundación y URL. Los valores actuales (`601 000 0000`,
   `573000000000`, `ventas@centraldetornillos.co`, `901.000.000-1`, Calle 80) son
   marcadores.
2. **Catálogo y presentaciones** — `src/data/products.ts` y `src/data/categories.ts`.
   El catálogo tiene 8 referencias en 3 categorías (estructural, drywall y cubiertas),
   todas bajo pedido y sin precio publicado. La unidad de venta figura como
   «presentación por confirmar»: completa precio por caja, unidades y plazo cuando
   estén disponibles. Ajusta los tramos de volumen en `volumeTiers` si cambia la
   política comercial.
3. **Política de envío** — `freeShippingFrom` y `freeShippingLabel` en
   `src/data/site.ts` utilizan el umbral provisional de `$500.000 COP` sin IVA.
   Confirma la política real antes de publicar.
4. **Sectores, FAQ y textos** — `src/data/sectors.ts`, `src/data/faqs.ts` y las páginas
   de `src/pages/`. Revisa las afirmaciones de plazos y certificados.
5. **Legal** — `src/pages/legal/*.astro`: completa datos registrales y NIT reales y
   revisa los textos con asesoría legal colombiana (Ley 1581 de 2012, Decreto 1377 de
   2013, Ley 1480 de 2011). Las páginas legales están fuera del sitemap, llevan
   `noindex` y están bloqueadas en `public/robots.txt`.
6. **SEO** — cambia `site` en `astro.config.mjs` y la URL de `public/robots.txt` si el
   dominio final no es `centraldetornillos.co`. El sitemap se genera en el build.
7. **Imagen social** — `public/og.svg` es la fuente editable. Regenera `public/og.png`
   (1200 × 630) después de cambiar marca o claim con:
   `rsvg-convert -w 1200 -h 630 public/og.svg -o public/og.png`.
8. **Imágenes de producto** — `public/images/products/` contiene recortes con fondo
   transparente a partir de las fotografías suministradas por el negocio. Son imágenes
   de referencia, no fichas técnicas exactas. Las medidas 1 1/2&quot; y 12 × 3&quot;
   comparten la imagen de su familia hasta contar con una foto propia. Antes de publicar,
   valida que la geometría, el acabado y la arandela correspondan a la referencia real,
   confirma la autoría y reemplaza los archivos si es necesario.
   Autores, licencias y enlaces están en `/creditos` y en la sección
   «Créditos de imágenes» del README.

## Estructura

```text
src/
├── assets/           Imagen generada de respaldo (no usada actualmente en el hero)
├── components/       Header, Footer, tarjetas, filtros, iconos, ilustraciones SVG
├── data/             Sitio, categorías, productos, sectores y preguntas frecuentes
├── layouts/Base.astro  SEO, JSON-LD, menú móvil y barra de contacto
├── pages/            Rutas estáticas, categorías, productos, cotización, legales y 404
└── styles/           Tokens, estilos base y capa comercial `store.css`
public/               Favicon, icono Apple, marca, OG, robots y sitemap generado en build
```

## Flujo de cotización

- No hay carrito, cajón lateral, contador ni lista persistente en `localStorage`.
- Cada ficha permite indicar un número de cajas y abre `/cotizacion?producto=…&cantidad=…`
  con la referencia precargada.
- `/cotizacion` acepta varias referencias en un campo de texto libre (también pegado
  desde Excel), datos de empresa, NIT, ciudad de despacho y plazo deseado.
- El formulario prepara un correo mediante `mailto:` y, como alternativa, un mensaje de
  WhatsApp. No se envía nada hasta que el usuario decide enviarlo.
- No hay backend, cuentas ni pasarela de pago. Para producción se recomienda conectar
  el formulario a un endpoint propio o a un CRM, y mantener `mailto`/WhatsApp como
  respaldo. Valida también el consentimiento de privacidad en servidor.

## Precios e IVA

- Las 8 referencias del catálogo se trabajan **bajo pedido** y no publican precio.
- La cotización confirma precio por volumen, presentación, flete y plazo. Los precios
  se expresan en pesos colombianos (COP), por unidad y **sin IVA**.
- El IVA del 19 % se discrimina en la factura electrónica.
- Los tramos por volumen se aplican por cajas completas. La ficha muestra los rangos,
  pero el valor se confirma en la cotización.
- `formatCop` usa `Intl.NumberFormat("es-CO", { currency: "COP" })`, sin decimales.

## Diseño y UX

La dirección visual se llama **acero y amarillo CAT**:

- Azul técnico (`#0D52A0`) para cabecera, confianza y módulos técnicos; grafito para
  cierres y hero.
- Amarillo Caterpillar (`#FFCD11`) reservado a acciones, avisos y acentos; los
  botones usan texto grafito para mantener contraste.
- Hueso y blanco dan aire al catálogo y reducen la fatiga en tablas densas.
- La retícula, las cotas, las etiquetas monoespaciadas y las imágenes de producto
  recortadas sobre fondo transparente funcionan como lenguaje propio. El hero usa la
  imagen del tornillo drywall 6 × 1 de `Escritorio/imagenes/tornillo-drywall-6x1.jpeg`,
  recortada y sin fondo en `public/images/products/drywall-6x1.png`. La fotografía
  `foto.webp` y la composición técnica del flange 10 × 2&quot; quedan como alternativas.
- El logotipo combina un hexágono sólido con una cabeza de tornillo calada y una ranura
  amarilla. El símbolo es azul sobre fondos claros y ámbar sobre azul/oscuro; no se usa en
  blanco. El archivo base azul está en `public/brand/logo-mark.svg` y la versión ámbar en
  `public/brand/logo-mark-amber.svg`; el favicon usa la misma geometría.
- Móvil: menú en panel, buscador en cabecera, filtros accesibles, barra inferior con
  catálogo, cotización y WhatsApp, y objetivos táctiles de al menos 40 px.
- Accesibilidad: foco visible, `prefers-reduced-motion`, contraste AA, formularios con
  etiquetas, validación nativa, `aria-live` en resultados y cierre de menús con Escape.

Los tokens de color, tipografía, radios y sombras están en `src/styles/tokens.css`.
Archivo e Inter se sirven en local con `@fontsource-variable`, sin llamadas a Google
Fonts.

## Créditos de imágenes

Las fotografías de producto fueron suministradas por el negocio para este catálogo. El
recorte, la rotación, la eliminación del fondo blanco y el ajuste de tamaño se hicieron
para integrarlas en la web. Todas se normalizaron a un lienzo cuadrado de 700 × 700 px
con el producto centrado y sin deformación. Antes de publicar, confirma la autoría y los
derechos de uso de cada archivo original.

- **Drywall** — fotografía de referencia del tornillo 6 × 1&quot;.
- **Truss punta aguja** — fotografía de referencia de cabeza lenteja y punta aguja.
- **Truss punta broca** — fotografía de referencia de cabeza lenteja y punta broca.
- **Framing** — fotografía de referencia del tornillo framing 7 × 7/16&quot;.
- **Flange con neopreno** — fotografías de referencia de los autoperforantes 10 × 1&quot;
  y 10 × 2&quot;. Las medidas 10 × 1 1/2&quot; y 12 × 3&quot; reutilizan la imagen de su
  familia.
- **Hero** — usa la imagen del tornillo drywall 6 × 1 de
  `Escritorio/imagenes/tornillo-drywall-6x1.jpeg`, recortada y sin fondo en
  `public/images/products/drywall-6x1.png` y renderizada por
  `src/components/HeroPhoto.astro`. La prueba con `foto.webp`
  (`public/images/hero-foto.webp` y `public/images/hero-foto-cutout.png`) y la composición
  técnica del flange 10 × 2&quot; (`src/components/HeroSpec.astro`) quedan como
  alternativas. La imagen generada con IA (`src/assets/hero-flange-10x2.jpg`) y
  `public/images/hero-tornillos.jpg` también quedan como recursos sin uso.

La página `/creditos` reproduce esta información. Las imágenes no confirman la geometría
exacta de cada referencia; la ficha del fabricante y la cotización prevalecen.

## Verificación

```sh
npm run check
npm run build
```

El build genera 30 páginas estáticas. La revisión manual debe cubrir navegación por
todas las rutas, filtros y búsqueda, precarga de cotización, enlaces de WhatsApp, menú
móvil, barra inferior y legales.
