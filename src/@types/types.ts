export interface ICartPizza {
  id: string;
  title: string;
  count: number;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
}
export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
