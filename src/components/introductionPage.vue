<template>

  <nav class="containerNavBar">
    <div class="containerTitle">
      <h1 class="textTitlePage">BOOKS</h1>
      <img src="../../images/hand-drawn-bookstore-logo-template 1.svg" alt="" />
    </div>
    <div class="containerOptionsUser">
      <!-- <h3 class="textLogin" v-on:click="LoginScroll()">LOGIN</h3> -->

      <router-link to="/HomePage">
        <h3 class="textLogin">LOGIN</h3>
      </router-link>
      <div class="containerSignup">
        <h3 class="textSignUp" v-on:click="SignUpScroll()">SIGN UP</h3>
      </div>
    </div>
  </nav>

  <div class="containerWelcome">
    <div class="containerWelcomeText" id="containerWelcomeText">

      <h3 class="welcomeText" id="welcomeText">
        <!-- WELCOME TO -->
        <h2 class="booksText" id="booksText">
          <!-- BOOKS -->
        </h2>
      </h3>
    </div>

    <img src="../../images/image-removebg-preview (3) 1.svg" alt="" />
  </div>

  <div class="containerIcons">
    <ul>
      <li class="subContainerIcon">
        <div class="containerImageIcon">
          <img src="../../images/Group 161.svg" alt="" class="imageIcon" />
        </div>
        <h3 class="textIcon">ORGANIZATION</h3>
        <h5>Organize every single book in your library!!</h5>
      </li>
      <li class="subContainerIcon">
        <div class="containerImageIcon">
          <img src="../../images/file (1).svg" alt="" class="imageIcon" />
        </div>
        <h3 class="textIcon">DISCOVER</h3>
        <h5>Discover new books from entire world!!</h5>
      </li>
      <li class="subContainerIcon">
        <div class="containerImageIcon">
          <img src="../../images/file.svg" alt="" class="imageIcon" />
        </div>
        <h3 class="textIcon">ENJOY</h3>
        <h5>
          With Books helping you <br />you can enjoy every single page!!
        </h5>
      </li>
      <li class="subContainerIcon">
        <div class="containerImageIcon">
          <img src="../../images/hand-drawn-bookstore-logo-template 1.svg" id="lastBook" alt="" class="imageIcon" />
        </div>
        <h3 class="textIcon">READ</h3>
        <h5>And, of course, read more and more books!!</h5>
      </li>
    </ul>
  </div>

  <div class="containerLogin">
    <div class="containerLoginTitle">
      <h3>LOG IN</h3>
    </div>
    <div class="subContainerLogin">
      <div class="containerLoginContent">
        <p>
          You're <span>one step</span> away <br />
          from your next great <span>read.<br /></span> Log in now!
        </p>

        <div class="containerInputsLogin">
          <form @submit.prevent="loginUser">
            <input v-model="username" class="inputLogin" id="username" placeholder="Nome" />
            <input type="text" class="inputLogin" id="idEmployee" v-model="idEmployee" placeholder="Employee ID" />
            <input type="password" class="inputLogin" v-model="password" id="password" placeholder="Password" />

            <div class="containerButtonLogin">
              <h3 class="forgotPass">Forgot passowrd</h3>
              <button class="buttonLogin" type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
      <img class="imgContainerLoginContent"
        src="../../images/pilha-desenhada-a-mao-de-ilustracao-de-livros_23-2149350534-removebg-preview 1.svg" alt="" />
    </div>
  </div>

  <div class="containerGraphics-Int">
    <div class="containerTitleGraphics">
      <h3 class="titleGraphics">
        <p>
          HERE, YOU CAN ORGANIZE <br />
          <span>EVERYTHING</span> IN YOUR <span>LIBRARY</span>!!
        </p>
      </h3>
    </div>
    <div class="carousel-container">

      <div class="carousel">
        <div class="carousel-track-down">
          <div class="carousel-item-graphic">
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 6.svg" alt="Icon 6" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 7.svg" alt="Icon 7" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 8.svg" alt="Icon 8" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 9.svg" alt="Icon 9" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 14.png" alt="Icon 9" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 15.png" alt="Icon 9" />
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-container">
      <div class="carousel">
        <div class="carousel-track-down">
          <div class="carousel-item-graphic">
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 9.svg" alt="Icon 13" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 14.png" alt="Icon 14" />
          </div>
          <div class="carousel-item-graphic">
            <img src="../../images/graphics/image 15.png" alt="Icon 15" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="containerSignupUser">
    <div class="containerTitleSignup">
      <h3>SIGN UP</h3>
    </div>
    <div class="contentSignupUser">
      <img class="imgContentSignupUser"
        src="../../images/pilha-desenhada-a-mao-de-ilustracao-de-livros_23-2149350533-removebg-preview 1.svg" alt="" />
      <div class="subContainerSignupUser">
        <div class="subContainerSignupUserTitle">
          <p>
            <span>Sign up </span>now and unlock <br />endless
            <span>stories</span>.
          </p>
        </div>
        <div class="containerInputsLoginSecond">
          <form @submit.prevent="registerUser">
            <div class="containerInputUp">
              <input type="text" class="inputLogin" v-model="name" id="name" placeholder="Name" />
              <input type="text" class="inputLogin" v-model="idEmployee" id="employeeId" placeholder="Employee ID" />
              <input type="password" class="inputLogin" v-model="password" id="password" placeholder="Password" />
              <input type="password" class="inputLogin" id="confirmPassword" placeholder="Confirm Password" />
              <div class="containerInputDown">
                <input type="text" class="inputLogin" v-model="email" id="email" placeholder="Email" />
                <div class="containerInputFile">
                  <input type="file" class="inputLogin" @change="handleFileUpload" id="fileInput"
                    placeholder="Profile Photo" />
                </div>
              </div>
              <div class="containerButtonLogin">
                <button class="buttonLogin" type="submit">Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="containerContentCopies">
    <div class="containerContentCopiesTitle">
      <p><span>WE</span> HAVE <span>SEVERAL COPIES</span> SUCH AS:</p>
    </div>

    <div class="carousel-container">
      <div class="carousel">
        <div class="carousel-track-copies">
          <div v-for="book in books" v-bind:key="book._id" class="carousel-item">
            <img :src="'http://localhost:5000/' + book.image" alt="Icon 3" />
            <h2 class="titleCarouselIcon">{{ book.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="containerFooter">
    <div class="containerFooterUp">
      <div class="containerTitle">
        <h1 class="textTitlePage">BOOKS</h1>
        <img src="../../images/hand-drawn-bookstore-logo-template 1.svg" alt="" />
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

// import authController from '../../code/back_end/controllers/authController'

import axios from 'axios';


export default {
  name: 'IntroductionPage',
  mounted() {
    this.getBooks()

  },
  data() {
    return {
      name: '',
      idEmployee: '',
      password: '',
      email: '',
      image: null,
      books: []
    };
  },
  methods: {
    carousel_fun() {
      document.addEventListener("DOMContentLoaded", function () {
        var i = 0;
        var j = 0;
        var txt = 'WELCOME TO';
        var txt2 = "BOOKS";
        var speed = 50;

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("welcomeText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          } else if (i === txt.length) {
            if (j < txt2.length) {
              document.getElementById("booksText").innerHTML += txt2.charAt(j);
              j++;
              setTimeout(typeWriter, speed);
            }
          }
        }

        typeWriter();

        const track = document.querySelector(".carousel-track");
        let index = 0;

        function moveCarousel() {
          index++;
          if (index >= track.children.length) {
            index = 0;
          }
          track.style.transform = `translateX(-${index * 300}px)`;
        }

        setInterval(moveCarousel, 2000);

        const trackCopis = document.querySelector(".carousel-track-copies");
        let indexCopies = 0;

        function moveCarouselCopies() {
          indexCopies++;
          if (indexCopies >= this.books.length) {
            indexCopies = 0;
          }
          trackCopis.style.transform = `translateX(-${indexCopies * 200}px)`;
        }

        setInterval(moveCarouselCopies, 2000);

        const trackdown = document.querySelector(".carousel-track-down");
        let indexdown = 0;

        function moveCarouselindexdown() {
          indexdown++;
          if (indexdown >= trackdown.children.length) {
            indexdown = 0;
          }
          trackdown.style.transform = `translateX(-${indexdown * 300}px)`;
        }

        setInterval(moveCarouselindexdown, 2000);
      });


    },
    getBooks() {
      axios.get("http://localhost:5000/api/books").then((respo) => {
        const data = respo.data;
        this.books = data.map(item => item);
      }).catch((error) => {
        console.error("Error fetching books:", error);
      });
    },
    handleFileUpload(event) {
      // Armazena o arquivo de imagem selecionado
      this.image = event.target.files[0];
    },
    async registerUser() {
      // Verifica se os campos obrigatórios estão preenchidos
      if (!this.name || !this.password || !this.idEmployee || !this.email || !this.image) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Prepara o FormData para enviar os dados e a imagem
      const formData = new FormData();
      formData.append('username', this.name);
      formData.append('password', this.password);
      formData.append('idEmployee', this.idEmployee);
      formData.append('email', this.email);
      formData.append('image', this.image); // Adiciona o arquivo de imagem

      try {
        // Faz a requisição POST com o FormData
        const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          // const response = await axios.post('https://api-book-bw94.onrender.com/api/auth/register', formData, {
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //   },
        })

        if (response.status >= 200 || response.status <= 299) {
          alert('Registro realizado com sucesso!');
          localStorage.setItem('dataUser', response.data);
          this.$router.push('/HomePage');
        }
      } catch (error) {
        console.log('Erro ao registrar:', error);
      }
    },
    async loginUser() {
      const username = this.username
      const password = this.password
      const idEmployee = this.idEmployee
      if (username !== "" || password !== "" || idEmployee !== "") {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
            username: username,
            password: password,
            idEmployee: idEmployee
          });
          if (response.status >= 200 || response.status <= 299) {
            alert('Usuário logado com sucesso!');
            // Aqui você pode redirecionar para a página de login ou outro lugar
            localStorage.setItem("userData", JSON.stringify(username))          
            this.$router.push('/HomePage');
        }

        } catch (error) {
          console.error(error);
          alert('Erro ao registrar usuário');
        }
      } else {
        alert("Por favor, preencha todos os campos.")
      }
    },
    LoginScroll() {
      window.scrollBy({
        top: 1100,
        left: 0,
        behavior: "smooth",
      });
    },
    SignUpScroll() {
      window.scrollBy({
        top: 2700,
        left: 0,
        behavior: "smooth",
      });
    },

    // }
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding: 0px;
  margin: 0px;
}

