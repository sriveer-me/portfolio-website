<template>
    <ul class="menu hidden" id="hamburger-menu">
        <li class="icon-box" id="home-mb" @click="homeButtonClicked">
            <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.5464 18.067L18.7981 0.554277C18.1349 -0.184759 16.8611 -0.184759 16.1979 0.554277L0.449671 18.067C0.222995 18.3184 0.0742065 18.6304 0.0213967 18.965C-0.0314131 19.2995 0.0140312 19.6422 0.152204 19.9513C0.432173 20.5835 1.0586 20.9898 1.74978 20.9898H5.24938V33.2487C5.24938 33.7132 5.43374 34.1586 5.76189 34.4871C6.09004 34.8155 6.53511 35 6.99919 35H12.2486C12.7127 35 13.1577 34.8155 13.4859 34.4871C13.8141 34.1586 13.9984 33.7132 13.9984 33.2487V26.2437H20.9976V33.2487C20.9976 33.7132 21.182 34.1586 21.5101 34.4871C21.8383 34.8155 22.2834 35 22.7474 35H27.9968C28.4609 35 28.906 34.8155 29.2341 34.4871C29.5623 34.1586 29.7466 33.7132 29.7466 33.2487V20.9898H33.2463C33.5851 20.9913 33.9171 20.894 34.2017 20.7099C34.4863 20.5258 34.7112 20.2628 34.8491 19.9529C34.9869 19.6431 35.0316 19.2998 34.9779 18.9649C34.9241 18.63 34.7742 18.318 34.5464 18.067Z" />
            </svg>
            <h2 class="menu-item-text">Home</h2>  
        </li>

        <li class="icon-box" id="portfolio-mb" @click="portfolioButtonClicked">
            <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4473 0L2.86242 4.96125C2.86242 4.96125 0 4.86836 0 8.37644C0 9.82422 0.5565 10.9032 0.5565 10.9032L12.4297 33.816C13.5648 35.9026 15.9757 34.5961 15.9757 34.5961L34.1822 24.362L33.5008 23.5644C33.3404 22.6066 33.2471 20.8331 34.3741 19.5125C34.3992 19.4829 34.4038 19.4425 34.4172 19.4055L35 19.1356L18.4473 0ZM4.67892 5.77903L18.102 1.50635L32.928 18.6456L15.8999 26.5434L4.67892 5.77903ZM32.907 21.6334C32.8691 21.943 32.8498 22.2445 32.8539 22.5272L20.902 29.0729L32.8965 23.1996C32.9082 23.3066 32.9187 23.4143 32.9333 23.5112L17.612 32.0499L33.054 24.148L33.0633 24.1897L15.9757 33.6215C15.9676 33.6276 15.1877 34.1061 14.406 34.1061C13.6337 34.1061 13.1524 33.6484 12.9331 32.7075C12.369 30.2898 15.5738 28.9194 15.6222 28.8992L33.3457 20.0516C33.2185 20.3209 33.1304 20.5948 33.0569 20.8681L21.8062 26.9789L32.907 21.6334Z"/>
                <path d="M18.9309 4.36963L7.41357 8.29905L10.2229 13.3983L22.1177 8.37241L18.9309 4.36963Z" />
            </svg>
            <h2 class="menu-item-text">Portfolio</h2>
        </li>

        <li class="icon-box" id="hire-mb" @click="hireButtonClicked">
            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512">
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2c18.8-35.4 55.6-59.8 98.5-59.8c2.4 0 4.8.4 7.1 1.1c13 4.2 26.6 6.9 40.9 6.9c14.3 0 28-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1c42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
            </svg>
            <h2 class="menu-item-text">Hire Me</h2>
        </li>

        <li class="icon-box" id="contact-mb" @click="contactButtonClicked">
            <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.5C0 22.1413 1.84374 26.5925 5.12563 29.8744C8.40752 33.1563 12.8587 35 17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 12.8587 33.1563 8.40752 29.8744 5.12563C26.5925 1.84374 22.1413 0 17.5 0C12.8587 0 8.40752 1.84374 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5ZM32 17.5C32 21.3456 30.4723 25.0338 27.753 27.753C25.0338 30.4723 21.3456 32 17.5 32C13.6544 32 9.96623 30.4723 7.24695 27.753C4.52767 25.0338 3 21.3456 3 17.5C3 13.6544 4.52767 9.96623 7.24695 7.24695C9.96623 4.52767 13.6544 3 17.5 3C21.3456 3 25.0338 4.52767 27.753 7.24695C30.4723 9.96623 32 13.6544 32 17.5Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C10 26.544 12.982 34 17.5 34C22.018 34 25 26.544 25 17.5C25 8.456 22.018 1 17.5 1C12.982 1 10 8.456 10 17.5ZM22 17.5C22 25.024 19.61 31 17.5 31C15.39 31 13 25.024 13 17.5C13 9.976 15.39 4 17.5 4C19.61 4 22 9.976 22 17.5Z" />
                <path d="M4.7041 8.43402L6.7161 6.21002C6.9161 6.39002 7.1341 6.57002 7.3661 6.74402C9.9081 8.64802 13.9661 9.82402 18.3961 9.82402C22.1781 9.82402 25.7001 8.97002 28.2581 7.50802C28.8741 7.15602 29.4221 6.77402 29.8961 6.36802L31.8441 8.65002C31.2241 9.18002 30.5221 9.67002 29.7481 10.11C26.7161 11.846 22.6801 12.822 18.3961 12.822C13.3521 12.822 8.6661 11.466 5.5661 9.14402C5.26802 8.92072 4.98038 8.6838 4.7041 8.43402Z"/>
                <path d="M4.7041 26.598L6.7161 28.822C6.9161 28.64 7.1341 28.462 7.3661 28.288C9.9081 26.384 13.9661 25.208 18.3961 25.208C22.1781 25.208 25.7001 26.062 28.2581 27.524C28.8741 27.876 29.4221 28.258 29.8961 28.664L31.8441 26.382C31.1925 25.8311 30.4908 25.3423 29.7481 24.922C26.7161 23.186 22.6801 22.21 18.3961 22.21C13.3521 22.21 8.6661 23.566 5.5661 25.888C5.26801 26.1113 4.98037 26.3482 4.7041 26.598Z"/>
                <path d="M1 19V16H34V19H1Z"/>
            </svg>
            <h2 class="menu-item-text">Contact</h2>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;

ul{
    transition: var(--global-transition) transform;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 0;
    margin: 0;

    position: fixed;
    height: calc(100vh - var(--nav-bar-height));
    
    background: $primary-white;
    &.dark-mode{
        background: $primary-black;
    }

    width: 50%;
    bottom: 0;
    right: 0;
    z-index: 1;

    list-style: none;

    &.hidden{
        transform: translateX(100%);
    }
}

.icon-box{
    transition: var(--global-transition) background-color,
                var(--global-transition) fill,
                var(--global-transition) color;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--spacing-large);
    padding:  var(--spacing-large) 0;
    width: 100%;

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
</style>

<script>
import {scrollToHomeSection,scrollToPortfolioSection,scrollToHireMeSection,scrollToContactSection} from '@/components/Navbar/scrollSectionsIntoView.js';

export default {
    name: "Menu",
    methods:{
        homeButtonClicked(){
            scrollToHomeSection();
        },
        portfolioButtonClicked(){
            scrollToPortfolioSection();
        },
        hireButtonClicked(){
            scrollToHireMeSection();
        },
        contactButtonClicked(){
            scrollToContactSection();
        }
    }
}
</script>