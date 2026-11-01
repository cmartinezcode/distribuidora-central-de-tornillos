import { categories, categoryBySlug, type ArtType } from "./categories";
import { eurToCop, formatCop } from "./site";

export type StockState = "in-stock" | "low" | "order";

interface Variant {
  measure: string;
  d: number;
  l: number;
  price?: number;
  stock?: StockState;
  code?: string;
  slug?: string;
  featured?: boolean;
  unitLabel?: string;
  image?: string;
}

interface Family {
  id: string;
  code: string;
  name: string;
  category: string;
  norm: string;
  material: string;
  finish: string;
  head: string;
  drive: string;
  art: ArtType;
  image: string;
  pack: number;
  unit: string;
  unitLabel: string;
  description: string;
  applications: string[];
  features: string[];
  variants: Variant[];
}

export interface Product {
  sku: string;
  slug: string;
  name: string;
  measure: string;
  family: string;
  familyId: string;
  category: string;
  categoryName: string;
  norm: string;
  material: string;
  finish: string;
  head: string;
  drive: string;
  art: ArtType;
  image: string;
  pack: number;
  unit: string;
  unitLabel: string;
  diameter: number;
  length: number;
  price: number;
  priceFrom: number;
  quoteOnly: boolean;
  stock: StockState;
  leadTime: string;
  description: string;
  applications: string[];
  features: string[];
  featured: boolean;
  search: string;
}

export const volumeTiers = [
  { minBoxes: 1, factor: 1, label: "1–4 cajas" },
  { minBoxes: 5, factor: 0.92, label: "5–19 cajas" },
  { minBoxes: 20, factor: 0.86, label: "20–49 cajas" },
  { minBoxes: 50, factor: 0.79, label: "50+ cajas" },
] as const;

export const stockMeta: Record<
  StockState,
  { label: string; className: string; leadTime: string }
> = {
  "in-stock": { label: "En stock", className: "", leadTime: "Alistamiento 24–72 h" },
  low: { label: "Últimas unidades", className: "low", leadTime: "Alistamiento 24–72 h" },
  order: {
    label: "Bajo pedido",
    className: "order",
    leadTime: "Alistamiento 5–8 días hábiles",
  },
};

// Presentaciones por confirmar: el cliente cotiza y se valida la unidad de venta.
const pendingPackLabel = "caja · presentación por confirmar";

