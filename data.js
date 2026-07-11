// Curated Real Estate Listings Data for Ayaan Developers
const propertiesData = [
  {
    id: "aura-cliffhouse",
    title: "The Aura Cliffhouse",
    location: "Malibu, California",
    price: 14500000,
    type: "Villa",
    beds: 5,
    baths: 6,
    sqft: 8500,
    image: "assets/hero_golden.png",
    tag: "Signature",
    description: "Suspended on a majestic cliffside above the Pacific, The Aura Cliffhouse represents the absolute pinnacle of luxury architectural minimalism. Engineered with premium concrete, glass, and carbon-steel, this sanctuary features double-height ceilings, a 75-foot infinity lap pool that blends with the horizon, custom Italian finishes, and automated smart-home intelligence.",
    features: ["Infinity Pool", "Oceanfront", "Smart Automation", "Wellness Suite", "Private Heliport", "Car Gallery"],
    timeline: {
      dawn: "assets/hero_dawn.png",
      golden: "assets/hero_golden.png",
      dusk: "assets/hero_dusk.png",
      night: "assets/hero_night.png"
    },
    rooms: [
      {
        id: "master-suite",
        name: "Grand Master Suite",
        size: "1,200 sq ft",
        description: "Featuring a 180-degree ocean view, a floating suspended fireplace, dual luxury travertine vanity baths, and an expansive walk-in boutique closet.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "sky-pool",
        name: "Infinity Sky Pool",
        size: "75 ft Length",
        description: "Heated saltwater pool with black volcanic stone lining, featuring a subterranean acrylic window viewing the lounge space below.",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wellness-wing",
        name: "Zen Spa & Wellness Wing",
        size: "950 sq ft",
        description: "Equipped with a Finnish sauna, an ice immersion bath, a steam room lined with fluted granite, and an integrated meditation deck.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "wine-gallery",
        name: "Subterranean Wine Gallery",
        size: "450 sq ft",
        description: "Climate-controlled cellar for 1,500 bottles, lined with oak cladding, raw stone columns, and an integrated tasting island.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "elysium-duplex",
    title: "Elysium Sky Duplex",
    location: "Manhattan, New York",
    price: 19800000,
    type: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: 6800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tag: "Exclusive",
    description: "Hovering on the 82nd floor of Billionaire's Row, the Elysium Duplex provides panoramic views of Central Park and the Manhattan skyline. This masterpiece offers double-height glass corridors, a private structural glass elevator, and premium travertine marble bathrooms designed by Award-Winning Architects.",
    features: ["Concierge 24/7", "Central Park Views", "Glass Elevator", "Private Gym", "Steam Room", "Wine Cellar"],
    rooms: [
      {
        id: "living-salon",
        name: "Grand Salon",
        size: "1,500 sq ft",
        description: "Double-height ceilings with custom architectural brass lighting fixtures, overlooking Central Park through 24-foot tall windows.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "sky-terrace",
        name: "Heated Sky Terrace",
        size: "800 sq ft",
        description: "An outdoor wrap-around terrace equipped with automated wind deflectors, fire pits, and a private stone jacuzzi.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "monolith-estate",
    title: "The Monolith Estate",
    location: "Geneva, Switzerland",
    price: 22000000,
    type: "Estate",
    beds: 6,
    baths: 8,
    sqft: 11200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    tag: "New Launch",
    description: "Blended seamlessly into the Alpine forest overlooking Lake Geneva, The Monolith Estate represents the pinnacle of modern ecological architecture. Powered by advanced geothermal systems, this structural marvel utilizes off-form concrete, local solid pine wood, and fluted glass to form an organic living space.",
    features: ["Geothermal HVAC", "Lake Views", "Indoor Lap Pool", "Guest House", "Automated Security", "Private Pier"],
    rooms: [
      {
        id: "lake-lounge",
        name: "Lakefront Sunken Lounge",
        size: "850 sq ft",
        description: "A custom leather-fitted seating pocket surrounded by floating ponds that align perfectly with the shoreline of Lake Geneva.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "zenith-oasis",
    title: "Zenith Jungle Oasis",
    location: "Ubud, Bali",
    price: 5200000,
    type: "Villa",
    beds: 3,
    baths: 4,
    sqft: 4600,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    tag: "Limited Collection",
    description: "An architectural poem crafted in Ubud's lush tropical valleys. Built completely over a natural river gorge, this property is structured with organic structural bamboo, volcanic stone walls, and high-performance minimal frame glazing that makes the boundary between interior and nature disappear.",
    features: ["Tropical Gorge View", "Volcanic Stone Pool", "Meditation Deck", "Natural Spring Water", "Fully Managed", "Eco Certified"],
    rooms: []
  }
];

// Architectural Materials Database
const materialsData = [
  {
    id: "travertine-stone",
    name: "Classic Roman Travertine",
    type: "Masonry & Finishes",
    origin: "Tivoli, Italy",
    sustainability: "95%",
    description: "Sourced directly from historical quarries in Tivoli, this travertine offers high thermal inertia and a unique pitted texture. It is treated with a custom matte sealant to retain its natural architectural beauty.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80",
    properties: ["High Density", "Thermal Regulation", "Lifetime Durability"]
  },
  {
    id: "fluted-oak",
    name: "Smoked Fluted Oak",
    type: "Millwork & Cladding",
    origin: "Black Forest, Germany",
    sustainability: "100% FSC",
    description: "Millwork panels crafted from sustainable German white oak, naturally carbonized to a deep charcoal tone. The fluted texture delivers exceptional acoustic absorption and tactile visual depth.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80",
    properties: ["Acoustic Dampening", "Zero VOC Treatment", "Scratch Resistant"]
  },
  {
    id: "brushed-brass",
    name: "Brushed Champagne Brass",
    type: "Metalwork & Details",
    origin: "Kyoto, Japan",
    sustainability: "85% Recycled",
    description: "Brushed brass alloy with a low reflective quality that develops a unique light patina over decades, preserving a rich, classic aesthetic.",
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80",
    properties: ["Antimicrobial Surface", "Corrosion Resistant", "Bespoke Patina"]
  },
  {
    id: "structural-glass",
    name: "Low-E Structural Glazing",
    type: "Facade & Glazing",
    origin: "Baden, Switzerland",
    sustainability: "92% Efficiency",
    description: "Triple-glazed structural glass sheets with dual-argon gas fill and low-emissivity coating. Blocks 99% of UV rays while offering maximum transparency and structural wind resistance.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    properties: ["Thermal Insulation", "99% UV Block", "Sound Isolation"]
  }
];

// Neighborhood Point Layers
const neighborhoodData = {
  dining: [
    { name: "L'Ambroisie (Michelin Guide)", distance: "1.2 miles" },
    { name: "The Cliffside Club (Fine Dining)", distance: "0.4 miles" },
    { name: "Vintage Lounge & Cellar", distance: "0.8 miles" }
  ],
  transit: [
    { name: "Malibu Private Heliport", distance: "2.1 miles" },
    { name: "Marina Yacht Slip 44", distance: "3.5 miles" },
    { name: "Westside Executive Airfield", distance: "12.0 miles" }
  ],
  lifestyle: [
    { name: "Pacific Riviera Yacht Club", distance: "1.5 miles" },
    { name: "The Sanctuary Wellness Resort", distance: "0.6 miles" },
    { name: "Oceanic Championship Golf Course", distance: "4.2 miles" }
  ],
  education: [
    { name: "Riviera Academy for Arts & Sciences", distance: "2.8 miles" },
    { name: "Malibu Prep School", distance: "1.9 miles" }
  ]
};

// Home Configurator Items
const configuratorData = {
  layouts: [
    { id: "pavilion", name: "Modernist Pavilion", desc: "Single-level cantilevered open layout", price: 0 },
    { id: "monolith", name: "Vertical Monolith", desc: "Multi-level layout with sky elevators", price: 1200000 },
    { id: "atrium", name: "Atrium Courtyard", desc: "Layout wrapped around a central biophilic garden", price: 800000 }
  ],
  facades: [
    { id: "concrete", name: "Off-Form Raw Concrete", desc: "Brutalist luxury textured finish", price: 0 },
    { id: "travertine", name: "Polished Tivoli Travertine", desc: "Elegant classic limestone blocks", price: 450000 },
    { id: "carbon", name: "Smoked Glass & Carbon Fiber", desc: "Futuristic dark structural sheets", price: 750000 }
  ],
  features: [
    { id: "infinity", name: "75ft Infinity Lap Pool", price: 350000 },
    { id: "heli", name: "Rooftop Private Heliport", price: 950000 },
    { id: "spa", name: "Subterranean Zen Wellness Spa", price: 400000 },
    { id: "security", name: "Military Grade Biometric Shield", price: 250000 },
    { id: "solar", name: "Solar Grid + Geothermal Power Cells", price: 300000 }
  ]
};

// Export variables if in Node.js environment, otherwise keep global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { propertiesData, materialsData, neighborhoodData, configuratorData };
}
