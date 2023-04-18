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
    padding: 1rem 6rem 1rem 6rem;
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
  background-color:hsla(339,0%,100%,1);
  background-image:
  radial-gradient(at 24% 54%, hsla(33,95%,67%,1) 0px, transparent 50%),
  radial-gradient(at 2% 46%, hsla(187,89%,74%,1) 0px, transparent 50%),
  radial-gradient(at 84% 95%, hsla(344,82%,76%,1) 0px, transparent 50%),
  radial-gradient(at 84% 21%, hsla(187,88%,74%,1) 0px, transparent 50%),
  radial-gradient(at 37% 9%, hsla(344,82%,76%,1) 0px, transparent 50%),
  radial-gradient(at 15% 85%, hsla(187,88%,74%,1) 0px, transparent 50%);
  color: black;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.0625px 0.19rem;
}


</style>

<script>

</script>