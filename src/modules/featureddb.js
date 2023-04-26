import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 2,
            title: 'Beyond Esbjerg',
            description: 'Creating a event with branding for Esbjerg',
            image: '../assets/img/Beyond.jpg',
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/annwal01_easv365_dk/EmYS3Lxi7GVJhZU1yspmq50BEIMCgPKoibr4U4pBX-HWtw?e=DmvpT7',
            category: 'Design',
            tech: 'Adobe Illustrator, Miro, Adobe Premiere Pro',
            date: "March 29th 2023",
            teammembers: 'Alberte, Dream, Lykke',
            complete:'Completed'

        },
        {
            id: 6, 
            title: 'Workex',
            description: 'Creating an app, with ux in mind',
            image: '../assets/img/Workex.jpg',
            video: '',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/annwal01_easv365_dk/Eq0Qbt7qd75HscOOHWjKpesBYg9AkQsrSG-vBqITz4EVeQ?e=j9gJHB',
            category: 'UX-UI',
            tech: 'Adobe XD, Adobe Photoshop, Adobe Illustrator',
            date: "September 26th 2022",
            teammembers: 'Alberte, Dream',
            complete:'Completed'

        },

        {
            id: 3,
            title: 'BioVers',
            description: 'A concept of a new thinking cinema app',
            image: '../assets/img/Cinema.jpg',
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/tanhan01_easv365_dk/EsV7p_P7V-dMrvPXRs58kH4BwQzhMx2x90okcncK0Qlbsw?e=PHcZGM',
            category: 'UX-UI',
            tech: 'Adobe XD, Adobe Illustrator, Miro',
            date: "February 23rd",
            teammembers: 'Alberte, Dream, Tanya',
            complete:'Incomplete'

        }
    ])

    return {
        state
    }

}

export default getPortfolio