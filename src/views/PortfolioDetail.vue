<template>

    <div class="detail 2xl:px-32 2xl:py-12 xl:px-32 xl:py-12 lg:px-28 lg:py-8 md:px-24 md:py-4 sm:px-8 sm:py-4 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center">

        <button @click="goBack()">Back</button>
        
        <div v-if="portfolioDetails" class="portfolioDetails md:flex-wrap sm:flex-wrap pt-16">
            <div class="portfolio-info xl:w-3/5 lg:w-3/5 md:w-full sm:w-full sm:text-sm">
            <h3>General information</h3>
            <p><span>Name: </span>{{ portfolioDetails.title }}</p>
            <p><span>Category: </span>{{ portfolioDetails.category }}</p>
            <p><span>Date: </span>{{ portfolioDetails.date }}</p>
            <p><span>Descriptions: </span>{{ portfolioDetails.description }}</p>
            <p><span>Teammembers: </span>{{ portfolioDetails.teammembers }}</p>
            <p><span>Tech: </span>{{ portfolioDetails.tech }}</p>
            <p><span>Complete: </span>{{ portfolioDetails.complete }}</p>
            <p><span>Link: </span><a>{{ portfolioDetails.link }}</a></p>
        </div> 
        <div class="portfolio-img-box xl:w-2/5 lg:w-2/5 md:w-full sm:w-full 2xl:justify-end xl:justify-end lg:justify-end md:justify-start sm:justify-start">
            <img class="portfolio-img" :src="portfolioDetails.image" alt="">
        </div>
        </div>


        <div v-if="portfolioDetails" class="portfolioDetails w-full sm:text-sm">
        <div class="process-box">
        <h3>Tasks and process</h3>
        <p>{{ portfolioDetails.process }}</p>
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
    font-family: 'Courier New', Courier, monospace;
}

.portfolioDetails {
    display: flex;
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

h3 {
    color: black;
    display: flex;
    font-weight: bold;
    font-family: "bd-supper", sans-serif;
}

div span {
    font-weight: bold;
}

.portfolio-item-container {
    display: flex;
}

.portfolio-item {
    margin: 10px;
    border: 2px solid #222222;
    padding: 10px;
}

.portfolio-img-box{
    display: flex;
}

img{
    scale: 140%;
}

.process-box {
    padding-top: 5rem;
}

</style>