<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <RouterView></RouterView>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bookToEdit: null,
    };
  },

  methods: {

    setBookToEdit(book) {
      this.bookToEdit = book;
    },

    fetchBooks() {
      this.$refs.bookList.fetchBooks();
      this.bookToEdit = null;
    },
  },
};
</script>
