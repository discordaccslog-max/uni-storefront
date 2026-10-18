export interface Variant {
  id: string
  title: string
  price: string
}

export interface Product {
  id: string
  title: string
  handle: string
  description: string
  price: string
  image: string
  variants: Variant[]
  collection: 'single' | 'bulk'
  vendor: string
  badge?: string
}

export const products: Product[] = [
  {
    id: '8485789991099',
    title: 'MUHA MEDS 3RD GEN (NEW)',
    handle: 'muha-meds-limited-edition',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed before shipping to you.',
    price: '35.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/IMG_1942.jpg?v=1784768192',
    variants: [
      { id: '48123992047803', title: 'Hybrid', price: '35.99' },
      { id: '48123992080571', title: 'Sativa', price: '35.99' },
      { id: '48123992113339', title: 'Indica', price: '35.99' },
    ],
    collection: 'single',
    vendor: 'NST',
    badge: 'NEW',
  },
  {
    id: '8485790056635',
    title: 'MUHA MEDS X COOKIES (LIMITED EDITION)',
    handle: 'muha-meds-x-cookies-limited-edition',
    description: 'NEWLY RELEASED LIMITED EDITION / LOW STOCK. Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed.',
    price: '38.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/image3-1_cd66c1f3-e512-4231-a007-1125c6018ac3.jpg?v=1784768194',
    variants: [
      { id: '48123992244411', title: 'Hybrid', price: '38.99' },
      { id: '48123992277179', title: 'Sativa', price: '38.99' },
      { id: '48123992309947', title: 'Indica', price: '38.99' },
    ],
    collection: 'single',
    vendor: 'NST',
    badge: 'LIMITED',
  },
  {
    id: '8485790449851',
    title: 'ACE ULTRA PREMIUM',
    handle: 'ace-ultra-premium-2g',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each Ace Ultra Premium cartridge is lab tested, batch verified and tamper-sealed.',
    price: '35.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/2025-08-16-15.41.09_303a935e-3bf7-46c5-ba43-0a8ac9ec2e3f.jpg?v=1784768210',
    variants: [
      { id: '48123993751739', title: 'Hybrid', price: '35.99' },
      { id: '48123993784507', title: 'Sativa', price: '35.99' },
      { id: '48123993817275', title: 'Indica', price: '35.99' },
    ],
    collection: 'single',
    vendor: 'My Store',
  },
  {
    id: '8485790220475',
    title: 'WHOLEMELTS V7',
    handle: 'wholemelts-v7-copy',
    description: 'Dispensary-sourced and batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Quality.',
    price: '32.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/cf13f73b-c4fa-4f0d-ab86-e7aa8084b72f_6ddfe569-a3f9-4912-90b1-494281e72070.png?v=1784768201',
    variants: [
      { id: '48123992670395', title: 'SWITCH', price: '32.99' },
    ],
    collection: 'single',
    vendor: 'NST',
  },
  {
    id: '8485790253243',
    title: 'BIG CHIEF CARTRIDGE (2G)',
    handle: 'big-chief',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Ultra-refined premium distillate. Lab-tested, batch-verified, and tamper-sealed.',
    price: '36.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/1f1d5468-6074-4637-8f3e-e681071e841d.png?v=1784768203',
    variants: [
      { id: '48123992703163', title: 'Default Title', price: '36.99' },
    ],
    collection: 'single',
    vendor: 'NST',
  },
  {
    id: '8485790286011',
    title: 'BOUTIQ SWITCH V5',
    handle: 'boutiq-switch-v5',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Ultra-refined premium distillate. Lab-tested, batch-verified, and tamper-sealed.',
    price: '35.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/7845c05f-e62c-41e4-8bce-77c8c54d6d4a_1457df7a-0d28-4bfd-9560-cacdfe257838.png?v=1784768203',
    variants: [
      { id: '48123992735931', title: 'Switch', price: '35.99' },
      { id: '48123992768699', title: 'Custom', price: '35.99' },
    ],
    collection: 'single',
    vendor: 'NST',
  },
  {
    id: '8485790318779',
    title: 'GEEK BAR PULSE X',
    handle: 'geek-bar-pulse',
    description: 'Over 10 Flavors / Options. 25,000 Puffs Regular Mode. 15,000 Puffs Pulse Mode.',
    price: '31.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/14e38133-5113-4d44-b627-64c50bad81de2_2bde79dd-e0fd-44b0-b0bf-734e1b2dcf23.png?v=1784768205',
    variants: [
      { id: '48123992801467', title: 'Strawberry Watermelon', price: '31.99' },
      { id: '48123992834235', title: 'Blue Rancher', price: '31.99' },
      { id: '48123992867003', title: 'Blackberry B-Pop', price: '31.99' },
      { id: '48123992899771', title: 'Cool Mint', price: '31.99' },
      { id: '48123992932539', title: 'Grapefruit Refresher', price: '31.99' },
    ],
    collection: 'single',
    vendor: 'My Store',
    badge: '25K PUFFS',
  },
  {
    id: '8485790351547',
    title: 'GEEK BAR PULSE',
    handle: 'geek-bar-pulse-x',
    description: 'Over 10 Flavors / Options. 15,000 Puffs Regular Mode. 7,500 Puffs Pulse Mode.',
    price: '28.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/b4c233c1-1f8b-4e5c-a231-01ec7c269284_5de2f718-2f27-48b4-98e4-a0aa9ff9439d22.png?v=1784768207',
    variants: [
      { id: '48123993587899', title: 'Default Title', price: '28.99' },
    ],
    collection: 'single',
    vendor: 'My Store',
  },
  {
    id: '8485790384315',
    title: 'RAW GARDEN LIVE RESIN (1G)',
    handle: 'raw-garden-live-resin-1g',
    description: 'Dispensary-sourced and batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Live Resin Quality.',
    price: '42.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/92a32d66-569e-483b-b001-c19cb128159f_161a28f5-f2cf-46ce-bd7e-70a3c790bfd3.png?v=1784768208',
    variants: [
      { id: '48123993620667', title: 'HYBRID', price: '42.99' },
      { id: '48123993653435', title: 'SATIVA', price: '42.99' },
      { id: '48123993686203', title: 'INDICA', price: '42.99' },
    ],
    collection: 'single',
    vendor: 'My Store',
  },
  {
    id: '8485790417083',
    title: 'MUHA MEDS (SUMMER EDITION)',
    handle: 'muha-meds-sumer-edition',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Ultra-refined premium distillate. Lab-tested, batch-verified, and tamper-sealed.',
    price: '35.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/6228279a8bbf69274593cbe1_mm-logo600.webp?v=1784768209',
    variants: [
      { id: '48123993718971', title: 'Default Title', price: '35.99' },
    ],
    collection: 'single',
    vendor: 'My Store',
    badge: 'SUMMER',
  },
  {
    id: '8485789925563',
    title: '10PC BOUTIQ SWITCH V5',
    handle: '10pc-boutiq-switch-v5',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Ultra-refined premium distillate. Lab-tested, batch-verified, and tamper-sealed.',
    price: '135.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/7845c05f-e62c-41e4-8bce-77c8c54d6d4a_d0b0aab3-d546-476a-b3a8-d65db8a7b6d9.png?v=1784768189',
    variants: [
      { id: '48123991883963', title: 'Switch', price: '135.99' },
      { id: '48123991916731', title: 'New Gen Switch', price: '135.99' },
    ],
    collection: 'bulk',
    vendor: 'NST',
    badge: '10 PACK',
  },
  {
    id: '8485790023867',
    title: '10PC MUHA MEDS X COOKIES (LIMITED EDITION)',
    handle: '10pc-muha-meds-x-cookies-limited-edition',
    description: 'NEWLY RELEASED LIMITED EDITION / LOW STOCK. Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed.',
    price: '145.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/710cfa5e-f8b3-4c34-957b-ce9291cdfe12_8b976eaa-c6d8-4c02-bc1a-822f693f0d6a.png?v=1784768194',
    variants: [
      { id: '48123992146107', title: 'Hybrid', price: '145.99' },
      { id: '48123992178875', title: 'Sativa', price: '145.99' },
      { id: '48123992211643', title: 'Indica', price: '145.99' },
    ],
    collection: 'bulk',
    vendor: 'NST',
    badge: '10 PACK',
  },
  {
    id: '8485790089403',
    title: '10PC ACE ULTRA PREMIUM',
    handle: '10pc-ace-ultra-premium',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each Ace Ultra Premium cartridge is lab tested, batch verified and tamper-sealed.',
    price: '125.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/2025-08-16-15.41.09.jpg?v=1784768196',
    variants: [
      { id: '48123992342715', title: 'Hybrid', price: '125.99' },
      { id: '48123992375483', title: 'Sativa', price: '125.99' },
      { id: '48123992408251', title: 'Indica', price: '125.99' },
    ],
    collection: 'bulk',
    vendor: 'My Store',
    badge: '10 PACK',
  },
  {
    id: '8485790122171',
    title: '10PC RAW GARDEN LIVE RESIN (1G)',
    handle: '10pc-raw-garden-live-resin-1g',
    description: 'Dispensary-sourced and batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Live Resin Quality.',
    price: '195.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/92a32d66-569e-483b-b001-c19cb128159f_6ba0327b-4684-4c5a-a144-ca499d242ac7.png?v=1784768197',
    variants: [
      { id: '48123992441019', title: 'HYBRID', price: '195.99' },
      { id: '48123992473787', title: 'SATIVA', price: '195.99' },
      { id: '48123992506555', title: 'INDICA', price: '195.99' },
    ],
    collection: 'bulk',
    vendor: 'My Store',
    badge: '10 PACK',
  },
  {
    id: '8485790154939',
    title: '10PC WHOLEMELTS V7',
    handle: '10pc-wholemelts-v7',
    description: 'Dispensary-sourced and batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Quality.',
    price: '120.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/cf13f73b-c4fa-4f0d-ab86-e7aa8084b72f.png?v=1784768199',
    variants: [
      { id: '48123992539323', title: 'SWITCH', price: '120.99' },
    ],
    collection: 'bulk',
    vendor: 'NST',
    badge: '10 PACK',
  },
  {
    id: '8485790187707',
    title: '20PC ACE ULTRA PREMIUM',
    handle: '20pc-ace-ultra-premium',
    description: 'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each Ace Ultra Premium cartridge is lab tested, batch verified and tamper-sealed.',
    price: '205.99',
    image: 'https://cdn.shopify.com/s/files/1/0733/6283/3595/files/2025-08-16-15.41.09_35180b39-64e3-45b9-9c2e-6632d0698281.jpg?v=1784768199',
    variants: [
      { id: '48123992572091', title: 'Hybrid', price: '205.99' },
      { id: '48123992604859', title: 'Sativa', price: '205.99' },
      { id: '48123992637627', title: 'Indica', price: '205.99' },
    ],
    collection: 'bulk',
    vendor: 'My Store',
    badge: '20 PACK',
  },
]

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle)
}

export function getProductsByCollection(collection: 'single' | 'bulk'): Product[] {
  return products.filter((p) => p.collection === collection)
}
