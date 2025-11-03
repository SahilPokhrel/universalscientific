/* ================================================================
PRODUCT CATALOG DATA
================================================================
This file is now updated to import and use your local images
from `src/assets/products/`.

**ACTION REQUIRED:**
Please check the file extensions on the imports below (e.g., .jpg, .png)
and make sure they match your actual files.
================================================================
*/

// --- 1. IMPORT YOUR REAL IMAGES HERE ---
// (File extensions are guesses, please verify)
import solarStreetLight from '../assets/products/solar-street-light.jpg';
import acetone from '../assets/products/Acetone.jpg';
import beakers from '../assets/products/Beakers.jpeg';
import biosafetyCabinet from '../assets/products/Biological-Safety-Cabinet.jpg';
import bufferSolution from '../assets/products/Buffer-Solution-pH-7.00.jpg';
import copperSulfate from '../assets/products/copper-ii-sulphate.jpeg';
import ferrousSulfate from '../assets/products/Ferrous-Sulphate.jpeg';
import fumeHood from '../assets/products/fume-hood-lsi.webp';
import humanSkeleton from '../assets/products/Human-Skeleton-Model.jpg';
import laminarAirFlow from '../assets/products/laminar-air-flow.jpg';
import knapsackSprayer from '../assets/products/Manual-Knapsack -Sprayer.jpeg';
import measuringCylinder from '../assets/products/Measuring-Cylinder.jpg';
import micropipette from '../assets/products/Micropipette.png';
import msMedium from '../assets/products/MS-Medium-Supplement.avif';
import muffleFurnace from '../assets/products/Muffle-furnace.jpg';
import testTubeRack from '../assets/products/Plastic-Test-Tube-Rack.webp';
import seedlingTrays from '../assets/products/Reusable-Seedling-Trays.jpg';
import solarPanel from '../assets/products/Solar-Panel.jpg';
import spectrophotometer from '../assets/products/Spectrophotometer-169.jpeg';
import testTubeBasket from '../assets/products/TestTubeBasket.webp';
import tissueRack from '../assets/products/tissue-culture-rack.jpg';
import weighingBottles from '../assets/products/Weighing-Bottles.webp';
import filterPaper from '../assets/products/Whatman-GFA-Filter-Paper.avif';


