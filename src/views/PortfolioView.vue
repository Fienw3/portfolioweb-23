<script setup>

</script>

<template>

  <div class="portfolio-header">
    <h2>Anne-Sofie's Portfolio</h2>
  </div>

  <div class="category-boxes">

    <button class="web-btn">Web</button>
    <button class="video-btn">Video</button>
    <button class="photo-btn">Photos</button>
    <button class="graphic-btn">Graphic Design</button>
    <button class="ui/ux-btn">UI/UX</button>
    <button class="other-btn">Other</button>

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
</template>

<script setup>
import portfoliodb from '../modules/portfoliodb'

const { state } = portfoliodb()
</script>



<style scoped>

@media (min-width: 1024px) {
 
  div h2 {
    font-family: "bd-supper", sans-serif;
    font-size: 30px;
    padding: 75px 42px 10px 42px;
    text-align: center;
    color: #020202;
  }
 
  .portfolio {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 42px;
  }
}

.category-boxes {
  display: inline-flex;
  justify-content: space-between;
  padding: 45px 42px 0px 42px;
}

div button {
  width: 150px;
  border-width: 2px 3px 4px 2px;
  border-radius: 7px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  color: black;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.portfolio-item-container {
  display: flex;
  justify-content: space-between;
  padding: 42px;
}

.portfolio-item {
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
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