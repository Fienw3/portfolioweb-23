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
        
        <button><RouterLink class="contact-btn" to="/contact">Contact me</RouterLink></button>

      </nav>
    </div>
  </header>

  <RouterView />
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

