export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  discount?: number;
  active?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  image: string;
}

export interface DailySpecial {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  discount?: number;
}