<template>
    <nav class="nav-bar">

        <div class="icon-box">
            <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <rect width="23.3333" height="15.1667" />
                <rect x="11.6667" y="19.8333" width="23.3333" height="15.1667" />
            </svg>
            <h1 class="menu-item-text">Veeru Empyrean</h1>
        </div>

        <div class="right">
            <div class="icon-box" id="home-nb" v-show="!isMobile">
                <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5464 18.067L18.7981 0.554277C18.1349 -0.184759 16.8611 -0.184759 16.1979 0.554277L0.449671 18.067C0.222995 18.3184 0.0742065 18.6304 0.0213967 18.965C-0.0314131 19.2995 0.0140312 19.6422 0.152204 19.9513C0.432173 20.5835 1.0586 20.9898 1.74978 20.9898H5.24938V33.2487C5.24938 33.7132 5.43374 34.1586 5.76189 34.4871C6.09004 34.8155 6.53511 35 6.99919 35H12.2486C12.7127 35 13.1577 34.8155 13.4859 34.4871C13.8141 34.1586 13.9984 33.7132 13.9984 33.2487V26.2437H20.9976V33.2487C20.9976 33.7132 21.182 34.1586 21.5101 34.4871C21.8383 34.8155 22.2834 35 22.7474 35H27.9968C28.4609 35 28.906 34.8155 29.2341 34.4871C29.5623 34.1586 29.7466 33.7132 29.7466 33.2487V20.9898H33.2463C33.5851 20.9913 33.9171 20.894 34.2017 20.7099C34.4863 20.5258 34.7112 20.2628 34.8491 19.9529C34.9869 19.6431 35.0316 19.2998 34.9779 18.9649C34.9241 18.63 34.7742 18.318 34.5464 18.067Z" />
                </svg>
                <h2 class="menu-item-text" v-show="isDesktop">Home</h2>
            </div>
            <div class="icon-box" id="portfolio-nb" v-show="!isMobile">
                <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4473 0L2.86242 4.96125C2.86242 4.96125 0 4.86836 0 8.37644C0 9.82422 0.5565 10.9032 0.5565 10.9032L12.4297 33.816C13.5648 35.9026 15.9757 34.5961 15.9757 34.5961L34.1822 24.362L33.5008 23.5644C33.3404 22.6066 33.2471 20.8331 34.3741 19.5125C34.3992 19.4829 34.4038 19.4425 34.4172 19.4055L35 19.1356L18.4473 0ZM4.67892 5.77903L18.102 1.50635L32.928 18.6456L15.8999 26.5434L4.67892 5.77903ZM32.907 21.6334C32.8691 21.943 32.8498 22.2445 32.8539 22.5272L20.902 29.0729L32.8965 23.1996C32.9082 23.3066 32.9187 23.4143 32.9333 23.5112L17.612 32.0499L33.054 24.148L33.0633 24.1897L15.9757 33.6215C15.9676 33.6276 15.1877 34.1061 14.406 34.1061C13.6337 34.1061 13.1524 33.6484 12.9331 32.7075C12.369 30.2898 15.5738 28.9194 15.6222 28.8992L33.3457 20.0516C33.2185 20.3209 33.1304 20.5948 33.0569 20.8681L21.8062 26.9789L32.907 21.6334Z"/>
                    <path d="M18.9309 4.36963L7.41357 8.29905L10.2229 13.3983L22.1177 8.37241L18.9309 4.36963Z" />
                </svg>
                <h2 class="menu-item-text" v-show="isDesktop">Portfolio</h2>
            </div>
            <div class="icon-box" id="hire-nb" v-show="!isMobile">
                <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5ZM17.5 2.1875C14.6164 2.18765 11.7914 3.00204 9.35026 4.53694C6.90908 6.07183 4.95093 8.26484 3.70117 10.8635C2.45141 13.4623 1.96085 16.3611 2.28593 19.2263C2.61102 22.0915 3.73855 24.8067 5.53875 27.0594C7.09188 24.5569 10.5109 21.875 17.5 21.875C24.4891 21.875 27.9059 24.5547 29.4613 27.0594C31.2614 24.8067 32.389 22.0915 32.7141 19.2263C33.0392 16.3611 32.5486 13.4623 31.2988 10.8635C30.0491 8.26484 28.0909 6.07183 25.6497 4.53694C23.2086 3.00204 20.3836 2.18765 17.5 2.1875Z" />
                </svg>
                <h2 class="menu-item-text" v-show="isDesktop">Hire Me</h2>
            </div>
            <div class="icon-box" id="contact-nb" v-show="!isMobile">
                <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.5C0 22.1413 1.84374 26.5925 5.12563 29.8744C8.40752 33.1563 12.8587 35 17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 12.8587 33.1563 8.40752 29.8744 5.12563C26.5925 1.84374 22.1413 0 17.5 0C12.8587 0 8.40752 1.84374 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5ZM32 17.5C32 21.3456 30.4723 25.0338 27.753 27.753C25.0338 30.4723 21.3456 32 17.5 32C13.6544 32 9.96623 30.4723 7.24695 27.753C4.52767 25.0338 3 21.3456 3 17.5C3 13.6544 4.52767 9.96623 7.24695 7.24695C9.96623 4.52767 13.6544 3 17.5 3C21.3456 3 25.0338 4.52767 27.753 7.24695C30.4723 9.96623 32 13.6544 32 17.5Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C10 26.544 12.982 34 17.5 34C22.018 34 25 26.544 25 17.5C25 8.456 22.018 1 17.5 1C12.982 1 10 8.456 10 17.5ZM22 17.5C22 25.024 19.61 31 17.5 31C15.39 31 13 25.024 13 17.5C13 9.976 15.39 4 17.5 4C19.61 4 22 9.976 22 17.5Z" />
                    <path d="M4.7041 8.43402L6.7161 6.21002C6.9161 6.39002 7.1341 6.57002 7.3661 6.74402C9.9081 8.64802 13.9661 9.82402 18.3961 9.82402C22.1781 9.82402 25.7001 8.97002 28.2581 7.50802C28.8741 7.15602 29.4221 6.77402 29.8961 6.36802L31.8441 8.65002C31.2241 9.18002 30.5221 9.67002 29.7481 10.11C26.7161 11.846 22.6801 12.822 18.3961 12.822C13.3521 12.822 8.6661 11.466 5.5661 9.14402C5.26802 8.92072 4.98038 8.6838 4.7041 8.43402Z"/>
                    <path d="M4.7041 26.598L6.7161 28.822C6.9161 28.64 7.1341 28.462 7.3661 28.288C9.9081 26.384 13.9661 25.208 18.3961 25.208C22.1781 25.208 25.7001 26.062 28.2581 27.524C28.8741 27.876 29.4221 28.258 29.8961 28.664L31.8441 26.382C31.1925 25.8311 30.4908 25.3423 29.7481 24.922C26.7161 23.186 22.6801 22.21 18.3961 22.21C13.3521 22.21 8.6661 23.566 5.5661 25.888C5.26801 26.1113 4.98037 26.3482 4.7041 26.598Z"/>
                    <path d="M1 19V16H34V19H1Z"/>
                </svg>
                <h2 class="menu-item-text" v-show="isDesktop">Contact</h2>
            </div>

            <div class="hamburger-wrapper" @click="hamburgerClicked">
                <svg class="hamburger-icon" id="hamburger-menu-icon" v-show="isMobile"
                    width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23077 0C0.904349 0 0.591298 0.187301 0.360484 0.520699C0.12967 0.854097 0 1.30628 0 1.77778C0 2.24927 0.12967 2.70146 0.360484 3.03486C0.591298 3.36825 0.904349 3.55556 1.23077 3.55556H30.7692C31.0957 3.55556 31.4087 3.36825 31.6395 3.03486C31.8703 2.70146 32 2.24927 32 1.77778C32 1.30628 31.8703 0.854097 31.6395 0.520699C31.4087 0.187301 31.0957 0 30.7692 0H1.23077ZM0 16C0 15.5285 0.12967 15.0763 0.360484 14.7429C0.591298 14.4095 0.904349 14.2222 1.23077 14.2222H30.7692C31.0957 14.2222 31.4087 14.4095 31.6395 14.7429C31.8703 15.0763 32 15.5285 32 16C32 16.4715 31.8703 16.9237 31.6395 17.2571C31.4087 17.5905 31.0957 17.7778 30.7692 17.7778H1.23077C0.904349 17.7778 0.591298 17.5905 0.360484 17.2571C0.12967 16.9237 0 16.4715 0 16V16ZM0 30.2222C0 29.7507 0.12967 29.2985 0.360484 28.9651C0.591298 28.6317 0.904349 28.4444 1.23077 28.4444H30.7692C31.0957 28.4444 31.4087 28.6317 31.6395 28.9651C31.8703 29.2985 32 29.7507 32 30.2222C32 30.6937 31.8703 31.1459 31.6395 31.4793C31.4087 31.8127 31.0957 32 30.7692 32H1.23077C0.904349 32 0.591298 31.8127 0.360484 31.4793C0.12967 31.1459 0 30.6937 0 30.2222V30.2222Z" />
                </svg>
            </div>
        </div>
        
        <Menu ref="mainMenu" />

    </nav>
