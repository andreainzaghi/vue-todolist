var app = new Vue(
{
  el: "#todo-list",
  data: {
    newItem: "",
    lista: ['Comprare vino', 'Comprare latte', 'Comprare mirtilli']
  },
  methods: {
    deleteItem: function(itemindex) {
    this.lista.splice(itemIndex, 1);
    },
    addItem: function() {
      if (this.newItem !== "") {
      this.lista.push(this.newItem);
      this.newItem = "";
      }
}
}
});
