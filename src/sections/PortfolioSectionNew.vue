<template>
    <section class="portfolio-section" id="portfolio-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode section-heading" id="portfolio-hero-heading">Projects</h1>
            <h2 class="sub-heading caption large-margin-top hero-sub-heading" id="portfolio-hero-sub-heading">Given Below Is A Detailed List Of My Most Important Projects Undertaken Yet.</h2>
        </div>
        
        <div class="projects-grid">
            <div class="card card-1">
                <PhatProjectCard />
            </div>
            <div class="card-2 card">card-2</div>
            <div class="card-3 card">card-3</div>
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
    grid-template-rows: repeat(3,1fr);

    row-gap: 125px;

    grid-template-areas: 
        "card-1 card-1 card-1 card-1 card-1 ."
        ". card-2 card-2 card-2 card-2 card-2"
        "card-3 card-3 card-3 card-3 card-3 .";
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

</style>

<script>
import PhatProjectCard from '@/components/PhatProjectCard.vue';

export default {
    name: "PortfolioSectionNew",
    components:{
        PhatProjectCard
    }

}
</script>