:root {
  --bg-main_color: #5ab2a6;
  --color-yellow: #ffa300;
  --color-white: #faf9f9;
  --color-white_second: #f6ebcd;
  --color-red: #f75c46;
}

body {
  margin-left: 8pc;
  margin-right: 8pc;
  background-color: var(--bg-main_color);
}

.containerContentCopies {
  margin-top: 10pc;
}

.containerNavBar {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
}

.textTitlePage {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-yellow);
  font-size: 40px;
}

.containerTitle,
.containerOptionsUser {
  display: flex;
  align-items: center;
}

.textLogin,
.textSignUp {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white);
}

.textLogin:hover,
.textSignUp:hover {
  cursor: pointer;
}

.containerSignup {
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid var(--color-yellow);
  margin-left: 20px;
}

.containerWelcome {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.containerWelcome>img {
  width: 500px;
}

.welcomeText {
  font-size: 76px;
  color: var(--color-white_second);
  font-family: Arial, Helvetica, sans-serif;
}

.booksText {
  font-size: 76px;
  color: var(--color-yellow);
  font-family: Arial, Helvetica, sans-serif;
}

.containerIcons>ul {
  margin-top: 10pc;
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.containerImageIcon {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-white);
}

.textIcon {
  margin-top: 20px;
  font-size: 28px;
  color: var(--color-white_second);
  font-family: Arial, Helvetica, sans-serif;
}

.imageIcon {
  width: 90px;
}

#lastBook {
  width: 56px;
}

