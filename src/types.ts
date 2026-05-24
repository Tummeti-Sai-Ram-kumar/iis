export interface Product {
  avg_price: number;
  id: string;
  image: string;
  min_price: number;
  max_price: number;
  title: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NewArrival {
  id: number;
  title: string;
  images: string[];
  price: number;
}
