import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Portfolio 1',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            links: 'https://google.com',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            date: "",
            teammembers: ["Alberte", "Dream"]

        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            link: 'https://google.com',
            category: 'Video',
            tech: 'Adobe aftereffects, Premiere pro',
            date: "",
            teammembers: ["Alberte", "Dream"]

        },

        {
            id: 3,
            title: 'Portfolio 3',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            link: 'https://google.com',
            category: 'Video',
            tech: 'Adobe aftereffects, Premiere pro',
            date: "",
            teammembers: ["Alberte", "Dream"]

        },
        {
            id: 4,
            title: 'Portfolio 4',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            link: 'https://google.com',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            date: "",
            teammembers: ["Alberte", "Dream"]

        },

        {
            id: 4,
            title: 'Portfolio 4',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            link: 'https://google.com',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            date: "",
            teammembers: ["Alberte", "Dream"]

        },
    ])

    return {
        state
    }

}

export default getPortfolio