// --- 3. MAIN CATALOG DATA (Updated with new image variables) ---
export const catalogData = [
  {
    category: "Lab Equipments",
    subcategories: [
      {
        name: "Analytical Instruments",
        items: [
          {
            id: "sp-169",
            name: "Spectrophotometer 169",
            image: spectrophotometer,
            description: "A reliable, rugged, and easy-to-operate micro-controller based system for high stability and long life. Covers 320-990nm wavelength.",
            specs: [
              { key: "Model", value: "169" },
              { key: "Wavelength", value: "320-990nm" },
              { key: "Absorbance Range", value: "-0.3 to 2.500 Abs." },
              { key: "Spectral Bandwidth", value: "5nm" },
              { key: "Modes", value: "%T, ABS, Concentration, K Factor" },
              { key: "K Factor Range", value: "0.000-9999" },
              { key: "Concentration Range", value: "0.000-9999" },
              { key: "Display", value: "Digital LED (4 Digit)" },
              { key: "Detector", value: "Si-Photo-Diode" },
              { key: "Source", value: "Halogen Lamp 12V-50W" },
              { key: "Power", value: "230V ±10% 50Hz" },
              { key: "Optional", value: "RS 232 Interface" },
            ],
          },
          {
            id: "lf-001",
            name: "Muffle Furnace",
            image: muffleFurnace,
            description: "High-temperature furnace for lab applications, with digital controller.",
            specs: [
              { key: "Material Loading", value: "1000 Kg" },
              { key: "Melting Material", value: "Aluminium" },
              { key: "Max Temperature", value: "500-1000°C" },
              { key: "Power Source", value: "Diesel" },
              { key: "Type", value: "Tilt Furnace" },
            ],
          },
        ],
      },
      {
        name: "Clean Air Systems",
        items: [
          {
            id: "cas-001",
            name: "Laminar Air Flow",
            image: laminarAirFlow,
            description: "Provides a sterile work environment with HEPA-filtered air. Available in Horizontal (H) and Vertical (V) models.",
            specs: [
              { key: "Type", value: "Horizontal / Vertical" },
              { key: "Body", value: "S.S. or M.S. Powder Coated" },
              { key: "Models", value: "Grossing Work Station, Mobile Type" },
            ],
          },
          {
            id: "cas-002",
            name: "Fume Hood",
            image: fumeHood,
            description: "Protects users from hazardous fumes during chemical procedures.",
            specs: [
              { key: "Type", value: "Ducted / Ductless" },
              { key: "Body", value: "S.S. or M.S. Powder Coated" },
            ],
          },
          {
            id: "cas-003",
            name: "Biosafety Cabinet",
            image: biosafetyCabinet,
            description: "Provides personnel, product, and environmental protection.",
            specs: [
              { key: "Class", value: "Class I, II, or III" },
              { key: "Type", value: "A2, B1, B2" },
            ],
          },
        ],
      },
      {
        name: "Liquid Handling",
        items: [
          {
            id: "lh-001",
            name: "Micropipette (Fixopette)",
            image: micropipette,
            description: "Fixed or variable volume micropipettes for precise liquid transfer. Autoclavable tip cone.",
            specs: [
              { key: "Brand", value: "Tarsons (Fixopette)" },
              { key: "Type", value: "Variable / Fixed Volume" },
              { key: "Autoclavable", value: "Yes (Tip Cone)" },
            ],
          },
        ],
      },
      {
        name: "Anatomical Models",
        items: [
          {
            id: "am-001",
            name: "Human Skeleton Model",
            image: humanSkeleton,
            description: "Life-size (180cm) articulated human skeleton model. Made from unbreakable PVC, demonstrates natural posture and joint movement.",
            specs: [
              { key: "Size", value: "180cm (Life Size)" },
              { key: "Material", value: "Durable, Unbreakable PVC" },
              { key: "Includes", value: "Stand with roller base, Dust cover" },
              { key: "Models", value: "Articulated, Disarticulated, Ligamentous" },
            ],
          },
        ],
      },
      {
        name: "Lab & Culture Racks",
        items: [
          {
            id: "lcr-001",
            name: "Tissue Culture Castor Racks",
            image: tissueRack,
            description: "Powder-coated MS racks with fluorescent lights for tissue culture. Provides controlled light and temperature environment.",
            specs: [
              { key: "Frame", value: "MS CRC Powder Coated" },
              { key: "Shelves", value: "5 Nos. (4 illuminated)" },
              { key: "Size", value: "5'8\" H x 4'2\" W x 1'6\" D" },
              { key: "Lighting", value: "4 Fluorescent tubes (36/40W) per shelf" },
              { key: "Light Intensity", value: "3-4 Klux" },
              { key: "Ballast", value: "Solid State Electronic" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Glasswares",
    subcategories: [
      {
        name: "Measuring Cylinders",
        items: [
          {
            id: "gw-001",
            name: "Measuring Cylinder (LABCO)",
            image: measuringCylinder,
            description: "Class 'A' & 'B' measuring cylinders with hexagonal base. Amber & Clear. As per IS: 878: 2008.",
            specs: [
              { key: "Brand", value: "LABCO" },
              { key: "Class", value: "Class A / Class B" },
              { key: "Base", value: "Hexagonal" },
              { key: "Capacity", value: "10ml, 25ml, 50ml, 100ml, 250ml, 500ml, 1000ml, 2000ml" },
              { key: "Stopper", value: "Interchangeable (where applicable)" },
            ],
          },
        ],
      },
      {
        name: "Beakers & Bottles",
        items: [
          {
            id: "gw-002",
            name: "Beakers (LABCO)",
            image: beakers,
            description: "Borosilicate glass beakers, low form with spout, graduated. As per IS: 2619.",
            specs: [
              { key: "Brand", value: "LABCO" },
              { key: "Type", value: "Low Form with Spout" },
              { key: "Capacity", value: "25ml, 50ml, 100ml, 250ml, 500ml, 1000ml, 2000ml, 5000ml" },
              { key: "Glass", value: "Borosilicate" },
            ],
          },
          {
            id: "gw-003",
            name: "Weighing Bottles (LABCO)",
            image: weighingBottles,
            description: "Amber & Clear glass weighing bottles with interchangeable stopper.",
            specs: [
              { key: "Brand", value: "LABCO" },
              { key: "Type", value: "Squat Form / Tall Form" },
              { key: "Stopper", value: "Interchangeable" },
              { key: "Capacity", value: "5ml, 10ml, 15ml, 20ml, 35ml, 40ml, 60ml" },
            ],
          },
        ],
      },
      {
        name: "Racks & Storage",
        items: [
          {
            id: "con-002",
            name: "Plastic Test Tube Rack",
            image: testTubeRack,
            description: "Durable plastic test tube rack, 6-hole or 12-hole. Autoclavable.",
            specs: [
              { key: "Material", value: "Plastic (Polypropylene)" },
              { key: "Capacity", value: "6-Hole, 12-Hole, etc." },
              { key: "Autoclavable", value: "Yes" },
            ],
          },
          {
            id: "con-003",
            name: "Test Tube Baskets",
            image: testTubeBasket,
            description: "Plastic baskets for washing, draining, and storing test tubes and glassware.",
            specs: [
              { key: "Material", value: "Plastic (Polypropylene)" },
              { key: "Use", value: "Washing, Draining, Storage" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Chemicals",
    subcategories: [
      {
        name: "Lab Chemicals",
        items: [
          {
            id: "ch-001",
            name: "Copper (II) Sulfate",
            image: copperSulfate,
            description: "Emplura® grade Copper (II) sulfate pentahydrate (Cupric sulfate).",
            specs: [
              { key: "Brand", value: "Emplura" },
              { key: "CAS No", value: "7758-99-8" },
              { key: "Formula", value: "CuSO₄·5H₂O" },
              { key: "Molar Mass", value: "249.68 g/mol" },
              { key: "Size", value: "500g" },
            ],
          },
          {
            id: "ch-002",
            name: "Ferrous Sulphate",
            image: ferrousSulfate,
            description: "Purified Heptahydrate Iron (II) Sulphate by CDH.",
            specs: [
              { key: "Brand", value: "CDH" },
              { key: "CAS No", value: "7782-63-0" },
              { key: "Formula", value: "FeSO₄·7H₂O" },
              { key: "Molar Mass", value: "278.01 g/mol" },
              { key: "Size", value: "500g" },
            ],
          },
          {
            id: "ch-003",
            name: "Buffer Solution pH 7.00",
            image: bufferSolution,
            description: "Thermo Scientific Buffer solution, pH 7.00 (±0.01 at 25°C).",
            specs: [
              { key: "Brand", value: "Thermo Scientific" },
              { key: "pH Value", value: "7.00 (±0.01)" },
              { key: "Type", value: "Liquid" },
              { key: "Size", value: "500mL" },
            ],
          },
        ],
      },
      {
        name: "Solvents",
        items: [
          {
            id: "ch-004",
            name: "Acetone (HPLC)",
            image: acetone,
            description: "HPLC & Spectroscopy grade Acetone by Finar. Suitable for HPLC and UV-Spectroscopy.",
            specs: [
              { key: "Brand", value: "Finar" },
              { key: "Grade", value: "HPLC & Spectroscopy" },
              { key: "Formula", value: "CH₃COCH₃" },
              { key: "M.W.", value: "58.08" },
            ],
          },
        ],
      },
      {
        name: "Culture Media",
        items: [
          {
            id: "ch-005",
            name: "MS Medium Supplement",
            image: msMedium,
            description: "Supplement for MS medium (Murashige & Skoog). For Lab use only. 2.5 gms per litre.",
            specs: [
              { key: "Brand", value: "Himedia" },
              { key: "Ref", value: "PT778-50L" },
              { key: "Use", value: "Plant Tissue Culture" },
              { key: "Storage", value: "10-30°C" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Consumables",
    subcategories: [
      {
        name: "Filter Papers",
        items: [
          {
            id: "con-001",
            name: "Whatman GF/A Filter Paper",
            image: filterPaper,
            description: "Cytiva Whatman Glass Microfiber Filters, Grade GF/A. High retention efficiency for fine particles.",
            specs: [
              { key: "Brand", value: "Whatman (Cytiva)" },
              { key: "Grade", value: "GF/A" },
              { key: "Type", value: "Glass Microfiber" },
              { key: "Size", value: "8 x 10 in" },
              { key: "Qty", value: "100 Sheets" },
              { key: "Cat No", value: "1820-866" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Agricultural Equipments",
    subcategories: [
      {
        name: "Sprayers",
        items: [
          {
            id: "ag-001",
            name: "Manual Knapsack Sprayer",
            image: knapsackSprayer,
            description: "16 LTR manual sprayer for agriculture, gardening, and sanitization. Durable tank and efficient pump system.",
            specs: [
              { key: "Capacity", value: "16 Litre" },
              { key: "Type", value: "Manual Knapsack" },
              { key: "Use", value: "Agriculture, Gardening, Sanitizer" },
            ],
          },
        ],
      },
      {
        name: "Seeding & Planting",
        items: [
          {
            id: "ag-002",
            name: "Reusable Seedling Tray",
            image: seedlingTrays,
            description: "50-hole reusable plastic seedling trays for nurseries. Promotes healthy root growth.",
            specs: [
              { key: "Holes", value: "50" },
              { key: "Type", value: "Reusable Plastic" },
              { key: "Use", value: "Nursery, Seedling" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Solar Items",
    subcategories: [
      {
        name: "Solar Lighting",
        items: [
          {
            id: "sol-001",
            name: "Solar Street Light",
            image: solarStreetLight,
            description: "All-in-one solar street light with integrated panel, battery, and LED. Auto on/off for dusk-to-dawn operation.",
            specs: [
              { key: "Type", value: "All-in-one" },
              { key: "Feature", value: "Auto On/Off" },
              { key: "Body", value: "Weatherproof" },
              { key: "Mounting", value: "Pole Mounted" },
            ],
          },
        ],
      },
      {
        name: "Solar Panels",
        items: [
          {
            id: "sol-002",
            name: "Solar Panel Installation",
            image: solarPanel,
            description: "We supply and provide installation services for high-efficiency rooftop solar panels for residential and commercial use.",
            specs: [
              { key: "Service", value: "Supply & Installation" },
              { key: "Application", value: "Rooftop (Home & Commercial)" },
              { key: "Type", value: "Monocrystalline / Polycrystalline" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Stationery Items",
    subcategories: [
      // This category is still empty, so it will show the "Coming Soon" message.
    ],
  },
];

