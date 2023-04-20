<script setup>

</script>

<template>
  <div class="portfolio 2xl:px-32 2xl:py-12 xl:px-32 xl:py-12 lg:px-28 lg:py-8 md:px-24 md:py-6 sm:px-8 sm:py-5">

  <div class="portfolio-header">
    <h2>Anne-Sofie's Portfolio</h2>
  </div>

  <div class="category-boxes sm:flex-wrap md:flex-wrap">

    <button type="button" class="web-btn" @click="changeCategory('Web')" value="Web">Web</button>
    <button type="button" class="video-btn" @click="changeCategory('Video')" value="Video">Video</button>
    <button type="button" class="photo-btn" @click="changeCategory('Photo')" value="Photos">Photos</button>
    <button type="button" class="design-btn" @click="changeCategory('Design')" value="Design">Design</button>
    <button type="button" class="ui/ux-btn" @click="changeCategory('UX-UI')" value="UX-UI">UI/UX</button>
    <button type="button" class="all" @click="changeCategory('All')">All</button>

  </div>

  <div>
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
import { ref } from 'vue'
import portfoliodb from '../modules/portfoliodb'

const isActive = ref(true)

let { state } = portfoliodb()
const originalState = state.value;

//Filter//
var selector

function changeCategory(category) {
  if(category !="All"){
    selector = category
    state.value = originalState.filter(filterFunc)
  } else{
    console.log("test")
    state.value = originalState
  }
}

var filterFunc = (item) => {
  var category = item.category;

  if(category === selector) {
    return true;
  } else {
    return false;
  };
};

</script>



<style scoped>

  .portfolio {
    min-height: fit-content;
    display: flex-start;
  }
 
  div h2 {
    font-family: "bd-supper", sans-serif;
    color: #020202;
    font-size: 2rem;
    text-align: center;
    color: #020202;
  }

  div h4 {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
  }

  div p {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
  }

  .category-boxes {
    padding: 1rem 0px;
    display: flex;
    justify-content: space-around;
  }
  
div button {
  width: 9.375rem;
  max-height: 32px;
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
  padding: 0.1px 0.19rem;
  margin-bottom: 1rem;
}

div img {
  align-self: center;
  margin-bottom: 0.5rem;
}

.portfolio-item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.portfolio-item {
  width: 14rem;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  padding: 12px;
  margin-bottom: 35px;
  
}

.p-category {
  text-transform: uppercase;
  font-weight: 700;
  padding-left: 3px;
  font-family: "bd-supper", sans-serif;
}

.Web {
  color: var(--pink-color);
  border-left: 1px solid var(--pink-color);
}

.Video {
  color: var(--yellow-color);
  border-left: 1px solid var(--yellow-color);
}

</style>