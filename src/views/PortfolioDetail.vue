<template>
    <div>
        Details
        test: {{ id }}
        <button @click="goBack()">Back</button>
        
        <div v-if="portfolioDetails" class="portfolioDetails">
            <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
            <h4>{{ portfolioDetails.title }}</h4>
            <p>{{ portfolioDetails.description }}</p>
            <a :href="portfolioDetails.link">LinkedIn</a>
            <img :src="portfolioDetails.image" alt="">
            <span>{{ portfolioDetails.teammembers }}</span>
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