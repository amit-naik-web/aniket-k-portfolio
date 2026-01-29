export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    text: "Outstanding work! The attention to detail and creativity exceeded our expectations.",
    rating: 5,
    image: "/Clients/adidias.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    text: "Professional, timely, and incredibly talented. Highly recommend!",
    rating: 5,
    image: "/Clients/budweiser.png"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Lead",
    company: "Design Studio",
    text: "Transformed our vision into reality. The collaboration was seamless.",
    rating: 5,
    image: "/Clients/dgtl.png"
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Product Manager",
    company: "InnovateLabs",
    text: "Exceptional quality and innovative solutions. A true professional!",
    rating: 5,
    image: "/Clients/sunburn.png"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Brand Manager",
    company: "FashionCo",
    text: "Creative genius! Brought fresh perspectives to our brand identity.",
    rating: 5,
    image: "/Clients/superdry.png"
  },
  {
    id: 6,
    name: "James Park",
    role: "Event Director",
    company: "LiveEvents",
    text: "Incredible work ethic and stunning results. Will work with again!",
    rating: 5,
    image: "/Clients/lollapaloza.png"
  }
];