const families: Family[] = [
  {
    id: "drywall-astm-c-1002",
    code: "DRY",
    name: "Tornillo drywall ASTM C-1002 rosca fina",
    category: "drywall",
    norm: "ASTM C-1002",
    material: "Acero al carbono",
    finish: "Negro fosfatado",
    head: "Bugle drywall",
    drive: "Phillips PH2",
    art: "self",
    image: "/images/products/drywall-6x1.png",
    pack: 1,
    unit: "caja",
    unitLabel: pendingPackLabel,
    description:
      "Tornillo drywall con rosca fina, punta aguja y cabeza bugle. Fija placas de yeso a perfiles metálicos y madera; la rosca fina agarra la lámina sin romper el cartón.",
    applications: [
      "Fijación de placas de yeso y superboard",
      "Tabiques y cielos rasos con perfilería metálica",
      "Reparaciones y remates de drywall",
      "Montaje de placas sobre estructura de madera",
    ],
    features: [
      "Rosca fina para mayor agarre en la placa",
      "Punta aguja para arranque controlado",
      "Cabeza bugle que avellana sin romper el cartón",
      "Acabado negro fosfatado",
    ],
    variants: [
      {
        measure: '#6 × 1"',
        d: 3.5,
        l: 25.4,
        code: "06X1",
        slug: "drywall-astm-c-1002-6-x-1",
        stock: "order",
        featured: true,
        image: "/images/products/drywall-6x1.png",
      },
    ],
  },
  {
    id: "truss-aguja",
    code: "TRA",
    name: "Tornillo truss ASME B18.6.4 punta aguja",
    category: "drywall",
    norm: "ASME B18.6.4",
    material: "Acero al carbono",
    finish: "Negro fosfatado",
    head: "Truss",
    drive: "Phillips PH2",
    art: "self",
    image: "/images/products/truss-aguja.png",
    pack: 1,
    unit: "caja",
    unitLabel: pendingPackLabel,
    description:
      "Tornillo de cabeza truss y punta aguja para fijar placas de drywall a perfiles metálicos delgados. La cabeza ancha distribuye la presión y reduce el riesgo de rasgar el cartón.",
    applications: [
      "Placas de yeso sobre perfil metálico",
      "Cielos rasos y tabiques",
      "Fijaciones con cabeza de bajo perfil",
      "Montajes de drywall en seco",
    ],
    features: [
      "Punta aguja para perfiles delgados",
      "Cabeza truss de apoyo amplio",
      "Rosca fina para placas de yeso",
      "Acabado negro fosfatado",
    ],
    variants: [
      {
        measure: '#8 × 1/2"',
        d: 4.2,
        l: 12.7,
        code: "08X12",
        slug: "truss-aguja-8-x-1-2",
        stock: "order",
        featured: true,
        image: "/images/products/truss-aguja.png",
      },
    ],
  },
  {
    id: "framing-aguja",
    code: "FRA",
    name: "Tornillo framing ASME B18.6.4 punta aguja",
    category: "tornillos-estructural",
    norm: "ASME B18.6.4",
    material: "Acero al carbono",
    finish: "Negro fosfatado",
    head: "Bugle framing",
    drive: "Phillips PH2",
    art: "self",
    image: "/images/products/framing-aguja.png",
    pack: 1,
    unit: "caja",
    unitLabel: pendingPackLabel,
    description:
      "Tornillo framing con punta aguja para unir perfiles metálicos de calibre delgado en entramados y cerramientos. La cabeza bugle permite un acabado a ras y la rosca fina controla el avance.",
    applications: [
      "Uniones de perfiles metálicos",
      "Entramados de steel framing",
      "Cerramientos y tabiquería",
      "Montajes de taller",
    ],
    features: [
      "Punta aguja para perfiles delgados",
      "Cabeza bugle para enrasar",
      "Rosca fina de avance controlado",
      "Acabado negro fosfatado",
    ],
    variants: [
      {
        measure: '#7 × 7/16"',
        d: 3.9,
        l: 11.1,
        code: "07X716",
        slug: "framing-aguja-7-x-7-16",
        stock: "order",
        featured: true,
        image: "/images/products/framing-aguja.png",
      },
    ],
  },
  {
    id: "truss-broca",
    code: "TRB",
    name: "Tornillo truss ASME B18.6.4 punta broca",
    category: "tornillos-estructural",
    norm: "ASME B18.6.4",
    material: "Acero al carbono",
    finish: "Cincado",
    head: "Truss",
    drive: "Phillips PH2",
    art: "self",
    image: "/images/products/truss-broca.png",
    pack: 1,
    unit: "caja",
    unitLabel: pendingPackLabel,
    description:
      "Tornillo truss con punta broca que perfora y rosca en un solo paso sobre perfiles metálicos. La cabeza ancha deja una fijación de bajo perfil en entramados y cerramientos.",
    applications: [
      "Unión de perfiles metálicos",
      "Estructuras livianas y cerramientos",
      "Montaje de steel framing",
      "Fijaciones que requieren perforar sin pretaladro",
    ],
    features: [
      "Punta broca autoperforante",
      "Cabeza truss de apoyo amplio",
      "Rosca fina para metal delgado",
      "Acabado cincado",
    ],
    variants: [
      {
        measure: '#8 × 1/2"',
        d: 4.2,
        l: 12.7,
        code: "08X12",
        slug: "truss-broca-8-x-1-2",
        stock: "order",
        featured: false,
        image: "/images/products/truss-broca.png",
      },
    ],
  },
  {
    id: "flange-neopreno",
    code: "FLA",
    name: "Tornillo flange SAE J78 con neopreno",
    category: "cubiertas",
    norm: "SAE J78",
    material: "Acero al carbono",
    finish: "Cincado con arandela de neopreno",
    head: "Flange",
    drive: 'Vaso 5/16"',
    art: "self",
    image: "/images/products/flange-10x1.png",
    pack: 1,
    unit: "caja",
    unitLabel: pendingPackLabel,
    description:
      "Tornillo flange autoperforante con arandela de neopreno para fijar cubiertas, fachadas y paneles. La arandela sella la perforación y la cabeza flange reparte la carga.",
    applications: [
      "Fijación de láminas de cubierta",
      "Panel sándwich y fachadas",
      "Canales y perfilería de cubierta",
      "Cierres sobre estructura metálica",
    ],
    features: [
      "Punta broca autoperforante",
      "Arandela de neopreno para estanqueidad",
      "Cabeza flange con arandela integrada",
      "Acabado cincado",
    ],
    variants: [
      {
        measure: '#10 × 1"',
        d: 4.8,
        l: 25.4,
        code: "10X1",
        slug: "flange-neopreno-10-x-1",
        stock: "order",
        featured: true,
        image: "/images/products/flange-10x1.png",
      },
      {
        measure: '#10 × 1 1/2"',
        d: 4.8,
        l: 38.1,
        code: "10X112",
        slug: "flange-neopreno-10-x-1-1-2",
        stock: "order",
        image: "/images/products/flange-10x1.png",
      },
      {
        measure: '#10 × 2"',
        d: 4.8,
        l: 50.8,
        code: "10X2",
        slug: "flange-neopreno-10-x-2",
        stock: "order",
        image: "/images/products/flange-10x2.png",
      },
      {
        measure: '#12 × 3"',
        d: 5.5,
        l: 76.2,
        code: "12X3",
        slug: "flange-neopreno-12-x-3",
        stock: "order",
        image: "/images/products/flange-10x2.png",
      },
    ],
  },
];

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[×✕]/g, "x")
    .toLowerCase();
}

