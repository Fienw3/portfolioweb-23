<script setup>

</script>

<template>
  <div>
     <!-- {{ state }} -->

      <div class="portfolio-item-container">
     <div v-for="item in state" :key="item" class="portfolio-item">
          <p class="p-category" :class="item.category">{{ item.category }}</p>
      <RouterLink :to="{ name:'portfoliodetails', params:{id: item.id}}">
          <h4>{{ item.title }}</h4>
      </RouterLink>
          <p>{{ item.description }}</p>
          <a :href="item.link">LinkedIn</a>
          <br>
          <img :src="item.image" alt="">
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
  .portfolio {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 42px;
  }
}

.portfolio-item-container {
  display: flex;
  padding: 42px;
}

.portfolio-item {
  margin: 10px;
  border: 2px solid #222222;
  padding: 10px;
}

.p-category {
  text-transform: uppercase;
  font-weight: 700;
}

.Web {
  color: rgb(98, 23, 168);
  border-left: 1px solid rgb(98, 23, 168);
}

.Video {
  color: rgb(18, 150, 60);
  border-left: 1px solid rgb(18, 150, 60);
}

</style>