</template>

<style lang="scss">
:root{
    --nav-bar-height: 75px;
}
</style>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;

.nav-bar{
    position: sticky;
    top: 0;

    height: var(--nav-bar-height);
    display: flex;
    justify-content: space-between;
    padding: 0 var(--spacing-large);

    background-color: $primary-white;
    &.dark-mode{
        background-color: $primary-black;
    }

    z-index: 1000;
}

.right{
    display: flex;
}

.icon-box{
    height: 100%;

    display: flex;
    align-items: center;
    column-gap: var(--spacing-small);
    padding: 0 var(--spacing-normal);

    cursor: pointer;

    background-color: $primary-white;
    fill: $primary-black;
    color: $primary-black;
    &.selected{
        background-color: $primary-black;
        fill: map-get($accent,"dark-mode");
        color: $primary-white;
    }

    &.dark-mode{
        background-color: $primary-black;
        fill: $primary-white;
        color: $primary-white;

        &.selected{
            background-color: $primary-white;
            fill: map-get($accent,"light-mode");
            color: $primary-black;
        }
    }
}

.hamburger-wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .hamburger-icon{
        fill: $primary-black;
        &.dark-mode{
            fill: $primary-white;
        }
    }
}
</style>

<script>
import Menu from '@/components/Navbar/Menu.vue';
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js';

