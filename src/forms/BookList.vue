<template>
    <div class="book-list-container"> <!-- Container principal da lista de livros, aplicando estilo e estrutura. -->
        <!--Lista de Livros-->
        <ul class="book-list"> <!-- Define a lista não-ordenada para os livros. -->
            <li v-for="book in books" :key="book._id" class="book_item"> <!-- Loop para exibir cada livro. 'v-for' percorre a lista de livros e 'key' é usado para otimização de renderização. -->
                <span>{{ book.title }} - {{ book.author }} ({{ book.year }})</span> <!-- Exibe o título, autor e ano do livro. -->
                <button @click="editBook(book)" class="edit-button">Editar</button> <!-- Botão para editar o livro, chamando o método 'editBook' com o livro selecionado. -->
                <button @click="deleteBook(book._id)" class="delete-button">Excluir</button> <!-- Botão para excluir o livro, chamando o método 'deleteBook' com o ID do livro. -->
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../services/api'; // Importa o serviço API (Axios)

export default {
    data() {
        return { books: [] }; // Estado local da lista de livros
    },
    methods: {
        fetchBooks() { // Busca os livros do back-end
            api.getBooks().then(response => { // Chama o método 'getBooks' da API e espera pela resposta.
                this.books = response.data; // Atualiza a lista de livros
            });
        },
        deleteBook(id) { // Exclui um livro pelo ID 
            api.deleteBook(id).then(() => { // Chama o método 'deleteBook' da API e espera a operação ser concluída.
                this.fetchBooks(); // Atualiza a lista após a exclusão
            });
        },
        editBook(book) { // Emite um evento para editar um livro
            this.$emit('edit-book', book); // Emite o evento 'edit-book'
        },
    },
    mounted() { // Hook 'mounted' que é chamado assim que o componente é montado no DOM.
        this.fetchBooks(); //Busca os livros ao montar o componente
    }
}
</script>

<style scoped>
/* Container principal do componente */
.book-list-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo da lista de livros */
.book-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

/* Cada item da lista */
.book-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* Botão de editar */
.edit-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

/* Botão de excluir */
.delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

/* Efeito hover nos botões */
.edit-button:hover, .delete-button:hover {
    opacity: 0.8;
}
</style>