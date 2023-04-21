import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Bliv bloddoner - NGO',
            description: 'Re-branding of the NGO blivbloddoner.dk.',
            image: "../src/assets/img/Bloddoner.jpg",
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/tanhan01_easv365_dk/Evwc9xjaVh5JgjHkQD7008kBH2THbDK9Lzontklq2ZiSVg?e=PyNVEG',
            category: 'Design',
            tech: 'Adobe Illustrator, Adobe InDesign',
            date: "Feburary 24th 2023",
            teammembers: 'Tanya',
            complete:'Completed',
            process: 'Our task was to take an already excisting NGO, we chose blivbloddoner.dk and do a complete rebrand. We looked at everything from a new design manual to what we wanted the brand to communicate to the people. In the link youll see our process of figuring out what we wanted to communicate with the brand and how to achieve this. Youll also see this documented in form of a Powerpoint presentation video and graphic design material. This project thaught me how to use Adobes 3D function.'

        },
        {
            id: 2,
            title: 'Beyond Ebjerg',
            description: 'Creating a event with branding for Esbjerg.',
            image: '../src/assets/img/Beyond.jpg',
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/annwal01_easv365_dk/EmYS3Lxi7GVJhZU1yspmq50BEIMCgPKoibr4U4pBX-HWtw?e=DmvpT7',
            category: 'Design',
            tech: 'Adobe Illustrator, Miro, Adobe Premiere Pro',
            date: "March 29th 2023",
            teammembers: 'Alberte, Dream, Lykke',
            complete:'Completed',
            process: 'Our task here was to create an imaginative event for the city Esbjerg, that would get people interested in the city. We started out using UX methods to choose a target group, figure out what they wanted, and how to achieve this. This is all documented in the link above, aswell as the final results. This taught me a lot about the importance of research and ux. But also how to better create mock-ups'

        },

        {
            id: 3,
            title: 'BioVers',
            description: 'A concept of a new thinking cinema app.',
            image: '../src/assets/img/Cinema.jpg',
            video:'',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/tanhan01_easv365_dk/EsV7p_P7V-dMrvPXRs58kH4BzgKamcfms5ptPX76VIIpjQ',
            category: 'UX-UI',
            tech: 'Adobe XD, Adobe Illustrator, Miro',
            date: "February 23rd",
            teammembers: 'Alberte, Dream, Tanya',
            complete:'Incomplete',
            process: 'Our task was to use UX methods, to create a screen application that people actually would want, and which brought something new to the table. Therefore we created an innovative cinema app, that fulfilled the wishes of our customer segments. You can see our process and the final products in the link above. This project taught me a lot about to effectively use xd, and made me a lot quicker at it.'

        },
        {
            id: 4,
            title: 'Nuddel promo video',
            description: 'A promo video for Cup Noodles.',
            image: '../src/assets/img/Noodle.jpg',
            video:'https://youtube.com/shorts/JON6C0CkUfc?feature=share',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:v:/g/personal/albtor01_easv365_dk/ERKY8IDKivVHtwW7N9XCrkUBeloQDQCAEtv1GCIFfMxbgQ?e=ocafdi',
            category: 'Video',
            tech: 'Adobe Premiere Pro, Adobe AfterEffects',
            date: "February 14th",
            teammembers: 'Alberte, Dream',
            complete:'Completed',
            process: 'Our task was to create a promotional video for a product or a brand, that was atmost 20 seconds. While we kept the intended platform for the video in mind. We decided to create a promotional video, with the target audience of young students in mind. We collectively shot and directed the video, aswell as starred in it. Color grading was done by me, general editing was Alberte. This project thaught me alot about lighting, and how to setup light to get the desired look.'

        },

        {
            id: 5, 
            title: 'Longhorn BBQ competition',
            description: 'Website and branding for a BBQ competition.',
            image: '../src/assets/img/Viking.jpg',
            video: '../src/assets/video/BBQ-movie.mp4',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/annwal01_easv365_dk/EpMS3disejdMqQvW-rL6eeIB6nxqWlUJW9HfFeHLcohKFQ?e=2iatO3',
            category: 'Web',
            tech: 'Html, Css, Adobe Illustrator, Adobe Premiere Pro, Adobe AfterEffects',
            date: "December 29th 2022",
            teammembers: 'Adnan, Jacob',
            complete:'Completed',
            process: 'This project was an examn project for my first semester of multimediadesign. The goal was to create awareness of the event, DM in American BBQ. We used ux methods to figure out the pains and gains of our target audience, and how we got them to show up for this event. We made a lot of content for this project. First the video which was mostly shot and edited by me. I also created multiple of logos for this project. All of this can be found in the link above. This project thaught me a lot about time management, but also about how to edit pictures.'

        },

        {
            id: 6, 
            title: 'Workex',
            description: 'Creating an app, with ux in mind.',
            image: '../src/assets/img/Workex.jpg',
            video: '',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/annwal01_easv365_dk/Eq0Qbt7qd75HscOOHWjKpesBYg9AkQsrSG-vBqITz4EVeQ?e=j9gJHB',
            category: 'UX-UI',
            tech: 'Adobe XD, Adobe Photoshop, Adobe Illustrator',
            date: "September 26th 2022",
            teammembers: 'Alberte, Dream',
            complete:'Completed',
            process: 'This project we had to create an application for finding jobs, using the ux methods we had just learned. The goal for this project was to use the methods we learned, and to get comfortable using Adobe XD. This was the first time we really had used XD, so we really learned how to use it. We also learned a lot about choosing colors for projects, and how to create contrast between them.'


        },

        {
            id: 7, 
            title: 'Esbjerg after dark',
            description: 'Photo competition, where subject was own choice.',
            image: '../src/assets/img/Esbjerg.jpg',
            video: '',
            link: 'https://erhvervsakademisydvest-my.sharepoint.com/:i:/g/personal/annwal01_easv365_dk/EbjD6PidMuBHqTTIYMKujTkBPc7bPVIFurvq1DhxmiXZFg?e=vWvjDe',
            category: 'Photo',
            tech: 'Adobe Photoshop, Samsung S21',
            date: "October 30th 2022",
            teammembers: 'None',
            complete:'Completed',
            process: 'This photo was taken as a part of the very first photo competition we had in school. We were to take a photo of a subject/motif of choice and then edit it. We were not allowed to use effect or add anything, so it relied heavely on practicing photography and color grading our photos using photoshop. This project thaught me a lot about print and about editing colors. For full picture visit the link above.'
        }
    ])

    return {
        state
    }

}

export default getPortfolio