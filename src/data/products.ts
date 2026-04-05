import mclarenImg from "@/assets/mclaren-f1.jpg";
import ferrariImg from "@/assets/ferrari-512m.jpg";
import kawasakiImg from "@/assets/kawasaki-h2r.jpg";
import stuntBikeImg from "@/assets/stunt-bike.jpg";
import landRoverImg from "@/assets/land-rover.jpg";
import lamborghiniImg from "@/assets/lamborghini-sian.jpg";
import fiatImg from "@/assets/fiat-500.jpg";
import porscheImg from "@/assets/porsche-911.jpg";
import bugattiImg from "@/assets/bugatti-chiron.jpg";
import astonMartinImg from "@/assets/aston-martin.jpg";
import bmwImg from "@/assets/bmw-m1000rr.jpg";
import vwCamperImg from "@/assets/vw-camper.jpg";
import toyotaSupraImg from "@/assets/toyota-supra.jpg";
import ducatiImg from "@/assets/ducati-panigale.jpg";
import fordMustangImg from "@/assets/ford-mustang.jpg";

export type ProductCategory = "speed-champions" | "technic-motorcycles" | "advanced-technic" | "creator-classics";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  pieces: number;
  price: number;
  image: string;
  description: string;
  poeticLine: string;
}

export const categories: { id: ProductCategory; label: string }[] = [
  { id: "speed-champions", label: "Speed Champions" },
  { id: "technic-motorcycles", label: "Technic Motorcycles" },
  { id: "advanced-technic", label: "Advanced Technic" },
  { id: "creator-classics", label: "Creator Classics" },
];