const round = (value: number, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

const makeSku = (family: Family, variant: Variant): string => {
  if (variant.code) return `${family.code}-${variant.code}`;
  const diameter = String(Math.round(variant.d * 10)).padStart(3, "0");
  const length = String(variant.l).padStart(3, "0");
  return `${family.code}-${diameter}-${length}`;
};

export const products: Product[] = families.flatMap((family) => {
  const category = categoryBySlug(family.category);
  return family.variants.map((variant) => {
    const stock = variant.stock ?? "order";
    const name = `${family.name} ${variant.measure}`;
    const unitLabel = variant.unitLabel ?? family.unitLabel;
    const sku = makeSku(family, variant);
    const price = variant.price ?? 0;
    const measureCompact = variant.measure
      .replace(/[×✕]/g, "x")
      .replace(/["#\s]/g, "");
    const measureCompactHash = variant.measure
      .replace(/[×✕]/g, "x")
      .replace(/["\s]/g, "");
    return {
      sku,
      slug: variant.slug ?? `${family.id}-${slugify(variant.measure)}`,
      name,
      measure: variant.measure,
      family: family.name,
      familyId: family.id,
      category: family.category,
      categoryName: category?.name ?? family.category,
      norm: family.norm,
      material: family.material,
      finish: family.finish,
      head: family.head,
      drive: family.drive,
      art: family.art,
      image: variant.image ?? family.image,
      pack: family.pack,
      unit: family.unit,
      unitLabel,
      diameter: variant.d,
      length: variant.l,
      price,
      priceFrom:
        price > 0
          ? round(price * volumeTiers[volumeTiers.length - 1].factor, 3)
          : 0,
      quoteOnly: price <= 0,
      stock,
      leadTime: stockMeta[stock].leadTime,
      description: family.description,
      applications: family.applications,
      features: family.features,
      featured: variant.featured ?? false,
      search: normalizeText(
        [
          name,
          sku,
          family.name,
          family.norm,
          family.material,
          family.finish,
          family.head,
          family.drive,
          variant.measure,
          measureCompact,
          measureCompactHash,
          family.code,
          "bajo pedido",
          "cotizacion",
          category?.name ?? "",
          category?.navLabel ?? "",
          category?.short ?? "",
          ...(category?.keywords ?? []),
        ].join(" ")
      ),
    };
  });
});

export const featuredProducts = products.filter((product) => product.featured);

export const productsByCategory = (slug: string) =>
  products.filter((product) => product.category === slug);

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getCategoryProducts = (slug: string) =>
  productsByCategory(slug);

export const relatedProducts = (product: Product, limit = 4) => {
  const sameCategory = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const extra = products.filter(
    (item) =>
      item.slug !== product.slug &&
      !sameCategory.some((candidate) => candidate.slug === item.slug)
  );
  return [...sameCategory, ...extra].slice(0, limit);
};

export const categoryCount = (slug: string) =>
  products.filter((product) => product.category === slug).length;

export const totalReferences = products.length;

export const categoryNames = categories.map((category) => category.name);

/* ---------- Formato ---------- */

// Los precios de demostración están en EUR. Se convierten a COP si hay tarifa.
export const formatMoney = (value: number) =>
  value > 0 ? formatCop(eurToCop(value)) : "A cotizar";

export const formatUnitPrice = (value: number) =>
  value > 0 ? formatCop(eurToCop(value)) : "A cotizar";

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("es-CO").format(value);

/* ---------- Precios por volumen ---------- */

export function tierForBoxes(boxes: number) {
  const safeBoxes = Math.max(1, Math.floor(boxes));
  return (
    [...volumeTiers].reverse().find((tier) => safeBoxes >= tier.minBoxes) ??
    volumeTiers[0]
  );
}

export function unitPriceForBoxes(product: Product, boxes: number): number {
  if (product.price <= 0) return 0;
  const tier = tierForBoxes(boxes);
  return round(product.price * tier.factor, 4);
}

export function lineTotal(product: Product, boxes: number): number {
  return round(unitPriceForBoxes(product, boxes) * product.pack * Math.max(1, boxes), 2);
}

export function savingPercent(product: Product, boxes: number): number {
  if (product.price <= 0) return 0;
  const unit = unitPriceForBoxes(product, boxes);
  return Math.round((1 - unit / product.price) * 100);
}
