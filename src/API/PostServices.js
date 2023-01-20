import axios from "axios";

export class PostServices {
    static async getAll(sort,categ) {
      const res = await axios.get('https://63c4516ef0028bf85fa6b200.mockapi.io/pizzas',{
        params: {
          sortBy: sort,
          order:'desc',
          category: categ>0?categ:''
        }
      })
      return res.data  
    }
}