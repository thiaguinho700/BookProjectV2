<template>
  <nav class="containerNavBar">
    <div class="containerTitle">
      <h1 class="textTitlePage">BOOKS</h1>
      <img src="../../images/hand-drawn-bookstore-logo-template 1.svg" alt="" />
    </div>
    <div class="containerOptionsUser">
      <div class="iconUser"></div>
    </div>
  </nav>
  <div class="containerUp">
    <button id="prev" @click="handleNavigation('/HomePage')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="iconArrow">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
      </svg>
    </button>
  </div>

  <div class="containerBookWidth">

    <div class="containerDataUser">
      <img :src="'http://localhost:5000/' + dataUser.image" alt="">
      <h3>Nome: {{ this.dataUser.username }}</h3>
      <h3>ID User: {{ this.dataUser.idEmployee }}</h3>
      <h3>Email: {{ this.dataUser.email }}</h3>
    </div>


  </div>
  <div class="containerDataUserList">
    <div class="containerUser" v-for="user in dataListUser" v-bind:key="user._id">
      <h3>{{ user.username }}</h3>
      <div v-if="user.isOn">
        <h3>Ativado</h3>
      </div>
      <div v-else>
        <h3>Desativo</h3>
      </div>
      <button @click="desativarBook(user._id)">Desativar</button>
      <button @click="ativarBook(user._id)">Ativar</button>

    </div>
  </div>
  <footer class="containerFooter">
    <div class="containerFooterUp">
      <div class="containerTitle">
        <h1 class="textTitlePage">BOOKS</h1>

      </div>
      <p>
        Developed with
        <span class="iconHeart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="iconHeart">
            <path fill="#eea016"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </span>
        by
        <span class="nameAuthor"><a target="_blank" href="https://thiagoalvesportfolio.vercel.app/">Thiago
            Alves</a></span>
      </p>
    </div>
    <div class="containerFooterDown">
      <h3>@ Thiago Alves 2024</h3>
      <div class="containerIconsFooter">
        <a href="https://www.linkedin.com/in/thiago-alves17/" target="_blank" rel="noopener noreferrer"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="iconFooter">
            <path fill="#ffffff"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
        <a href="https://github.com/thiagoHenrique847" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="iconFooter">
            <path fill="#ffffff"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        <a href="https://thiagoalvesportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="iconFooter">
            <path fill="#ffffff"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/thiago.freelas/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="iconFooter">
            <path fill="#ffffff"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>

</template>

<script>

import axios from 'axios';

export default {
  name: 'viewListUser',
  data() {
    return {
      bookData: [],
      dataUser: "",
      dataListUser: []
    }
  },
  mounted() {
    this.dataUser = JSON.parse(localStorage.getItem("dataUser"))
    this.getDataUserList()

  },
  methods: {

    async getDataUser() {
      try {
        const respo = await axios.get("http://localhost:5000/api/books");
        this.books = respo.data.map((item) => item);
      } catch (error) {
        console.error("Error fetching books:", error); // Debug error
      }
    },
    async getDataUserList() {
      try {
        const respo = await axios.get("http://localhost:5000/api/auth");
        this.dataListUser = respo.data.map((item) => item);
      } catch (error) {
        console.error("Error fetching books:", error); // Debug error
      }
    },
    async desativarBook(idUser){
      await axios.patch(`http://localhost:5000/api/auth/${idUser}`, {
        isOn:false
      }).then(() =>{
        alert("Desativado com sucesso!")
      })
    },
    async ativarBook(idUser){
      await axios.patch(`http://localhost:5000/api/auth/${idUser}`, {
        isOn:true
      }).then(() =>{
        alert("Desativado com sucesso!")
      })
    },
  },
  props: {
    book: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0px;
  padding: 0px;
}

:root {
  --color-white_second: #f6ebcd;
  --bg-main_color: #5ab2a6;
  --color-yellow: #ffa300;
  --color-white: #faf9f9;
  --color-green: #57e723;
  --color-blue: #044ddf;
  --color-red: #f75c46;
}

body {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--bg-main_color);
  /* background-image: url(../../images/bgImage/Desktop\ -\ 11.png); */
}

body {
  height: 100vh;
}

.containerNavBar {
  padding: 10px;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding-left: 2pc;
  padding-right: 2pc;
  background-color: var(--bg-main_color);
}

