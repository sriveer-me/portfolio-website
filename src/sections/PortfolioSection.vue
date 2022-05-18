<template>
    <section class="portfolio-section" id="portfolio-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode section-heading" id="portfolio-hero-heading">Projects</h1>
            <h2 class="sub-heading caption large-margin-top hero-sub-heading" id="portfolio-hero-sub-heading">Given Below Is A Detailed List Of My Most Important Projects Undertaken Yet.</h2>
        </div>
        
        <div class="projects-grid">
            <div class="card card-1">
                <FlappyBirdPhatCard />
            </div>
            <div class="card card-2">
                <QuizAppPhatCard />
            </div>
            <div class="card card-3">
                <TicTacToePhatCard />
            </div>
            <div class="card card-4">
                <BlogWebsitePhatCard />
            </div>
        </div>

        <div class="actions">
            <a class="dashed-button menu-item-text" :href="require('@/assets/resume-veeru.pdf')" download="veeru-resume.pdf">Download My Resume</a>
            <a class="dashed-button menu-item-text" href="https://github.com/veeru-neerukonda">View More Projects</a>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.portfolio-section{
    min-height: 100vh;
    margin: 0 auto;
    background-color: $primary-black;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.projects-grid{
    margin-top: var(--spacing-large);
    width: 100vw;

    display: grid;
    grid-template-columns: repeat(6,1fr);
    
    row-gap: 75px;

    grid-template-areas: 
        "card-1 card-1 card-1 card-1 card-1 card-1"
        "card-2 card-2 card-2 card-2 card-2 card-2"
        "card-3 card-3 card-3 card-3 card-3 card-3"
        "card-4 card-4 card-4 card-4 card-4 card-4";
    
    @include for-desktop-up
    {
        grid-template-areas: 
        "card-1 card-1 card-1 card-1 card-1 ."
        ". card-2 card-2 card-2 card-2 card-2"
        "card-3 card-3 card-3 card-3 card-3 ."
        ". card-4 card-4 card-4 card-4 card-4";
    }
}

.card{
    overflow-x: hidden; //important without this naive-ui carousel is not working
}
.card-1{
    grid-area: card-1;
}
.card-2{
    grid-area: card-2;
}
.card-3{
    grid-area: card-3;
}
.card-4{
    grid-area: card-4;
}

.actions{
    display: flex;
    flex-direction: column;
    margin: var(--spacing-large);
    row-gap: calc(var(--spacing-large) * 2);
    @include for-tablet-portrait-up{
        margin: 0;
        row-gap: 0;
    }

    @include for-tablet-portrait-up{
        flex-direction: row;
        height: calc(var(--spacing-large) * 3);
    }

    column-gap: var(--spacing-large);
    a{
        flex: 1 1 50%;
        
        border: 3px dashed $primary-black;

        display: flex;
        justify-content: center;
        align-items: center;

        color: $primary-black;
        background-color: $primary-white;
        text-decoration: none;
    }
}
</style>

<script>
import FlappyBirdPhatCard from '@/components/PhatCards/FlappyBirdPhatCard.vue';
import QuizAppPhatCard from '@/components/PhatCards/QuizAppPhatCard.vue';
import TicTacToePhatCard from '@/components/PhatCards/TicTacToePhatCard.vue';
import BlogWebsitePhatCard from '@/components/PhatCards/BlogWebsitePhatCard.vue';

import {genCardTimeline} from '@/js/Animations/PortfolioCardTimelineGenerator.js';

export default {
    name: "PortfolioSectionNew",
    components:{
        FlappyBirdPhatCard,
        QuizAppPhatCard,
        TicTacToePhatCard,
        BlogWebsitePhatCard,
    },
    mounted()
    {
        let flappyBirdEnclosure = this.$el.querySelector('.card-1');
        let quizAppEnclosure = this.$el.querySelector('.card-2');
        let TicTacToeEnclosure = this.$el.querySelector('.card-3');
        let BlogWebsiteEnclosure = this.$el.querySelector('.card-4');

        let cards = [...this.$el.querySelectorAll('.card')];
        let flag = true;
        let cardTimelines = cards.map(function(card) {
            flag = !flag;
            return genCardTimeline(card,!flag);
        })

        function cardObserverMain(observations)
        {
            observations.forEach(observation => {
                if(observation.isIntersecting === true)
                {
                    let index = cards.findIndex(card => card === observation.target);
                    cardTimelines[index].play();
                }
            });
        }

        let cardObserver = new IntersectionObserver(cardObserverMain.bind(this),{ //eslint-disable-line
            rootMargin: "-30% 0px"
        });

        cardObserver.observe(flappyBirdEnclosure);
        cardObserver.observe(quizAppEnclosure);
        cardObserver.observe(TicTacToeEnclosure);
        cardObserver.observe(BlogWebsiteEnclosure);
    }
}
</script>