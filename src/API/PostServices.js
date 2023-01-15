export class PostServices {
    static async getAll() {
      return  fetch('https://63c4516ef0028bf85fa6b200.mockapi.io/pizzas')
        .then((response) => response.json())
        .then((items) => items);
    }
}