.containerBookWidth {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.containerUser {
  margin: 1pc
}

.containerDataUser {
  width: 500px;
  height: 700px;
  background-color: white;
}

.containerDataUserList {
  width: 500px;
  height: 70pc;
  background-color: white;
}

.imageLogoSite {
  width: 200px;
  margin-left: 50px;
}

.iconLeft {
  width: 32px;
  margin-left: 40px;
  margin-top: 30px;
}

.iconLeft:hover {
  cursor: pointer;
}

.iconStar {
  width: 20px;
}

.containerDataBook {
  width: 100%;
  display: flex;
  margin-top: 26px;
  flex-direction: row;
  justify-content: space-evenly;
}

.containerDataBookSub {
  width: 100%;
  display: flex;
  margin-top: 20px;
}

.containerDataBook>img {
  width: 345px;
}

.containerDataBookText {
  width: 500px;
  margin-left: 20px;
}

.subContainerDataBook {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
}

.titleDataBook,
.aboutBookText,
.sectionAbout,
.sectionTitle {
  font-family: Arial, Helvetica, sans-serif;
}

.aboutBookText {
  width: 500px;
}

.sectionTitle {
  margin-right: 10px;
}

.titleDataBook {
  margin-bottom: 30px;
}

.containerCharacBook {
  list-style: none;
}

.sectionAbout {
  font-weight: 500;
}

#firstUpContainerCharacBook {
  margin-bottom: 10px;
}

.subContainerBook {
  display: flex;
  flex-direction: row;
}

.containerSection {
  width: 200px;
  display: flex;
  margin: 10px 10px 10px 0px;
}

.containerBottons {
  margin-top: 5pc;
  display: flex;
}

.borrowButton,
.refundButton {
  width: 220px;
  height: 40px;
  margin: 20px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: white;
}

.borrowButton:hover,
.refundButton:hover {
  cursor: pointer;
}

.borrowButton {
  background-color: var(--color-yellow);
}

.refundButton {
  background-color: #b0b0b0;
}

.titleContainerReview,
.titleContainerBorrowed {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 20px 20px 0px;
}

.containerReviews {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.containerReviewText {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.titleContainerReviewText {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 50px 50px 50px 30px;
}

.subContainerReviews>ul {
  margin: 30px 0px 0px 50px;
}

.subContainerReviews>ul>li {
  display: flex;
}

.contentReview {
  width: 450px;
  font-size: 21px;
  margin-left: 12px;
}

.nameUserReview {
  font-size: 20px;
  margin-right: 20px;
  font-family: Arial;
}

.subTitleContainer {
  display: flex;
  align-items: center;
}

.dateUserReview {
  font-family: Arial, Helvetica, sans-serif;
}

.subContainerBorroHis {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.subContainerBorroHis>ul {
  list-style: none;
}

.subContainerBorroHis>ul>li {
  display: flex;
}

.titleContainerBorrowed {
  width: 100%;
  display: flex;
}

.containerBorrowed {
  width: 300px;
  height: 200px;
}

.subContainerBorrowed {
  display: flex;
  align-items: center;
  margin: 20px 0px 0px 20px;
}

.subContainerBorrowed>h2 {
  font-size: 22px;
  font-family: Arial;
  font-weight: 400;
  margin-right: 10px;
}

.subTitleContainerBorrowed>h3 {
  font-size: 22px;
  font-family: sans-serif;
  font-weight: 600;
}

.textTitlePage {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-yellow);
  font-size: 30px;
}

.containerTitle,
.containerOptionsUser {
  display: flex;
  align-items: center;
}

.containerTitle>img {
  width: 50px;
}

.containerOptionsUser>.iconUser {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0.5px solid black;
  background-color: var(--color-white);
}

.containerBookWidth {
  display: flex;
  align-items: center;
  justify-content: center;
}

.containerMainBook {
  width: 80%;
  border-radius: 20px;
  background-color: var(--color-white_second);
}

.containerFooter {
  height: 230px;
  margin-top: 4pc;
  background: rgb(90, 178, 166);
  background: linear-gradient(180deg,
      rgba(90, 178, 166, 1) 35%,
      rgba(38, 76, 71, 1) 100%);
}

.containerFooterUp {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.containerFooterUp>p {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.iconHeart {
  width: 30px;
  margin-left: 5px;
  margin-right: 12px;
}

.containerFooterUp>p>span {
  text-decoration: underline;
}

.containerFooterDown {
  display: flex;
  margin-top: 36px;
  padding-left: 4pc;
  padding-right: 4pc;
  align-items: center;
  justify-content: space-between;
}

.containerFooterDown>h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white_second);
}

.iconFooter {
  width: 30px;
  margin: 10px;
}

.iconFooter:hover {
  cursor: pointer;
}

.nameAuthor>a {
  margin-left: 12px;
  color: var(--color-yellow);
}

.nameAuthor:hover {
  cursor: pointer;
}

.containerIconsFooter {
  display: flex;
  align-items: center;
}

p {
  font-weight: 600;
  font-size: 21px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white_second);
}

#prev {
  outline: 0;
  border: none;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  background: white;
  align-content: center;
  justify-content: center;
  background-color: var(--color-red);
}

.iconArrow {
  width: 40px;
}

.titleContainerBorrowed {
  margin-bottom: 15px;
}
</style>
