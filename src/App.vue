<template>
<div class="app">
    <Navbar  ref="nav"/>

    <HomeSection />

    <div id="portfolio-section-complete">
        <SectionGap  class="dark-mode"/>
        <PortfolioSection />
    </div>

    <div id="hire-me-section-complete">
        <SectionGap />
        <HireMeSection />
    </div>

    <div id="contact-me-section-complete">
        <SectionGap class="dark-mode" />
        <ContactMeSection />
    </div>
</div>
</template>

<script>
import {generateAnimation} from '@/js/Animations/main.js';
import {generateNavObserver} from '@/js/navObserver.js';

import HomeSection from '@/sections/HomeSection.vue';
import PortfolioSection from '@/sections/PortfolioSection.vue';
import HireMeSection from '@/sections/HireMe.vue';
import ContactMeSection from '@/sections/ContactMeSection.vue';

import SectionGap from '@/sections/SectionGap.vue';

import Navbar from '@/components/Navbar/Navbar.vue';

export default {
    name: 'App',
    components:{
        HomeSection,
        PortfolioSection,
        HireMeSection,
        ContactMeSection,

        Navbar,

        SectionGap
    },
    mounted(){
        console.log('app started');
        setTimeout(function(){
            generateAnimation();
        },0);

        let navObserver = function(events){
            events.forEach(function(event){
                if(event.isIntersecting === true){
                    if(event.target.id === "home-section"){
                        this.$refs.nav.selectButton("home");
                        this.$refs.nav.toDarkMode();
                    }
                    else if(event.target.id === "portfolio-section-complete"){
                        this.$refs.nav.selectButton("portfolio");
                        this.$refs.nav.toDarkMode();
                    }
                    else if(event.target.id === "hire-me-section-complete"){
                        this.$refs.nav.selectButton("hire");
                        this.$refs.nav.toLightMode();
                    }
                    else if(event.target.id === "contact-me-section-complete"){
                        this.$refs.nav.selectButton("contact");
                        this.$refs.nav.toDarkMode();
                    }
                    else{
                        console.log('nav observer in app.vue intersected something unplanned');
                        console.log(event.target)
                    }
                }
            }.bind(this))
        }.bind(this)
        generateNavObserver(navObserver);
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/setting' as *;

.wrapper{
    max-width: 1400px;
    margin: 0 auto; 
}
</style>
