// src/components/KnowledgeHub/KnowledgeData.js

import {
  Cpu,
  HardDrive,
  Battery,
  Monitor,
  Camera,
  Wifi,
  RefreshCw,
} from "lucide-react";

export const knowledgeItems = [
  {
    id: 1,
    icon: Cpu,
    title: "Processor (CPU) - The Brain",
    description: `
      The processor is the brain of your phone. It executes instructions, handles apps, and decides 
      how fast your phone performs tasks. Modern processors (like Apple A-series, Qualcomm Snapdragon) 
      are multi-core and can handle heavy gaming, multitasking, and AI tasks efficiently.
      
      Gimmicks: Some brands advertise "octa-core" without optimizing for performance. 
      Always check real-world benchmarks and battery efficiency.
    `,
  },
  {
    id: 2,
    icon: HardDrive,
    title: "RAM - Memory Power",
    description: `
      RAM allows your phone to handle multiple apps simultaneously. More RAM = smoother multitasking. 
      6GB-12GB is ideal for most users today. Brands like Samsung, Xiaomi, and Apple optimize memory differently.
      
      Tip: Extra RAM doesn’t always mean better speed; software optimization matters.
    `,
  },
  {
    id: 3,
    icon: Battery,
    title: "Battery - All-Day Life",
    description: `
      Battery capacity determines how long your phone lasts. Measured in mAh. 4000-5000mAh is common 
      for all-day usage. Fast charging is popular (30W-120W). Li-ion batteries degrade over time.
      
      Brands: Oppo, Xiaomi, OnePlus excel in fast charging; Apple and Samsung focus on battery optimization.
    `,
  },
  {
    id: 4,
    icon: Monitor,
    title: "Display - Visual Experience",
    description: `
      Display determines clarity, brightness, and color. AMOLED gives deep blacks and vibrant colors, 
      while LCD is cheaper but less vibrant. Higher refresh rates (90Hz-120Hz) make animations smoother.
      
      Tip: Always see brightness (nits) and HDR support for outdoor usage.
    `,
  },
  {
    id: 5,
    icon: Camera,
    title: "Camera - Capturing Memories",
    description: `
      Megapixels are not everything; sensor quality, aperture, stabilization, and software processing 
      matter more. Dual/triple cameras handle wide, ultra-wide, and zoom shots. Brands like Google, 
      Apple, and Samsung lead in camera software optimization.
      
      Gimmicks: Some phones advertise 108MP, but quality depends on sensor size and software.
    `,
  },
  {
    id: 6,
    icon: Wifi,
    title: "Connectivity - Stay Connected",
    description: `
      Modern phones support 4G, 5G, Wi-Fi 6, Bluetooth 5.0+. Connectivity affects speed and range. 
      Dual SIM, eSIM, and NFC are useful for global travelers.
      
      Tip: Check if your region supports 5G bands advertised by the phone.
    `,
  },
  {
    id: 7,
    icon: RefreshCw,
    title: "Software Updates - Long-Term Security",
    description: `
      Regular software updates keep your phone secure and smooth. Android updates vary by brand; Apple 
      supports devices 5+ years. Security patches, bug fixes, and new features come via updates.
      
      Tip: Buying brands with frequent updates ensures device longevity.
    `,
  },
];
