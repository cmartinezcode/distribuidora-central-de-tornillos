/**
 * Datos generales del sitio.
 * Los datos de contacto, NIT y dirección son marcadores de Colombia:
 * sustitúyelos por los reales antes de publicar.
 */
export const site = {
  name: "Central de Tornillos",
  legalName: "Central de Tornillos S.A.S.",
  nit: "901.000.000-1",
  tagline: "Tornillería al mejor precio",
  description:
    "Suministro al por mayor de tornillería estructural, drywall y cubiertas en Colombia. Referencias bajo pedido, cotización por volumen y despacho nacional.",
  url: "https://www.centraldetornillos.co",
  phone: "+57 601 000 0000",
  phoneDisplay: "601 000 0000",
  whatsapp: "573000000000",
  email: "ventas@centraldetornillos.co",
  address: {
    street: "Calle 80 # 68-45, Zona Industrial",
    city: "Bogotá D.C.",
    region: "Cundinamarca",
    postalCode: "110111",
    country: "CO",
  },
  hours: "Lunes a viernes, 8:00–18:00 · Sábados, 8:00–12:00",
  iva: 0.19,
  ivaLabel: "IVA 19 %",
  freeShippingFrom: 500000,
  freeShippingLabel: "$500.000 COP",
  copPerEur: 4300,
  priceNote:
    "Precios bajo cotización: confirmamos presentación, volumen, disponibilidad y flete.",
  minOrderNote:
    "Pedido mínimo: 1 caja. Envío gratis desde $500.000 COP (sin IVA) en cobertura principal.",
  coverage:
    "Bogotá, Medellín, Cali, Barranquilla y cobertura nacional con transportadora aliada.",
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
