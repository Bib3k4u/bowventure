import yarsagumba from "@/assets/p-yarsagumba.jpg";
import madhoney from "@/assets/p-madhoney.jpg";
import saffron from "@/assets/p-saffron.jpg";
import ashwagandha from "@/assets/p-ashwagandha.jpg";
import shatavari from "@/assets/p-shatavari.jpg";
import jatamansi from "@/assets/p-jatamansi.jpg";
import kutki from "@/assets/p-kutki.jpg";
import chiraito from "@/assets/p-chiraito.jpg";
import timur from "@/assets/p-timur.jpg";
import blackpepper from "@/assets/p-blackpepper.jpg";
import cardamom from "@/assets/p-cardamom.jpg";
import cinnamon from "@/assets/p-cinnamon.jpg";
import turmeric from "@/assets/p-turmeric.jpg";
import coffee from "@/assets/p-coffee.jpg";
import arabica100 from "@/assets/p-arabica-100.jpg";
import tea from "@/assets/p-tea.jpg";

export type Tier = "Rare Himalayan Reserve" | "Ayurvedic Botanicals" | "Gourmet Spices" | "Highland Beverages";

export interface Product {
  slug: string;
  no: string;
  name: string;
  latin: string;
  native: string;
  tier: Tier;
  origin: string;
  tagline: string;
  description: string;
  forms: string;
  packaging: string;
  shelfLife: string;
  moq: string;
  leadTime: string;
  priceFrom: number; // USD per unit
  unit: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "yarsagumba", no: "01", name: "Yarsagumba", latin: "Ophiocordyceps sinensis", native: "यार्सागुम्बा",
    tier: "Rare Himalayan Reserve", origin: "Dolpa · 3,500m+",
    tagline: "The Himalayan gold — rarer by weight than most precious metals.",
    description: "A parasitic fungus harvested from alpine meadows above 3,500 metres in Dolpa. Prized in Traditional Chinese and Tibetan Medicine for centuries. Annual collection window: May–July.",
    forms: "Whole dried · Premium single-piece selection",
    packaging: "Vacuum-sealed foil pouch · Wooden presentation box",
    shelfLife: "24 months sealed",
    moq: "100 g", leadTime: "2–4 weeks", priceFrom: 38, unit: "per gram", image: yarsagumba,
  },
  {
    slug: "mad-honey", no: "02", name: "Mad Honey", latin: "Apis laboriosa", native: "Deli bal",
    tier: "Rare Himalayan Reserve", origin: "Lamjung · Cliff-harvested",
    tagline: "Wild-harvested from 300-foot cliffs. Produced nowhere else on earth.",
    description: "Rhododendron-nectar honey from the world's largest honeybee, collected by traditional Gurung honey hunters on cliff faces between 2,500–4,200m. Twice-yearly harvest.",
    forms: "Raw, unfiltered, unpasteurised · Glass jar",
    packaging: "250g / 500g glass jar · Wooden gift-box option",
    shelfLife: "36 months+",
    moq: "100 jars", leadTime: "3–5 weeks", priceFrom: 42, unit: "per 250g jar", image: madhoney,
  },
  {
    slug: "saffron", no: "03", name: "Saffron", latin: "Crocus sativus", native: "केसर · Kesar",
    tier: "Rare Himalayan Reserve", origin: "Jumla · Highest in the world",
    tagline: "The highest-altitude saffron cultivation on earth.",
    description: "Cultivated in Jumla at altitudes that rival nothing else. Crocin levels match Iranian La Mancha grades. Sargol, Negin and Pushal grades available.",
    forms: "Sargol · Negin · Pushal",
    packaging: "Retail tins 1g / 2g / 5g · Bulk foil pouch",
    shelfLife: "24 months",
    moq: "500 g", leadTime: "2–3 weeks", priceFrom: 14, unit: "per gram", image: saffron,
  },
  {
    slug: "ashwagandha", no: "04", name: "Ashwagandha", latin: "Withania somnifera", native: "अश्वगन्धा",
    tier: "Ayurvedic Botanicals", origin: "Mid-hill · Cultivated",
    tagline: "The classical adaptogen, grown at altitude for higher withanolide content.",
    description: "Sustainably farmed root, lab-tested per batch. Target ≥ 2.5% withanolides for premium lots. Whole, cut, or microfine powder.",
    forms: "Whole root · Cut & sifted · Powder",
    packaging: "25 kg multi-wall bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 12, unit: "per kg", image: ashwagandha,
  },
  {
    slug: "shatavari", no: "05", name: "Shatavari", latin: "Asparagus racemosus", native: "सतावरी",
    tier: "Ayurvedic Botanicals", origin: "Mid-hill · Cultivated",
    tagline: "The classical women's tonic of Ayurveda.",
    description: "Premium peeled root, cut, or microfine powder. Saponin-tested per batch. Non-irradiated, lot-to-lot consistency.",
    forms: "Premium peeled · Cut & sifted · Powder",
    packaging: "25 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 14, unit: "per kg", image: shatavari,
  },
  {
    slug: "jatamansi", no: "06", name: "Jatamansi", latin: "Nardostachys jatamansi", native: "जटामसी",
    tier: "Ayurvedic Botanicals", origin: "Alpine 3,000m+ · Wild-harvested",
    tagline: "Himalayan spikenard — sacred root of perfumery and Ayurveda.",
    description: "CITES Appendix II — export permits handled by us. Annual allocation; reserve early. Whole rhizome and cut available.",
    forms: "Whole rhizome · Cut",
    packaging: "Sealed bag",
    shelfLife: "24 months",
    moq: "10 kg", leadTime: "6–10 weeks (CITES)", priceFrom: 48, unit: "per kg", image: jatamansi,
  },
  {
    slug: "kutki", no: "07", name: "Kutki", latin: "Picrorhiza kurroa", native: "कुटकी",
    tier: "Ayurvedic Botanicals", origin: "Alpine · Wild-harvested",
    tagline: "Bitter liver tonic from the high Himalaya.",
    description: "Picroside (I + II) tested per batch for extract-grade applications. Volumes capped to maintain sustainable offtake.",
    forms: "Whole rhizome · Powder",
    packaging: "Sealed bag",
    shelfLife: "24 months",
    moq: "10 kg", leadTime: "3–4 weeks", priceFrom: 36, unit: "per kg", image: kutki,
  },
  {
    slug: "chiraito", no: "08", name: "Chiraito", latin: "Swertia chirayita", native: "चिराइतो",
    tier: "Ayurvedic Botanicals", origin: "Mid-hills to alpine · Wild",
    tagline: "Whole-plant bitter prized across South Asia.",
    description: "Wild-harvested whole plant. Amarogentin and swertiamarin content available on request for extract buyers.",
    forms: "Whole plant · Cut",
    packaging: "25 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 9, unit: "per kg", image: chiraito,
  },
  {
    slug: "timur", no: "09", name: "Timur", latin: "Zanthoxylum armatum", native: "तिमुर",
    tier: "Gourmet Spices", origin: "Rolpa · Mid-hill",
    tagline: "Nepali Sichuan pepper — citrus-floral, tongue-tingling.",
    description: "Genetically distinct from Chinese Sichuan pepper. Brighter citrus note, prized by European chefs. Premium whole husk and ground.",
    forms: "Premium whole husk · Standard whole · Ground · Retail jars",
    packaging: "25 kg bag · 50g glass jar",
    shelfLife: "18 months",
    moq: "10 kg", leadTime: "2–3 weeks", priceFrom: 22, unit: "per kg", image: timur,
  },
  {
    slug: "black-pepper", no: "10", name: "Black Pepper", latin: "Piper nigrum", native: "कालो मरिच",
    tier: "Gourmet Spices", origin: "Mid-hill · Cultivated",
    tagline: "Mid-hill grown, piperine-rich.",
    description: "Whole, cracked, or ground. Piperine content tested on request. Steam-sterilised option for food-service applications.",
    forms: "Whole · Cracked · Ground",
    packaging: "25 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 8, unit: "per kg", image: blackpepper,
  },
  {
    slug: "large-cardamom", no: "11", name: "Large Cardamom", latin: "Amomum subulatum", native: "अलैंची",
    tier: "Gourmet Spices", origin: "Ilam · Mid-hill",
    tagline: "Smoky, resinous black cardamom from the eastern hills.",
    description: "Traditional smoke-dried bold pods or kiln-dried for cleaner aroma. De-husked seed available.",
    forms: "Bold (smoke-dried) · Kiln-dried · Seeds",
    packaging: "25 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 18, unit: "per kg", image: cardamom,
  },
  {
    slug: "cinnamon", no: "12", name: "Cinnamon", latin: "Cinnamomum tamala", native: "दालचिनी",
    tier: "Gourmet Spices", origin: "Mid-hill · Cultivated",
    tagline: "Himalayan cassia — warm, robust, traditional.",
    description: "Premium quills or microfine ground. Mid-hill grown for full flavour development.",
    forms: "Premium bark quills · Ground",
    packaging: "25 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 7, unit: "per kg", image: cinnamon,
  },
  {
    slug: "turmeric", no: "13", name: "Turmeric", latin: "Curcuma longa", native: "बेसार",
    tier: "Gourmet Spices", origin: "Mid-hill · Cultivated",
    tagline: "High-curcumin, sun-dried — for kitchen and apothecary alike.",
    description: "Standard ≥3.5% curcuminoid; high-curcumin lots ≥5% available. Non-irradiated. Finger or microfine powder.",
    forms: "Finger · Standard powder · High-curcumin powder",
    packaging: "25–50 kg bag",
    shelfLife: "24 months",
    moq: "25 kg", leadTime: "2–3 weeks", priceFrom: 6, unit: "per kg", image: turmeric,
  },
  {
    slug: "coffee", no: "14", name: "Himalayan Arabica Coffee", latin: "Coffea arabica", native: "हिमाली कफी",
    tier: "Highland Beverages", origin: "1,200–1,800m · Shade-grown",
    tagline: "Single-origin Nepali arabica, washed and SCA-graded.",
    description: "Specialty green (SCA 80+), premium green, or roasted whole bean. Cupping samples on request.",
    forms: "Specialty green · Premium green · Roasted whole bean",
    packaging: "60 kg GrainPro jute · Retail bags 250g / 500g / 1kg",
    shelfLife: "Green 12 months · Roasted 9 months",
    moq: "60 kg", leadTime: "2–4 weeks", priceFrom: 11, unit: "per kg", image: coffee,
  },
  {
    slug: "herbal-tea", no: "15", name: "Herbal Tea Blends", latin: "Proprietary highland blends", native: "हर्बल चिया",
    tier: "Highland Beverages", origin: "Multi-zone · Small-batch",
    tagline: "Highland botanicals, blended in small batches.",
    description: "House blends loose or in biodegradable pyramid bags. Custom blends to partner spec — retail-ready packaging available.",
    forms: "Loose · Pyramid bags · Custom",
    packaging: "Bulk 10 kg · Carton of 500 units",
    shelfLife: "18 months",
    moq: "10 kg", leadTime: "3–4 weeks", priceFrom: 24, unit: "per kg", image: tea,
  },
];

export const tiers: Tier[] = ["Rare Himalayan Reserve", "Ayurvedic Botanicals", "Gourmet Spices", "Highland Beverages"];

export const tierRoman: Record<Tier, string> = {
  "Rare Himalayan Reserve": "I",
  "Ayurvedic Botanicals": "II",
  "Gourmet Spices": "III",
  "Highland Beverages": "IV",
};

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
