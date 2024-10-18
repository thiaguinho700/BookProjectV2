<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <IntroductionPage></IntroductionPage>
  </div>
</template>

<script>

import IntroductionPage from "../src/components/IntroductionPage.vue";

export default {
  data() {
    return {
      bookToEdit: null, // Inicializa o estado do livro a ser editado
    };
  },
  components: {
    IntroductionPage
  },
  methods: {
    // Função para definir o livro que será editado
    setBookToEdit(book) {
      this.bookToEdit = book; // Atualiza o estado 'bookToEdit' com o livro que foi clicado para edição.
    },
    // Função para atualizar a lista de livros após adicionar ou editar
    fetchBooks() {
      this.$refs.bookList.fetchBooks(); // Acessa o método 'fetchBooks()' diretamente no componente 'BookList' usando a referência 'ref'.
      this.bookToEdit = null; // Reseta o estado 'bookToEdit' para 'null', limpando o formulário após a ação de adicionar ou editar.
    },
  },
};
</script>
