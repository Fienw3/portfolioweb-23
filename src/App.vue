<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <header>
    
    <div class="nav-wrapper">
      

    <nav>

        <div class="nav-sitelinks lg:w-2/5 md:w-2/5">
        <RouterLink class="home-navlink" to="/">Home</RouterLink>
        <RouterLink class="about-navlink" to="/about">About Me</RouterLink>
        <RouterLink class="portfolio-navlink" to="/portfolio">Portfolio</RouterLink>
        </div>      

        <div class="logo-name lg:w-1/5 md:w-1/5 sm:text-xs md:text-xs sm:invisible">
          <h3>Anne-Sofie Walz</h3>
        </div>
       
        <div class="contact-box lg:w-2/5 ">
          <a class="linkedinicon sm:invisible" href="https://www.linkedin.com/in/anne-sofienwalz"><img src="../src/assets/Linkedin.png" alt="LinkedIn icon that takes you to my profile"></a>
        
          <div id="contact" class="contact">
          <button class="contact-btn  sm:text-xs md:text-xs">Contact me</button>

        </div>
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
  max-height: 110vh;
  position: sticky;
  width: 100%;
  
}

header .nav-wrapper {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    background-color: #F2f2f2;
    box-shadow: 0px 0px 3px 0px;
    padding: 1rem 30px 1rem 30px;
  }

nav  {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  
}

.nav-sitelinks {
  display: flex;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  color: var(--pink-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  align-self: center;
  color: black;
  display: flex;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

nav a:first-of-type{
  padding-left: 0%;
}

.logo-name {
  align-self: center;
}

nav a img {
  max-height: 2rem;
  align-self: center;
}

nav a img:hover {
  transform: scale(1.1);
}

.contact-box {
  display: flex;
  justify-content: right;
  align-items: center;
}

.contact-btn {
  font-size: 1rem;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  color: black;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.0625px 0.19rem;
}


</style>

<script>

</script>