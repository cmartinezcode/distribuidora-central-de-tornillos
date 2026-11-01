/**
 * Datos generales del sitio.
 * El horario, el año de fundación y los datos registrales definitivos siguen
 * siendo marcadores: confírmalos antes de publicar.
 */
export const site = {
  name: "Central de Tornillos",
  legalName: "Central de Tornillos",
  tagline: "Tornillería estructural al mejor precio",
  description:
    "Suministro al por mayor de tornillería estructural, drywall y cubiertas desde La Dorada, Caldas, para Colombia. Referencias bajo pedido, cotización por volumen y despacho nacional.",
  url: "https://distribuidoracentraldetornillos.com",
  phone: "+57 314 771 3179",
  phoneDisplay: "314 771 3179",
  whatsapp: "573147713179",
  email: "ventas@distribuidoracentraldetornillos.com",
  address: {
    street: "Carrera 15 # 56, Centro",
    city: "La Dorada",
    region: "Caldas",
    postalCode: "175031",
    country: "CO",
  },
  geo: {
    latitude: 5.45384,
    longitude: -74.664675,
  },
  serviceAreas: [
    "La Dorada",
    "Puerto Salgar",
    "Honda",
    "Mariquita",
    "Guaduas",
    "Fresno",
    "Victoria",
    "Norcasia",
    "Puerto Boyacá",
  ],
  hours: "Lunes a viernes, 8:00–18:00 · Sábados, 8:00–12:00",
  shipping: {
    local:
      "La Dorada: entrega el mismo día para pedidos confirmados y referencias disponibles.",
    localShort: "La Dorada: mismo día",
    national:
      "Fuera de La Dorada, la disponibilidad de entrega y el plazo dependen de la transportadora y el destino: promedio de 2–5 días hábiles en ciudades principales y 3–8 días hábiles en otros municipios.",
    cost:
      "El costo del flete lo determina la transportadora según destino, peso y volumen; lo confirmamos en la cotización.",
    note:
      "El plazo total suma alistamiento y tránsito. Si la referencia está bajo pedido, el alistamiento se confirma antes de despachar.",
  },
  copPerEur: 4300,
  priceNote:
    "Precios bajo cotización: confirmamos presentación, volumen, disponibilidad y flete.",
  minOrderNote:
    "Pedido mínimo: 1 caja. En La Dorada, entrega el mismo día para pedidos confirmados y referencias disponibles. Fuera de La Dorada, la disponibilidad y el plazo dependen de la transportadora y el destino; el costo también depende del peso y el volumen.",
  coverage:
    "La Dorada, Caldas y municipios del Magdalena Medio; cobertura nacional con transportadora aliada.",
  founded: 2004,
} as const;

export const formatCop = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

/** Convierte los precios de demostración (EUR) a COP. Sustituir por tarifa real. */
export const eurToCop = (value: number) => Math.round(value * site.copPerEur);

export const whatsappHref = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Sectores", href: "/sectores" },
  { label: "Calidad", href: "/calidad" },
  { label: "Despacho", href: "/logistica" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const footerLinks = {
  catalogo: [
    { label: "Tornillos estructurales", href: "/categoria/tornillos-estructural" },
    { label: "Drywall", href: "/categoria/drywall" },
    { label: "Cubiertas", href: "/categoria/cubiertas" },
    { label: "Catálogo completo", href: "/catalogo" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Tornillería en La Dorada", href: "/tornillos-la-dorada" },
    { label: "Calidad y normativa", href: "/calidad" },
    { label: "Despacho y plazos", href: "/logistica" },
    { label: "Sectores", href: "/sectores" },
    { label: "Preguntas frecuentes", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
    { label: "Condiciones de venta", href: "/legal/condiciones" },
    { label: "Créditos de imágenes", href: "/creditos" },
  ],
};