export default {
    name: "NavBar",
    components:{
        Menu
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

        hamburgerClicked(){
            this.$refs.mainMenu.$el.classList.toggle('hidden');
        },

        selectButton(selectButton){
            let clearSelected = function(){
                let allButtons = [
                    this.$el.querySelector('#home-nb'),
                    this.$el.querySelector('#portfolio-nb'),
                    this.$el.querySelector('#hire-nb'),
                    this.$el.querySelector('#contact-nb'),

                    this.$el.querySelector('#home-mb'),
                    this.$el.querySelector('#portfolio-mb'),
                    this.$el.querySelector('#hire-mb'),
                    this.$el.querySelector('#contact-mb'),
                ]

                allButtons.forEach(function(element){
                    element.classList.remove('selected');
                })
            }.bind(this)
            if(selectButton === "home"){
                clearSelected();
                
                let homeButtonNav = this.$el.querySelector('#home-nb');
                homeButtonNav.classList.add('selected');

                let homeButtonMenu = this.$el.querySelector('#home-mb');
                homeButtonMenu.classList.add('selected');

            } else if(selectButton === "portfolio"){
                clearSelected();
                
                let portfolioButtonNav = this.$el.querySelector('#portfolio-nb');
                portfolioButtonNav.classList.add('selected');

                let portfolioButtonMenu = this.$el.querySelector('#portfolio-mb');
                portfolioButtonMenu.classList.add('selected');

            }else if(selectButton === "hire"){
                clearSelected();
                
                let hireButtonNav = this.$el.querySelector('#hire-nb');
                hireButtonNav.classList.add('selected');

                let hireButtonMenu = this.$el.querySelector('#hire-mb');
                hireButtonMenu.classList.add('selected');

            }else if(selectButton === "contact"){
                clearSelected();
                
                let contactButtonNav = this.$el.querySelector('#contact-nb');
                contactButtonNav.classList.add('selected');

                let contactButtonMenu = this.$el.querySelector('#contact-mb');
                contactButtonMenu.classList.add('selected');
            }
        },

        toDarkMode(){
            let navBar = this.$el; //this is super dangerous and may break in the future easily
            navBar.classList.add('dark-mode');

            let iconBoxes = this.$el.querySelectorAll('.icon-box');
            iconBoxes.forEach(function(element){
                element.classList.add('dark-mode');
            });

            let hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
            hamburgerMenuIcon.classList.add('dark-mode');

            let hamburgerMenu = document.getElementById('hamburger-menu');
            hamburgerMenu.classList.add('dark-mode');
        },
        toLightMode(){
            let navBar = this.$el.querySelector('.nav-bar');
            navBar.classList.remove('dark-mode');

            let iconBoxes = this.$el.querySelectorAll('.icon-box');
            iconBoxes.forEach(function(element){
                element.classList.remove('dark-mode');
            });

            let hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
            hamburgerMenuIcon.classList.remove('dark-mode');
            
            let hamburgerMenu = document.getElementById('hamburger-menu');
            hamburgerMenu.classList.remove('dark-mode');
        },
    },
    mounted(){
        this.checkDevice();
        window.addEventListener("resize",this.checkDevice.bind(this));

        this.selectButton('home');

        this.toDarkMode();
    }
}
</script>