.subContainerIcon {
  width: 300px;
  height: 300px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--color-yellow);
  -webkit-box-shadow: 10px 3px 29px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 3px 29px -20px rgba(0, 0, 0, 1);
  box-shadow: 10px 3px 29px -20px rgba(0, 0, 0, 1);
}

.subContainerIcon>h5 {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white_second);
}

.containerLoginTitle {
  margin-top: 7pc;
}

.containerLoginTitle>h3,
.containerTitleSignup>h3 {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-yellow);
}

p {
  font-weight: 600;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white_second);
}

span {
  font-weight: 600;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-yellow);
}

.subContainerLogin {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.containerInputsLogin {
  margin-top: 2pc;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.containerInputsLoginSecond {
  margin-top: 2pc;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

input::placeholder {
  color: var(--color-white_second);
}

.inputLogin {
  width: 290px;
  height: 45px;
  font-size: 15px;
  padding-left: 10px;
  margin-bottom: 9px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid var(--color-white_second);
}

.inputLogin:focus {
  outline: none;
}

#fileInput {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.forgotPass {
  font-size: 16px;
  color: var(--color-yellow);
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
}

.forgotPass:hover,
.buttonLogin:hover {
  cursor: pointer;
}

.buttonLogin {
  width: 280px;
  height: 45px;
  border: none;
  font-size: 17px;
  margin-top: 20px;
  font-weight: 600;
  border-radius: 5px;
  color: var(--color-white_second);
  background-color: var(--color-red);
}

.containerButtonLogin {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.containerGraphics-Int {
  margin-top: 10pc;
  display: flex;
  flex-direction: column
}

.containerTitleSignup>h3 {
  margin-top: 4pc;
}

.containerInputUp,
.containerInputDown {
  display: flex;
  flex-direction: column;
  margin-right: 2pc;
}

.containerInpuFile {
  display: flex;
  align-items: center;
}

.contentSignupUser {
  display: flex;
}

.imgContentSignupUser {
  width: 519px;
}

.imgContainerLoginContent {
  width: 519px;
}

.subContainerSignupUser {
  margin-left: 4pc;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-track {
  width: 100%
}

.carousel-track,
.carousel-track-copies,
.carousel-track-down {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 20px;
  margin-right: 30px;
  background-color: var(--color-red);
}

.carousel-item-graphic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 20px;
  margin-right: 30px;
}

.carousel-item-graphic>img {
  width: 372px;
}

.carousel-item>img {
  margin: 20px;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.titleCarouselIcon {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--color-white_second);
  font-family: Arial, Helvetica, sans-serif;
}

.containerFooter {
  margin-top: 4pc;
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
  width: 40px;
  margin-left: 5px;
  margin-right: 12px;
}

.containerFooterUp>p>span {
  text-decoration: underline;
}

.containerFooterDown {
  display: flex;
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

a {
  text-decoration: none;
}
</style>
