import { Tag } from "./Tag";

export interface Item {
  id: string;
  name: string;
  size: string;
  description: string;
  price: number;
  quantity: number;
  pictures: string[]
  tag: Tag
  addedToCart: boolean
}
