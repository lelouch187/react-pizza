import axios from 'axios';
import { IPizza } from '../@types/types';




export class PostServices {
  static async getAll(sort: string, categ: number, currentPage: number) {
    const { data } = await axios.get<IPizza[]>(
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
