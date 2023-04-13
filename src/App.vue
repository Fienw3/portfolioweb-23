<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>



<template>

  <header>
    
    <div class="nav-wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Me</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <a href="www.linkedin.com/in/anne-sofienwalz"><img src="../src/assets/Linkedin.png" alt="" class="linkedinicon"></a>
        
        <button class="contact-btn">Contact me</button>

      </nav>
    </div>
  </header>

  <RouterView />


  <!--Modal opened-->
  <div class="modal-ovelay">
  <div class="contact-modal">
    <button href="../src/assets/close_icon.png" class="close-btn"></button>
    <h3 class="modal-text">
      Contact me:
      LinkedIn: www.linkedin.com/in/anne-sofienwalz
      Email: annwal01@easv365.dk
      or fiewalz@gmail.com
    </h3>
  </div>
</div>

</template>

<style scoped>

/* BD Supper adobe-font import */
@import url("https://use.typekit.net/vyo8bsa.css");

header {
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav  {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  padding: 0 2rem;
  color: black;
}

nav a:first-of-type {
  margin-left: 10px;
}

.linkedinicon {
  max-height: 30px;
}

.contact-btn {
  display: flex;
  justify-content: right;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  color: black;
}

/* Modal css */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -10;
}
/* OPEN/CLOSE MODAL */
.open-modal {
  visibility: visible;
  z-index: 10;
}

.contact-modal {
  background: var(--clr-white);
  border-radius: var(--radius);
  width: 90vw;
  height: 30vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
  transition: var(--transition);
}
.close-btn:hover {
  color: var(--clr-red-light);
  transform: scale(1.3);
}


@media (min-width: 1024px) {

  header .nav-wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    position: sticky;
    background-color: #F2f2f2;
    box-shadow: 0px 0px 2px 0px;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>

<script>
const modalBtn = document.querySelector('.contact-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
   modalOverlay.classList.add("open-modal")
})

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove("open-modal")
 })
</script>