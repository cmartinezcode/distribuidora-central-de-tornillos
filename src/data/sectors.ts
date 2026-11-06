export interface Sector {
  slug: string;
  name: string;
  short: string;
  description: string;
  metaTitle?: string;
  metaDescription: string;
  icon: string;
  needs: string[];
  recommended: string[];
}

export const sectors: Sector[] = [
  {
    slug: "industria",
    name: "Industria y mantenimiento",
    short: "Paradas, montaje y reposición continua",
    description:
      "Suministro recurrente para fábricas, plantas de proceso y equipos de mantenimiento que necesitan referencias homogéneas, trazabilidad y entregas fiables.",
    metaDescription:
      "Tornillería al por mayor para industria y mantenimiento: reposición programada, trazabilidad por lote y cotización por volumen.",
    icon: "factory",
    needs: [
      "Reposición programada con precios estables",
      "Trazabilidad por lote y certificados de material",
      "Referencias estructurales, drywall y cubiertas",
    ],
    recommended: [
      "framing-aguja-7-x-7-16",
      "truss-broca-8-x-1-2",
      "flange-neopreno-10-x-1",
      "drywall-astm-c-1002-6-x-1",
    ],
  },
  {
    slug: "construccion",
    name: "Construcción y obra",
    short: "Fijaciones para estructura y cerramiento",
    description:
      "Tornillería para obra nueva y rehabilitación, con soluciones para perfilería metálica, drywall, fachadas y cubierta.",
    metaDescription:
      "Tornillería estructural, drywall y cubiertas para obra nueva y rehabilitación. Cotiza por volumen con despacho nacional desde La Dorada.",
    icon: "hardhat",
    needs: [
      "Referencias para steel framing y drywall",
      "Tornillos de cubierta con arandela de neopreno",
      "Presentaciones por confirmar según volumen",
    ],
    recommended: [
      "framing-aguja-7-x-7-16",
      "truss-broca-8-x-1-2",
      "truss-aguja-8-x-1-2",
      "flange-neopreno-10-x-1-1-2",
    ],
  },
  {
    slug: "talleres",
    name: "Talleres y carpintería metálica",
    short: "Montaje a medida y series cortas",
    description:
      "Para talleres que fabrican a medida y necesitan medidas concretas, asesoramiento técnico rápido y reposición de referencias.",
    metaTitle: "Tornillería para talleres metálicos",
    metaDescription:
      "Tornillería para talleres y carpintería metálica: medidas concretas, asesoría técnica y reposición de referencias por volumen.",
    icon: "wrench",
    needs: [
      "Medidas especiales bajo consulta",
      "Tornillería para entramados y cerramientos",
      "Despacho a ciudades principales",
    ],
    recommended: [
      "truss-aguja-8-x-1-2",
      "drywall-astm-c-1002-6-x-1",
      "flange-neopreno-10-x-2",
      "framing-aguja-7-x-7-16",
    ],
  },
  {
    slug: "instaladores",
    name: "Instaladores y montajes",
    short: "Fachadas, cubiertas y cerramientos",
    description:
      "Profesionales de la instalación que trabajan con panel sándwich, chapa, cubierta y fachada y necesitan tornillo autoperforante con estanqueidad.",
    metaDescription:
      "Tornillos flange con arandela de neopreno para fachadas, cubiertas y paneles sándwich. Cotiza por volumen y recibe asesoría técnica.",
    icon: "layers",
    needs: [
      "Tornillos flange con arandela de neopreno",
      "Presentaciones de 100, 1.000 o caja cerrada",
      "Reposición programada en obra",
    ],
    recommended: [
      "flange-neopreno-10-x-1",
      "flange-neopreno-10-x-1-1-2",
      "flange-neopreno-10-x-2",
      "flange-neopreno-12-x-3",
    ],
  },
];

export const getSector = (slug: string) =>
  sectors.find((sector) => sector.slug === slug);
