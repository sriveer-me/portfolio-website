<template>
    <section class="home-section">
        <h2 class="hero-sub-text">Veeru Neerukonda</h2>
        <h1 class="hero-text">Artist</h1>
        <h1 class="hero-text">Designer</h1>
        <h1 class="hero-text">Developer</h1>

        <svg class="divider-line" height="5" viewBox="0 0 90vw 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90vw" height="5" rx="2.5" fill="#2D56E6"/>
        </svg>


        <div class="icon-box">
            
            <a class="box linkedIn-box" href="#">
                <Icon size="75">
                    <LinkedinIcon />
                </Icon>
                <h1 class="menu-item-text" v-if="!isDesktop">Linked In</h1>
            </a>

            <a class="box discord-box" href="#">
                <Icon size="75">
                    <DiscordIcon />
                </Icon>
                <h1 class="menu-item-text" v-if="!isDesktop">Discord</h1>
            </a>

            <a class="box leave-message-here-box" href="#">
                <FirefoxIcon />
                <h1 class="menu-item-text" v-if="!isDesktop">Leave Message</h1>
            </a>

            <a class="box github-box" href="#">
                <Icon size="75">
                    <GithubIcon />
                </Icon>
                <h1 class="menu-item-text" v-if="!isDesktop">Github</h1>
            </a>

        </div>

        <svg class="scroll-icon" v-if="isDesktop" 
             width="30px" height="37px" viewBox="0 0 30 37" version="1.1" xmlns="http://www.w3.org/2000/svg"
        >
            <g id="#252424fe">
            <path class="scroll-outer-shell" id="scroll-outer-shell" opacity="1.00" d=" M 6.22 3.30 C 12.41 -1.13 21.98 0.28 26.43 6.53 C 30.31 11.51 29.31 18.23 29.15 24.11 C 28.57 32.24 19.94 38.21 12.10 36.59 C 5.88 35.73 1.08 30.41 0.00 24.36 L 0.00 13.37 C 0.76 9.40 2.79 5.57 6.22 3.30 M 12.53 3.71 C 7.94 4.58 3.91 8.32 3.01 12.95 C 2.57 16.25 2.64 19.60 2.82 22.92 C 3.00 28.41 7.59 33.26 13.00 33.95 C 19.19 34.96 25.75 30.18 26.39 23.89 C 26.61 20.41 26.64 16.91 26.35 13.44 C 25.55 7.08 18.77 2.36 12.53 3.71 Z" />
            <path class="scroll-inner-arrow" id="scroll-inner-arrow" opacity="1.00" d=" M 10.05 10.08 C 11.13 8.18 12.71 6.26 14.92 5.69 C 16.77 6.85 18.16 8.55 19.71 10.06 C 19.31 10.60 18.51 11.68 18.11 12.22 C 17.59 11.79 16.54 10.92 16.02 10.49 C 16.01 12.60 15.99 14.71 15.94 16.81 C 17.37 15.42 18.61 15.48 19.67 17.00 C 18.35 19.17 16.45 20.89 14.24 22.12 C 12.73 20.25 9.84 18.91 9.98 16.18 L 11.01 15.71 C 11.59 15.95 12.75 16.42 13.33 16.66 C 13.29 14.86 13.27 13.07 13.27 11.28 C 12.15 11.69 9.49 12.12 10.05 10.08 Z" />
            </g>
        </svg>

    </section>
</template>

<script>
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js';

import { Icon } from '@vicons/utils';
import LinkedinIcon from '@vicons/fa/Linkedin';
import DiscordIcon from '@vicons/fa/Discord';
import GithubIcon from '@vicons/fa/Github';
import FirefoxIcon from '@/components/Icons/FirefoxIcon.vue';

export default {
    name: "HomeSection",
    components:{
        Icon,
        LinkedinIcon,
        DiscordIcon,
        GithubIcon,
        FirefoxIcon
    },
    data(){
        return{
            isMobile: true,
            isTablet: false,
            isDesktop: false
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
            else console.log('could not determine the device inside the checkDevice function of the Navbar component');
        },
    },
    mounted(){
        this.checkDevice();
        window.addEventListener("resize",this.checkDevice.bind(this));
        

        let resizeFunction = function(){
            let dividerLine = this.$el.querySelector('.divider-line rect');
            let {width} = dividerLine.getBoundingClientRect();

            let iconBox = this.$el.querySelector('.icon-box');
            iconBox.style.width = `${width}px`;
        }.bind(this)
        resizeFunction();
        window.addEventListener("resize",resizeFunction)
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;

.home-section{
    position: relative;
    min-height: calc(100vh - var(--nav-bar-height));
    background-color: $primary-white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1{
    text-align: center;
}
h2{
    text-align: center;
    margin-top: var(--spacing-top);
    margin-bottom: var(--spacing-normal);
}

.divider-line{
    margin: var(--spacing-large);
    width: 90vw;
}

.icon-box{
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: var(--spacing-large);

    svg{
        color: $primary-white;
    }

    @include for-desktop-up{
        flex-direction: row;
        row-gap: none;

        justify-content: space-around;

        svg{
            color: $primary-black;
        }
    }
}




.box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 80vw;
    padding: var(--spacing-normal);
    column-gap: var(--spacing-large);
    
    background: $primary-black;
    svg{
        fill: $primary-white;
    }
    color: $primary-white;

    @include for-desktop-up{
        width: auto;
        padding: none;
        column-gap: none;

        background: $primary-white;
        svg{
            fill: $primary-black;
        }
    }


    border-radius: 5px;
    text-decoration: none;
}

.scroll-icon{
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    margin-bottom: var(--spacing-normal);

    fill: $primary-black;
}

</style>