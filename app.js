new Vue({
  el: '#app',
  data: {
    menu: [
      { id: 1, name: 'Bruschetta', category: 'starters', price: 12, image: 'img/bruschetta.jpg' },
      { id: 2, name: 'Spring Rolls', category: 'starters', price: 16, image: 'img/Spring.jpg' },
      { id: 3, name: 'Caprese Salad', category: 'starters', price: 12, image: 'img/Caprese.jpg' },
      { id: 4, name: 'Hummus with Pita Bread', category: 'starters', price: 14, image: 'img/Hummus.jpg' },
      { id: 5, name: 'Stuffed Mushrooms', category: 'starters', price: 15, image: 'img/Stuffed.jpg' },
      { id: 6, name: 'Chicken Satay', category: 'starters', price: 14, image: 'img/Satay.jpg' },
      { id: 7, name: 'Shrimp Cocktail', category: 'starters', price: 20, image: 'img/Shrimp.jpg' },
      { id: 8, name: 'Gazpacho', category: 'starters', price: 12, image: 'img/Gazpacho.jpg' },
      { id: 9, name: 'Deviled Eggs', category: 'starters', price: 10, image: 'img/Egg.jpg' },
      { id: 10, name: 'Cheese and Charcuterie Board', category: 'starters', price: 100, image: 'img/Cheese.jpg' },
      { id: 11, name: 'Spaghetti Bolognese', category: 'main-meals', price: 18, image: 'img/Spaghetti.jpg' },
      { id: 12, name: 'Chicken Curry', category: 'main-meals', price: 20, image: 'img/Curry.jpg' },
      { id: 13, name: 'Beef Stir-Fry', category: 'main-meals', price: 30, image: 'img/Beef.jpg' },
      { id: 14, name: 'Grilled Salmon', category: 'main-meals', price: 30, image: 'img/Salmon.jpg' },
      { id: 15, name: 'Shepherds Pie', category: 'main-meals', price: 35, image: 'img/Sheperd.jpg' },
      { id: 16, name: 'Tacos', category: 'main-meals', price: 18, image: 'img/Taco.jpg' },
      { id: 17, name: 'Sushi Rolls', category: 'main-meals', price: 35, image: 'img/Sushi.jpg' },
      { id: 18, name: 'Vegetable Curry', category: 'main-meals', price: 25, image: 'img/Veg.jpg' },
      { id: 19, name: 'Barbecue Ribs', category: 'main-meals', price: 35, image: 'img/Ribs.jpg' },
      { id: 20, name: 'Pad Thai', category: 'main-meals', price: 18, image: 'img/Thai.jpg' },
      { id: 21, name: 'Chocolate Pastry', category: 'desserts', price: 10, image: 'img/Pastry.jpg' },
      { id: 22, name: 'Apple Pie', category: 'desserts', price: 12, image: 'img/Pie.jpg' },
      { id: 23, name: 'Ice Cream Sundae', category: 'desserts', price: 10, image: 'img/Ice.jpg' },
      { id: 24, name: 'Tiramisu', category: 'desserts', price: 18, image: 'img/Tiramisu.jpg' },
      { id: 25, name: 'Cheesecake', category: 'desserts', price: 12, image: 'img/Cheesecake.jpg' },
      { id: 26, name: 'Fruit Tart', category: 'desserts', price: 14, image: 'img/Fruit.jpg' },
      { id: 27, name: 'Creme Brulee', category: 'desserts', price: 12, image: 'img/Creme.jpg' },
      { id: 28, name: 'Chocolate Mousse', category: 'desserts', price: 10, image: 'img/Mousse.jpg' },
      { id: 29, name: 'Panna Cotta', category: 'desserts', price: 14, image: 'img/Panna.jpg' },
      { id: 30, name: 'Lemon Sorbet', category: 'desserts', price: 12, image: 'img/Lemon.jpg' },
    ],
    cart: [],
    search: '',
  },
  computed: {
    filteredMenu() {
      if (!this.search) {
        return this.menu;
      }
  
      // Perform search by name or category
      const searchTerm = this.search.toLowerCase();
      return this.menu.filter(item => {
        const itemName = item.name.toLowerCase();
        const itemCategory = item.category.toLowerCase();
  
        return itemName.includes(searchTerm) || itemCategory.includes(searchTerm);
      });
    },
    total() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },    
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
    resetOrder() {
      this.cart = []; // Clears the order
    },
    placeOrder() {
      // Logic to place the order
      if (this.total <= 100) {
        // Implement the order placement, e.g., send data to the server
        alert('Order placed!');
      } 
    },
  },
});
