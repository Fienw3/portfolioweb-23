<template>

    <div class="detail">

        <button @click="goBack()">Back</button>
        
        <div v-if="portfolioDetails" class="portfolioDetails">
           <div class="portfolio-info">
            <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
            <h2>{{ portfolioDetails.title }}</h2>
            <p>{{ portfolioDetails.description }}</p>
            <a :href="portfolioDetails.link">LinkedIn</a>
            <span>{{ portfolioDetails.teammembers }}</span>
        </div> 
        <div class="portfolio-img">
            <img :src="portfolioDetails.image" alt="">

        </div>
       </div>
       
       <div v-else>...loading</div>

    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb'
import{ useRouter} from 'vue-router'

const router = useRouter()

const goBack = ( ) => {
    router.go(-1)
}

const { state } = portfoliodb()

const props = defineProps({
    id: String
})

const { id } = toRefs(props)

const portfolioDetails = computed(
    () => {
        return state.value.find(item => item.id == id.value)
    }
)

</script>

<style scoped>

.detail{
    min-height: 100vh;
    display: flex-start;
    align-items: center;
    padding: 72px 125px;
}

div button {
  width: 85px;
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
  color: var(--pink-color);
  border-left: 1px solid var(--pink-color);
  padding-left: 3px;
}

.Video {
  color: var(--yellow-color);
  border-left: 1px solid var(--yellow-color);
  padding-left: 3px;
}
</style>