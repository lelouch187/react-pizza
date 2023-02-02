import axios from 'axios';
import { Pizza } from '../redux/slice/pizzaSlice';



export class PostServices {
  static async getAll(sort: string, categ: number, currentPage: number) {
    const { data } = await axios.get<Pizza[]>(
      'https://63c4516ef0028bf85fa6b200.mockapi.io/pizzas',
      {
        params: {
          sortBy: sort,
          order: 'desc',
          category: categ > 0 ? categ : '',
          l: 4,
          p: currentPage,
        },
      },
    );
    return data;
  }
}
