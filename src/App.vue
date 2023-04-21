<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
    
    <div class="nav-wrapper2 2xl:px-32 2xl:py-5 xl:px-32 xl:py-5 lg:px-28 lg:py-5 md:px-24 md:py-4 sm:px-8 sm:py-4">
      

    <nav class="">

        <div class="nav-sitelinks lg:w-2/5 md:w-2/5 sm:w-3-5 sm:text-xs">
        <RouterLink class="home-navlink" to="/">Home</RouterLink>
        <RouterLink class="about-navlink" to="/about">About</RouterLink>
        <RouterLink class="portfolio-navlink" to="/portfolio">Portfolio</RouterLink>
        </div>      

        <div class="blankspace lg:w-1/5 md:w-1/5 sm:text-xs md:text-xs sm:hidden md:hidden align-middle">
          <h1 class="align-middle">Anne-Sofie Walz</h1>
        </div>
       
        <div class="contact-box lg:w-2/5 sm:w-2/5">
          <a class="linkedinicon md:invisible sm:hidden" href="https://www.linkedin.com/in/anne-sofienwalz"><img src="../src/assets/Linkedin.png" alt="LinkedIn icon that takes you to my profile"></a>
        
          <div id="contact" class="contact sm:hidden">
            <form method="get" action="#footer">
          <button class="contact-btn sm:text-xs md:text-xs">Contact me</button>
            </form>
        </div>
      </div>
      </nav>

    </div>

    

  </header>

  <body>
    
    <RouterView />

  <footer>

    <div class="footer-wrapper sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="0000000" fill-opacity="0" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,160C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440"></path>
      </svg>


      <div class="footer-grid-container">
      <div id="footer" class="footer-grid grid-cols-4 md:gap-5">
        <div class="col-1">
          <h3>Contact me</h3>
          <p>+45 30742921 <br>
              annwal01@easv365.dk<br>
              fiewal@yahoo.dk<br>
          </p>
        </div>
        <div class="col-2">
          <h3>Location</h3>
          <p> Esbjerg, <br> 
              Denmark 
          </p>
        </div>
        <div class="col-3">
          <h3>Socials</h3>
          <a class="underline" href="https://www.linkedin.com/in/anne-sofienwalz">LinkedIn</a>
        </div>
        <div class="col-4">
          <h3>Navigate</h3>
          <RouterLink class="home-navlink underline" to="/">Home</RouterLink><br>
          <RouterLink class="about-navlink underline" to="/about">About Me</RouterLink><br>
          <RouterLink class="portfolio-navlink underline" to="/portfolio">Portfolio</RouterLink>
        </div>
      </div>
    </div>

    </div>

  </footer>

  </body>

  

</template>



<style scoped>

/* BD Supper adobe-font import */
@import url("https://use.typekit.net/vyo8bsa.css");

html { scroll-behavior: smooth;}

header {
  line-height: 1.5;
  max-height: 110vh;
  width: 100%;
  border-bottom: 2px solid #000000;
  /* box-shadow: 0px 0px 3px 0px; */
  background-color: #F2f2f2;
}

header .nav-wrapper {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    width: 100%;
  }

nav  {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
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

img {
margin:0%;
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

div h1 {
  font-family: "bd-supper", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #000000;
}

.blankspace {
  display: flex;
  align-items: center;
}


/*Footer*/


path {
  stroke: #000000;
  stroke-width: 2px;
}

.footer-grid-container {
padding: 0px 8rem 3rem 8rem;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
}

.footer-grid h3{
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
}
.footer-grid p{
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
}

</style>

<script>

</script>