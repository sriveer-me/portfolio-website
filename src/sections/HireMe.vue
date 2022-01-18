<template>
    <section class="hire-me-section">
        <div class="wrapper">
            <h1 class="hero-text section-heading">Hire Me!</h1>
            <h2 class="menu-item-text large-margin-top">My Specializations Dictate The Kind Of Work I Can Do An Exceptional Job In. </h2>
        </div>
        
        <div class="three-way-grid">
            <div class="left grid-cell">
                <Icon class="icon" :size="iconSize">
                    <GameController />
                </Icon>
                <p class="bodyText align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe similique. Velit necessitatibus incidunt, beatae nam modi, quisquam quidem non quam quibusdam architecto, itaque et.</p>
            </div>
            <div class="center grid-cell">
                <Icon class="icon" :size="iconSize">
                    <WebFilled />
                </Icon>
                <p class="bodyText align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe similique. Velit necessitatibus incidunt, beatae nam modi, quisquam quidem non quam quibusdam architecto, itaque et.</p>

                <p class="bodyText align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima dolorem esse accusamus suscipit aliquid omnis laboriosam id, non, sequi dicta? Perspiciatis consequatur id aliquid sit vero repellendus itaque eum inventore. Recusandae corrupti non ad, consequatur temporibus quisquam tenetur accusantium cum incidunt quidem, itaque iste dolor, voluptas iusto harum totam illum! Voluptatem accusantium temporibus minima, cupiditate perspiciatis sapiente sint laborum?</p>
            </div>
            <div class="right grid-cell">
                <Icon class="icon" :size="iconSize">
                    <DrawOutlined />
                </Icon>
                <p class="bodyText align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe similique. Velit necessitatibus incidunt, beatae nam modi, quisquam quidem non quam quibusdam architecto, itaque et.</p>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.hire-me-section{
    background-color: $primary-white;
    min-height: 100vh;

    @include for-tablet-portrait-up{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
} 

.three-way-grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
        "left"
        "center"
        "right";

    @include for-tablet-portrait-up{
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "left center right";
    }
}

.grid-cell{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: var(--spacing-large);
}
.left{
    grid-area: left;
    
    @include for-desktop-up{
        border-right: 5px solid $primary-black;
        border-radius: 50%;
    }
}

.center{
    grid-area: center;
}

.right{
    grid-area: right;

    @include for-desktop-up{
        border-left: 5px solid $primary-black;
        border-radius: 50%;
    }
}

.icon{
    color: $primary-black;
}
</style>

<script>
import { Icon } from '@vicons/utils'
import  DrawOutlined  from '@vicons/material/DrawOutlined';
import  GameController  from '@vicons/ionicons5/GameController';
import  WebFilled  from '@vicons/material/WebFilled';

import {isMobile, isTablet, isDesktop} from '@/js/breakpoints.js';

export default {
    name: "HireMe Section",
    components:{
        Icon,
        DrawOutlined,
        GameController,
        WebFilled
    },
    data(){
        return{
            isMobile: true,
            isTablet: false,
            isDesktop: false,

            iconSize: "256"
        }
    },
    methods:{
        checkDevice(){
            if(isMobile()){
                this.isMobile = true;
                this.isTablet = false;
                this.isDesktop = false;
            }
            else if(isTablet()){
                this.isMobile = false;
                this.isTablet = true;
                this.isDesktop = false;
            }
            else if(isDesktop()){
                this.isMobile = false;
                this.isTablet = false;
                this.isDesktop = true;
            }
            else console.log('could not determine the device inside the checkDevice function of the HireMe section Component');
        },
        setIconSize(){
            if(this.isMobile === true)
                this.iconSize = 128;
            if(this.isTablet === true)
                this.iconSize = 128;
            if(this.isDesktop === true)
                this.iconSize = 256;
        }
    },
    mounted(){
        this.checkDevice();
        window.addEventListener("resize",this.checkDevice.bind(this));

        this.setIconSize();
        window.addEventListener("resize",this.setIconSize.bind(this));
    }
}
</script>