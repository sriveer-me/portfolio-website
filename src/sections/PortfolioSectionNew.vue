<template>
    <section class="portfolio-section" id="portfolio-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode section-heading" id="portfolio-hero-heading">Projects</h1>
            <h2 class="sub-heading caption large-margin-top hero-sub-heading" id="portfolio-hero-sub-heading">Given Below Is A Detailed List Of My Most Important Projects Undertaken Yet.</h2>
        </div>
        
        <div class="projects-grid">
            <div class="card card-1">
                <PhatProjectCard>
                    <template #projectDescription>
                        <p class="strong text-center text-small">
                            This blockbuster game was rebuilt by using the <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">HTML Canvas Technology</a> and was subsequently deployed on <a class="link" href="https://www.heroku.com/platform">Heroku</a> for accessibility throughout the entire globe.
                        </p>
                        <ul class="project-description-list">
                            <li>
                                <p class="bodyText">
                                  <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">Html5 Canvas</a> allowed development of this game without needing to worry much about underlying platform and <a class="link" href="https://en.wikipedia.org/wiki/List_of_rendering_APIs">Rendering Api</a> details like vertex and index buffer as well as shaders using <a class="link" href="https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl">HLSL</a> or equivalent. this not only allowed for quicker development but also gave me more time to look at other areas like sound and graphics. 
                                </p>
                            </li>
                            <li>
                                <p class="bodyText">
                                    The <a class="link" href="https://www.countryflagsapi.com/">Flags Api</a> is integrated inside the project so as to display to the user the country flag of their origin.
                                </p>
                            </li>
                            <li>
                                <p class="bodyText">
                                    The server hosted on the platform <a class="link" href="https://www.heroku.com/platform">Heroku</a> is responsible for storing and maintaining player records using a <a href="https://www.mongodb.com/databases/types/transactional-databases" class="link">Transactional Database</a> .
                                </p>
                            </li>
                            <li>
                                <p class="bodyText">
                                    The <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" class="link">Rest Api</a> implemented by the server hosted on <a class="link" href="https://www.heroku.com/platform">Heroku</a> is used as an interface for the client to access player records while the game is in session in the browser.  
                                </p>
                            </li>
                        </ul>
                        <div class="sticker-box">
                            <Icon size="64" color="#262525">
                                <Html5 />
                            </Icon>
                            <Icon size="64" color="#262525">
                                <Gamepad />
                            </Icon>
                            <HerokuIcon />
                        </div>
                    </template>
                </PhatProjectCard>
            </div>
            <div class="card card-2">
                <PhatProjectCard />
            </div>
            <div class="card card-3">
                <PhatProjectCard />
            </div>
            <div class="card card-4">
                <PhatProjectCard />
            </div>
        </div>

        <div class="actions">
            <a class="dashed-button menu-item-text" :href="require('@/assets/resume-veeru.pdf')" download="veeru-resume.pdf">Download My Resume</a>
            <a class="dashed-button menu-item-text" href="#">View More Projects</a>
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
    grid-template-rows: repeat(4,1fr);

    row-gap: 125px;

    grid-template-areas: 
        "card-1 card-1 card-1 card-1 card-1 ."
        ". card-2 card-2 card-2 card-2 card-2"
        "card-3 card-3 card-3 card-3 card-3 ."
        ". card-4 card-4 card-4 card-4 card-4";
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

.link{
    text-decoration: none;
    color: map-get($accent,"light-mode");
    font-weight: 400;
}

.project-description-list{
    list-style:square;
    li{
        margin-top: var(--spacing-normal);
    }
}

.sticker-box{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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