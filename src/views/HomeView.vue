<script setup>

</script>

<template>
<div class="home 2xl:px-32 2xl:pt-12 xl:px-32 xl:pt-12 lg:px-28 lg:pt-8 md:px-24 md:pt-6 sm:px-8 sm:py-5">

  <div class="home-container1 sm:flex-wrap md:flex-wrap gap-5">
  <div class="home-about 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full">
    
    <h2>Hi! My name is  Anne-Sofie, <br>
      and welcome to my creative universe.</h2>
      <p class="about-home">‘Out of the box’ thinking multimedia design student, with a passion for content creation and front-end development.
        <br>
        <br>
      I am passionate about the creative process from idea to the finished product, with a detail oriented and striving personality I strive for a good final product. I am always curious about the world around me. <br>

      In the future i want to work in one of these areas, an forever better my skills: ux/ui design, grafic design and web development.</p>


<div class="aboutme-box columns-2 sm:flex-wrap sm:text-xs">
        <RouterLink class="aboutme-btn font-bold" to="/about">Read more about me here!</RouterLink><br>
        <a class="font-bold align-middle" href="https://erhvervsakademisydvest-my.sharepoint.com/:b:/g/personal/annwal01_easv365_dk/EfZ_OPx6-nRKj2Pb8urT1pUB2qOY4BEHzbunuUZcTpbZ1A?e=Fyfw4I" alt="button that links to cv on onedrive">Download CV</a>
        </div>
</div>

  <div class="home-portrait 2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full sm:text-sm justify-end md:justify-start sm:justify-start">
      <img class="portrait" src="../assets/Portraitforweb.jpg" alt="Portrait of Anne-Sofie">
  </div>

</div>

<div class="home-container2 text-center lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse 2xl:gap-10">
<div class="skill-text 2xl:w-2/5 xl:2-3/5 lg:w-full md:w-full sm:w-full text-justify sm:text-md lg:text-md">
  <h2>Graphic Design ★ User experience ★ Web development ★ Graphic facilitation ★ Poetry ★ Videography ★ UI design ★ Photography ★ Illustrations ★ Content creation ★ </h2>
</div>
<div class="skills-pic 2xl:w-3/5 xl:w-3/5 lg:w-full md:w-full sm:w-full">
  <img width="700" height="500" src="../assets/skillsnpassions.png" alt="Characters representing skills and passions">
</div>
</div>

<div>

  <h2 class="featured-works text-center">Featured works</h2>
     <!-- {{ state }} -->

      <div class="portfolio-item-container">
     <div v-for="item in state" :key="item" class="portfolio-item">
      <img :src="item.image" alt="">
          <p class="p-category" :class="item.category">{{ item.category }}</p>
      <RouterLink :to="{ name:'portfoliodetails', params:{id: item.id}}">
          <h4>{{ item.title }}</h4>
      </RouterLink>
          <p>{{ item.description }}</p>
     </div>
      </div>

  </div>



</div>
</template>

<script setup>
import featureddb from '../modules/featureddb'

const { state } = featureddb()
</script>


<style>

  .home {
    min-height: 100vh;
    display: flex-start;
  }

  .home-container1 {
    display: flex;
    justify-content: space-between;
  }

  div h2 {
    font-family: "bd-supper", sans-serif;
    color: #020202;
    font-size: 2rem;
  }

  .about-home {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: #020202;
  }

  .aboutme-box {
  padding: 20px 0px;
  display: flex;
  font-weight: bold;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  align-items: center;
  }

  /*Button download*/

  .aboutme-btn {
  max-width: 255px;
  padding: 0.1rem;
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
  margin-right: 1rem; 
}

.aboutme-btn:hover {
  transform: scale(1.02);
}

.home-portrait {
  width: auto;
  display: flex;

}

/*Skills and Passions*/

.home-container2 {
  display: flex;
  padding: 7rem 0rem;
}

div .skills-pic {
  display: flex;
  justify-content: flex-end;
}

.skill-text {
  font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: #020202;
}


/*Featured works*/
div img {
  align-self: center;
  margin-bottom: 0.5rem;
}

.portfolio-item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}

.portfolio-item {
  width: 14rem;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  padding: 12px;
  margin: 4rem 0px;
  
}

.p-category {
  text-transform: uppercase;
  font-weight: 700;
  padding-left: 3px;
  font-family: "bd-supper", sans-serif;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}

.Web {
  color: var(--pink-color);
  border-left: 1px solid var(--pink-color);
}

.Video {
  color: var(--yellow-color);
  border-left: 1px solid var(--yellow-color);
}

.Photo {
  color: var(--green-color);
  border-left: 1px solid var(--green-color);
}

.Design {
  color: var(--blue-color);
  border-left: 1px solid var(--blue-color);
}

.UX-UI {
  color: var(--orange-color);
  border-left: 1px solid var(--orange-color);
}

</style>

