<template>
    <form @submit.prevent="handleSubmit"> <!-- Previne o comportamento padrão do formulário (recarregar a página) e chama 'handleSubmit'. -->
        <input v-model="book.title" placeholder="Título" required /> <!-- Usa v-model para vincular o input ao atributo 'title' do objeto 'book'. -->
        <input v-model="book.author" placeholder="Autor" required /> <!-- Vincula o campo 'author' ao objeto 'book'. -->
        <input v-model="book.year" placeholder="Ano" required /> <!-- Vincula o campo 'year' ao objeto 'book'. Define como obrigatório. -->
        <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button> <!-- Altera o texto do botão com base na existência de '_id'. Se existe, é atualização; caso contrário, é adição. -->
    </form>
</template>

<script>
import api from '../services/api.js'; // Importa o serviço API para fazer requisições

export default {
  props: ['bookToEdit'], // Recebe o livro a ser editado como uma prop
  data() {
    return {
      book: this.bookToEdit || { title: '', author: '', year: null }, // Inicializa os dados do livro
    };
  },
  watch: {
    bookToEdit: {
      immediate: true, // Garante que o watcher seja executado assim que o componente for montado.
      handler(newVal) { // Monitora mudanças na prop 'bookToEdit' e atualiza o objeto 'book' localmente.
        this.book = newVal || { title: '', author: '', year: null }; // Atualiza os dados quando a prop mudar
      },
    },
  },
  methods: {
    handleSubmit() {
      if (this.book._id) { // Verifica se o livro já existe (edição), baseado na presença do campo '_id'.
        api.updateBook(this.book._id, this.book).then(() => { // Faz uma chamada à API para atualizar o livro existente.
          this.$emit('book-updated'); // Emite um evento quando o livro é atualizado
        });
      } else {
        api.addBook(this.book).then(() => { // Faz uma chamada à API para adicionar um novo livro.
          this.$emit('book-added'); // Emite um evento quando um novo livro é adicionado
        });
      }
    },
  },
};
</script>

