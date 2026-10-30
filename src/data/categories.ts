export type ArtType =
  | "wood"
  | "machine"
  | "self"
  | "nut"
  | "washer"
  | "anchor"
  | "chemical"
  | "rod";

export interface Category {
  slug: string;
  name: string;
  navLabel: string;
  short: string;
  description: string;
  art: ArtType;
  image: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    slug: "tornillos-estructural",
    name: "Tornillos estructurales",
    navLabel: "Estructural",
    short: "Framing y truss punta broca",
    description:
      "Tornillos para perfiles metálicos, entramados y cerramientos: framing y truss con punta aguja o punta broca.",
    art: "self",
    image: "/images/products/framing-aguja.png",
    keywords: [
      "estructural",
      "framing",
      "truss",
      "punta broca",
      "perfil metalico",
      "steel framing",
      "asme b18.6.4",
    ],
  },
  {
    slug: "drywall",
    name: "Drywall",
    navLabel: "Drywall",
    short: "Roscas finas y punta aguja",
    description:
      "Tornillos para placas de yeso y perfilería delgada: drywall ASTM C-1002 y truss con punta aguja.",
    art: "self",
    image: "/images/products/drywall-6x1.png",
    keywords: [
      "drywall",
      "yeso",
      "superboard",
      "punta aguja",
      "rosca fina",
      "astm c-1002",
      "cabeza bugle",
    ],
  },
  {
    slug: "cubiertas",
    name: "Cubiertas",
    navLabel: "Cubiertas",
    short: "Flange con neopreno",
    description:
      "Tornillos flange autoperforantes con arandela de neopreno para cubiertas, fachadas y paneles sándwich.",
    art: "self",
    image: "/images/products/flange-10x1.png",
    keywords: [
      "cubierta",
      "flange",
      "neopreno",
      "sae j78",
      "panel sandwich",
      "fachada",
      "autoperforante",
    ],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);
