/** Portfolio items for parallax sections — artist, size, client, and atmospheric images */
export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  size: string;
  medium: string;
  image: string;
  client: string;
  shopId?: string; // Link to shop product if available
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Amahoro",
    artist: "Christine Mukamana",
    size: "50×70cm",
    medium: "Graphite",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop",
    client: "Vogue Africa",
    shopId: "1",
  },
  {
    id: "2",
    title: "Isoko",
    artist: "Josue Habimana",
    size: "60×80cm",
    medium: "Ink",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2574&auto=format&fit=crop",
    client: "MoMA",
    shopId: "2",
  },
  {
    id: "3",
    title: "Ubwoba",
    artist: "Rigobert Nzeyimana",
    size: "70×90cm",
    medium: "Charcoal",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2574&auto=format&fit=crop",
    client: "Tate Modern",
    shopId: "3",
  },
  {
    id: "4",
    title: "Igikara",
    artist: "Rigobert Nzeyimana",
    size: "50×60cm",
    medium: "Mixed Media",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2574&auto=format&fit=crop",
    client: "National Museum of Rwanda",
    shopId: "4",
  },
  {
    id: "5",
    title: "Inyana",
    artist: "Christine Mukamana",
    size: "40×55cm",
    medium: "Charcoal",
    image: "https://res.cloudinary.com/duchitv8b/image/upload/v1746096991/art-platform/xd0kwkiyod3ibn3qtsee.jpg",
    client: "Spotify Studios",
    shopId: "5",
  },
  {
    id: "6",
    title: "Intwari",
    artist: "Rigobert Nzeyimana",
    size: "60×80cm",
    medium: "Charcoal",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2574&auto=format&fit=crop",
    client: "Private Collector",
    shopId: "8",
  },
];
