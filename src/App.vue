<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>



<template>

  <header>
    
    <div class="nav-wrapper">
      

    <nav>

        <div class="nav-sitelinks columns-5">
        <RouterLink class="home-navlink" to="/">Home</RouterLink>
        <RouterLink class="about-navlink" to="/about">About Me</RouterLink>
        <RouterLink class="portfolio-navlink" to="/portfolio">Portfolio</RouterLink>
        </div>      

        <div class="logo-name columns-5">
          <h3>Anne-Sofie Walz</h3>
        </div>
       
        <div class="contact-box columns-1">
          <a class="linkedinicon columns-1" href="https://www.linkedin.com/in/anne-sofienwalz"><img src="../src/assets/Linkedin.png" alt="LinkedIn icon that takes you to my profile"></a>
        <button class="contact-btn">Contact me</button>
        </div>
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
  width: 100%;
  
}


nav  {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.nav-sitelinks {
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--pink-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  color: black;
  display: flex;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

nav a:first-of-type{
  padding-left: 0%;
}

nav a img {
  height: 30px;
}

nav a img:hover {
  transform: scale(1.1);
}

.contact-box {
  display: flex;
}

.contact-btn {
  width: 105px;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  color: black;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
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
    flex-wrap: wrap;
    position: sticky;
    background-color: #F2f2f2;
    box-shadow: 0px 0px 3px 0px;
    padding: 0px 43px 0px 43px;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>

<script>

</script>