export const products: Product[] = [
  // Speed Champions
  {
    id: "mclaren-f1",
    name: "McLaren Formula 1 Race Car",
    category: "speed-champions",
    pieces: 245,
    price: 4299,
    image: mclarenImg,
    description: "Every aerodynamic curve captured in vibrant papaya orange and electric blue.",
    poeticLine: "The rush of the track, captured in papaya orange and electric blue, every aerodynamic curve waiting for your hands.",
  },
  {
    id: "ferrari-512m",
    name: "1970 Ferrari 512 M",
    category: "speed-champions",
    pieces: 291,
    price: 3499,
    image: ferrariImg,
    description: "A love letter to vintage racing glory.",
    poeticLine: "Decades of racing heritage distilled into 291 pieces of crimson perfection. A morning build that echoes with the roar of Le Mans.",
  },
  {
    id: "aston-martin-valkyrie",
    name: "Aston Martin Valkyrie AMR Pro",
    category: "speed-champions",
    pieces: 210,
    price: 3799,
    image: astonMartinImg,
    description: "Black and lime hypercar captured in Speed Champions scale with striking aerodynamic details.",
    poeticLine: "Born from the mind of Adrian Newey, this midnight phantom slices through air and imagination alike. 210 pieces of British engineering audacity.",
  },
  {
    id: "toyota-supra",
    name: "Toyota GR Supra",
    category: "speed-champions",
    pieces: 299,
    price: 3599,
    image: toyotaSupraImg,
    description: "The legendary Supra returns in white and red Speed Champions form.",
    poeticLine: "A legend reborn. White pearl bodywork streaked with racing red — the Supra spirit lives in every precisely placed brick.",
  },

  // Technic Motorcycles
  {
    id: "kawasaki-h2r",
    name: "Kawasaki Ninja H2R",
    category: "technic-motorcycles",
    pieces: 643,
    price: 7999,
    image: kawasakiImg,
    description: "Supercharged silhouette in mirror-coated black and signature green, with working steering and suspension.",
    poeticLine: "Two wheels, infinite courage. The morning mist clears as you build this hyperbike legend, supercharged green gleaming under your work lamp.",
  },
  {
    id: "stunt-bike",
    name: "Technic Stunt Bike",
    category: "technic-motorcycles",
    pieces: 140,
    price: 1599,
    image: stuntBikeImg,
    description: "Pull-back motor thrills. Daring doesn't demand deep pockets.",
    poeticLine: "Small in stature, boundless in spirit. Pull back, release, and watch courage take mechanical form.",
  },
  {
    id: "bmw-m1000rr",
    name: "BMW M 1000 RR",
    category: "technic-motorcycles",
    pieces: 1920,
    price: 22999,
    image: bmwImg,
    description: "The ultimate superbike in blue, white, and red with functional steering, suspension, and 3-cylinder engine.",
    poeticLine: "Bavarian precision meets brick perfection. 1,920 pieces of motorsport DNA — every gear, every linkage, every curve built to thrill.",
  },
  {
    id: "ducati-panigale",
    name: "Ducati Panigale V4 R",
    category: "technic-motorcycles",
    pieces: 646,
    price: 8499,
    image: ducatiImg,
    description: "Italian racing passion in red with working gearbox, steering, suspension, and V4 engine replica.",
    poeticLine: "Bologna's finest, rendered in rosso corsa. The V4 heart beats through mechanical linkages — each brick a love letter to Italian speed.",
  },

  // Advanced Technic
  {
    id: "land-rover-defender",
    name: "Land Rover Defender",
    category: "advanced-technic",
    pieces: 2573,
    price: 24999,
    image: landRoverImg,
    description: "Three differentials, working winch, sequential gearbox — all functioning.",
    poeticLine: "A monument to off-road authenticity. 2,573 pieces of engineering poetry that will consume your weekends and reward your patience.",
  },
  {
    id: "lamborghini-sian",
    name: "Lamborghini Sián FKP 37",
    category: "advanced-technic",
    pieces: 3696,
    price: 42999,
    image: lamborghiniImg,
    description: "V12 with moving pistons, scissor doors, 8-speed transmission. The pinnacle.",
    poeticLine: "Not a toy. A testament. 3,696 pieces of screaming green fury hiding a V12 heart that beats with moving pistons.",
  },
  {
    id: "porsche-911-gt3rs",
    name: "Porsche 911 GT3 RS",
    category: "advanced-technic",
    pieces: 2704,
    price: 38999,
    image: porscheImg,
    description: "Iconic orange Porsche with working PDK gearbox, independent suspension, and flat-six engine.",
    poeticLine: "Stuttgart's masterpiece in signal orange. 2,704 pieces of track-bred obsession — the flat-six breathes through moving pistons as you shift the PDK.",
  },
  {
    id: "bugatti-chiron",
    name: "Bugatti Chiron",
    category: "advanced-technic",
    pieces: 3599,
    price: 47999,
    image: bugattiImg,
    description: "W16 engine with moving pistons, speed key function, active rear wing, and full interior.",
    poeticLine: "The pursuit of absolute perfection. 3,599 pieces that recreate a 1,500-horsepower dream in blue and black — the W16 awaits your patience.",
  },

  // Creator Classics
  {
    id: "fiat-500",
    name: "Fiat 500",
    category: "creator-classics",
    pieces: 960,
    price: 14999,
    image: fiatImg,
    description: "Sky blue bodywork, detailed interior, folding sunroof, miniature rooftop suitcase.",
    poeticLine: "La dolce vita in brick form. Sky blue dreams, a folding sunroof, and a tiny suitcase that whispers of coastal roads yet traveled.",
  },
  {
    id: "vw-t1-camper",
    name: "Volkswagen T1 Camper Van",
    category: "creator-classics",
    pieces: 1334,
    price: 18999,
    image: vwCamperImg,
    description: "Iconic red and white split-screen van with detailed interior, pop-up roof, and retro charm.",
    poeticLine: "Freedom has a shape. Red and white, split-screen soul — 1,334 pieces of wanderlust that unfold into a tiny home on wheels.",
  },
  {
    id: "ford-mustang",
    name: "Ford Mustang GT",
    category: "creator-classics",
    pieces: 1471,
    price: 19999,
    image: fordMustangImg,
    description: "Dark green 1960s muscle car with customizable supercharger, rear spoiler, and detailed V8 engine.",
    poeticLine: "American thunder in dark highland green. 1,471 pieces of muscle — pop the hood, admire the V8, and hear the rumble of a bygone era.",
  },
];
