<template>
  <div id="app">
    <!-- Formulário para adicionar ou editar um livro -->
    <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
    <!-- Lista de livros -->
    <BookList @edit-book="setBookToEdit" ref="bookList" />
  </div>
</template>

<script>
import BookList from './forms/BookList.vue'; // Importa o componente que exibe a lista de livros.
import BookForm from './forms/BookForm.vue'; // Importa o componente que exibe o formulário para adicionar ou editar livros.

export default {
  data() {
    return {
      bookToEdit: null, // Inicializa o estado do livro a ser editado
    };
  },
  components: {
    BookList, // Registra o componente BookList para ser usado no template.
    BookForm, // Registra o componente BookForm para ser usado no template.
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
