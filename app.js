const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Titaninc", author: "Roselyda Ayoo", isFav: true },
        { title: "My Lord and I", author: "Marcos Ochieng", isFav: false },
        {
          title: "Messages to young lovers",
          author: "Nancy Van Pelt",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =!this.showBooks;
    },
    toggleColor(book){
      book.isFav =! book.isFav
    }
  },
});

app.mount("#app");
