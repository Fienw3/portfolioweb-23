import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Bliv bloddoner - NGO',
            description: 'Re-branding of the NGO blivbloddoner.dk, including creating a design concept for them and a poster',
            image: "../src/assets/Bloddoner.jpg",
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/tanhan01_easv365_dk/Evwc9xjaVh5JgjHkQD7008kBH2THbDK9Lzontklq2ZiSVg?e=PyNVEG',
            github:'',
            category: 'Design',
            tech: 'Adobe Illustrator, Adobe InDesign',
            date: "Feburary 24th 2023",
            teammembers: 'Tanya',
            complete:'Completed'

        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            video:'',
            link: 'https://google.com',
            github:'',
            category: 'Video',
            tech: 'Adobe aftereffects, Premiere pro',
            date: "",
            teammembers: 'Alberte, Dream',
            complete:''

        },

        {
            id: 3,
            title: 'Portfolio 3',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            video:'',
            link: 'https://google.com',
            github:'',
            category: 'Video',
            tech: 'Adobe aftereffects, Premiere pro',
            date: "",
            teammembers: 'Alberte, Dream',
            complete:''

        },
        {
            id: 4,
            title: 'Portfolio 4',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            video:'',
            link: 'https://google.com',
            github:'',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            date: "",
            teammembers: 'Alberte, Dream',
            complete:''

        },

        {
            id: 5, 
            title: 'Portfolio 5',
            description: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/200/200',
            video:'',
            link: 'https://google.com',
            github:'',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            date: "",
            teammembers: 'Alberte, Dream',
            complete:''

        }
    ])

    return {
        state
    }

}

export default getPortfolio