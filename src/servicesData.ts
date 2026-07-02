import { 
  Droplets, 
  Leaf, 
  Sun, 
  Waves, 
  Shovel, 
  Lightbulb,
  Scissors,
  TreePine,
  Trash2,
  Flower2
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  icon: any;
  img: string;
  seoKeywords: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'landscape-contractor',
    slug: 'landscape-contractor',
    title: "Landscape Contractor",
    shortDesc: "Complete landscaping construction and maintenance for residential and commercial properties.",
    longDesc: "As a full-service landscape contractor, we handle everything from site preparation to final installation. We work closely with you to transform your outdoor space into a beautiful, functional area that adds value to your property. Our team manages all aspects of the project, ensuring high-quality results delivered on time and within budget in Broward County.",
    benefits: [
      "End-to-end project management",
      "Enhances property value and appeal",
      "Professional and reliable execution",
      "Seamless integration of hardscaping and softscaping"
    ],
    features: [
      "Site clearing and grading",
      "Planting and softscaping",
      "Hardscape installation",
      "Project coordination"
    ],
    icon: Shovel,
    img: "/img/service_cleanup_1782917326014.png",
    seoKeywords: ["landscape contractor Broward County", "landscape installation", "commercial landscaping", "residential landscaping"]
  },
  {
    id: 'landscape-architect',
    slug: 'landscape-architect',
    title: "Landscape Architect/Designer",
    shortDesc: "Expert landscape design services to plan and visualize your perfect outdoor oasis.",
    longDesc: "Great landscapes start with great designs. Our landscape architecture and design services help you envision the full potential of your property. We combine aesthetics, functionality, and environmental sustainability to create custom plans tailored to your specific needs, lifestyle, and the South Florida climate.",
    benefits: [
      "Customized plans for your unique space",
      "Optimizes outdoor living areas",
      "Selects climate-appropriate plants",
      "Clear visualization before construction"
    ],
    features: [
      "Conceptual design and planning",
      "Plant selection and layout",
      "3D rendering (upon request)",
      "Sustainable design practices"
    ],
    icon: Lightbulb,
    img: "/img/service_mowing_1782917334934.png",
    seoKeywords: ["landscape designer Miramar", "landscape architecture", "custom garden design", "outdoor space planning"]
  },
  {
    id: 'gardener',
    slug: 'gardener',
    title: "Gardener",
    shortDesc: "Meticulous garden care to keep your flower beds and plants thriving year-round.",
    longDesc: "A beautiful garden requires regular attention and expert care. Our gardening services are tailored to the specific needs of your plants. From weeding and mulching to planting seasonal flowers and fertilizing, we provide the dedicated care needed to maintain a vibrant, colorful, and healthy garden throughout the year in South Florida.",
    benefits: [
      "Maintains vibrant, healthy plant life",
      "Keeps garden beds weed-free",
      "Ensures continuous seasonal color",
      "Protects your landscaping investment"
    ],
    features: [
      "Hand weeding and cultivation",
      "Seasonal flower planting",
      "Mulch installation and refreshing",
      "Targeted fertilization and pest monitoring"
    ],
    icon: Flower2,
    img: "/img/service_gardening_1782917372488.png",
    seoKeywords: ["gardener Davie", "garden maintenance", "flower bed care", "weeding services", "landscape gardener Broward"]
  },
  {
    id: 'general-contractor',
    slug: 'general-contractor',
    title: "General Contractor",
    shortDesc: "Comprehensive contracting services for all your major outdoor and property projects.",
    longDesc: "As an experienced general contractor, Lujano Landscaping Corp. can oversee and execute large-scale outdoor projects. We manage the logistics, scheduling, and execution of complex property enhancements, ensuring all work meets our strict quality standards and local building codes.",
    benefits: [
      "Single point of contact for complex projects",
      "Ensures compliance with local regulations",
      "Efficient timeline and budget management",
      "High-quality craftsmanship across all trades"
    ],
    features: [
      "Complete project oversight",
      "Permit acquisition assistance",
      "Subcontractor coordination",
      "Quality assurance and final inspection"
    ],
    icon: Trash2,
    img: "/img/service_sod_installation_1782917357016.png",
    seoKeywords: ["general contractor Broward", "outdoor construction", "property enhancement", "project management"]
  },
  {
    id: 'tree-service',
    slug: 'tree-service',
    title: "Tree Service",
    shortDesc: "Expert tree trimming, pruning, and safe removal services to protect your property.",
    longDesc: "Proper tree care is essential for the health of your trees and the safety of your property. Our experienced team handles everything from routine pruning and shaping to safe, efficient removal of dead or hazardous trees. We have the equipment and expertise to handle tree services of any scale safely.",
    benefits: [
      "Improves tree health and lifespan",
      "Prevents dangerous falling branches",
      "Eliminates hazards to your home",
      "Enhances overall tree aesthetics"
    ],
    features: [
      "Crown thinning and shaping",
      "Deadwood and hazard removal",
      "Safe, controlled dismantling",
      "Debris hauling and cleanup"
    ],
    icon: TreePine,
    img: "/img/service_tree_removal_1782917364743.png",
    seoKeywords: ["tree service Miramar", "tree trimming Broward", "tree removal", "arborist services", "stump grinding"]
  },
  {
    id: 'lawn-service',
    slug: 'lawn-service',
    title: "Lawn Service",
    shortDesc: "Reliable, high-quality lawn mowing and maintenance to keep your grass perfectly manicured.",
    longDesc: "A perfectly maintained lawn is the foundation of a beautiful landscape. Our professional lawn services ensure your grass is healthy, vibrant, and neatly trimmed. We offer regular mowing, edging, and blowing services, as well as comprehensive lawn care plans to address fertilization and weed control.",
    benefits: [
      "Consistent, uniform lawn appearance",
      "Promotes thicker, healthier grass growth",
      "Saves you time and effort",
      "Professional edging for a crisp look"
    ],
    features: [
      "Precision lawn mowing",
      "Hardscape edging and trimming",
      "Fertilization and weed control",
      "Clipping cleanup and removal"
    ],
    icon: Leaf,
    img: "/img/service_tree_trimming_1782917349028.png",
    seoKeywords: ["lawn service Davie", "grass cutting Miramar", "lawn maintenance Broward", "weekly mowing"]
  }
];
