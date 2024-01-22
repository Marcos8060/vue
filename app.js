const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books:[
        {title: 'Titaninc', url: 'Roselyda Ayoo'},
        {title: 'My Lord and I', url: 'Marcos Ochieng'},
        {title: 'Messages to young lovers', url: 'Nancy Van Pelt'},
      ]
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
