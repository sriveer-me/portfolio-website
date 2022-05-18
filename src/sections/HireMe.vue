<template>
    <section class="hire-me-section" id="hire-me-section">
        <div class="wrapper">
            <h1 class="hero-text section-heading" id="hire-me-heading">Hire Me!</h1>
            <h2 class="sub-heading large-margin-top hero-sub-heading" id="hire-me-sub-heading">My Specializations Dictate The Kind Of Work I Can Do An Exceptional Job In. </h2>
        </div>
        
        <div class="three-way-grid">
            <div class="left grid-cell">
                <Icon class="icon" :size="iconSize">
                    <GameController />
                </Icon>
                <p class="bodyText align-center">
                    <strong>Passion towards video games from an early age drove me to master the c++ programming language.</strong> 
                </p>
                <ul class="skill-description-list">
                    <li>
                        <p class="bodyText align-center">
                            The Android app store game <strong>Air Shooter DX</strong> was written and published by a small core team which was headed by me.
                        </p>
                    </li>
                    <li>
                        <p class="bodyText align-center">
                            I find the <strong>archietecture</strong> of video game engines quite fascinating and as such have dedicated to learn the intricacies and operating knowledge of atleast one video game game engine namely <strong>Godot</strong>.
                        </p>
                    </li>
                </ul>
                <div class="sticker-box">
                    <GodotIcon class="icon" />
                    <Icon class="icon" :size="64">
                        <Android />
                    </Icon>
                </div>
            </div>
            <div class="center grid-cell">
                <Icon class="icon" :size="iconSize">
                    <WebFilled />
                </Icon>
                <p class="bodyText align-center">
                    <strong>I am a proficient and seasoned <strong>Application Developer</strong> and am adept in using a variety of toolkits and frameworks to achieve my ends.</strong> 
                </p>
                <ul class="skill-description-list">
                    <li>
                        <p class="bodyText align-center">
                            My day job for <AvatarTag :image="require('@/assets/images/hexagon-logo.jpg')" name="Hexagon" /> means working with a <strong>C#</strong> client based on <strong>.Net</strong> and <strong>WPF</strong> along with business logic written in <strong>C++</strong>.
                        </p>
                    </li>
                    <li>
                        <p class="bodyText align-center">
                            Being very adept in the ways of Vue and <strong>Rest Api</strong> means, I can divide and conquer (or defeat in detail) any problem regarding a full stack application.      
                        </p>
                    </li>
                    <li>
                        <p class="bodyText align-center">
                            I take great pain to learn esoteric (slightly less frequently used) <strong>JavaScript</strong> as I plan on maintaining a diverse range of tools and solutions for any problem at hand.
                        </p>
                    </li>
                </ul>
                <div class="sticker-box full-width">
                    <Icon class="icon" :size="64">
                        <LogoVue />
                    </Icon>
                    <Icon class="icon" :size="64">
                        <Microsoft />
                    </Icon>
                    <Icon class="icon" :size="64">
                        <LogoJavascript />
                    </Icon>
                </div>
            </div>
            <div class="right grid-cell">
                <Icon class="icon" :size="iconSize">
                    <Cloud />
                </Icon>
                <p class="bodyText align-center">
                    <strong>I am an aspiring <strong>Cloud Engineer</strong> and am working hard to ingratiate into the ethos of said community.</strong> 
                </p>
                <ul class="skill-description-list">
                    <li>
                        <p class="bodyText align-center">
                            Preparing for and passing my <strong>Amazon Certified Cloud Practioner(CLF-C01)</strong> exam has broadening my understanding of the cloud and its role in the world. <AvatarTag :image="require('@/assets/images/cloud-practitioner-logo.png')" name="Amazon Certified Cloud Practioner(CLF-C01)" gotoLink="https://www.certmetrics.com/amazon/public/download_e_cert.aspx?cert=78E85E9A8F2433FEE5D56AAD8CC82009OD4BF9E5DD8652F3C9FDF761B6BE4A9C8" :nameWrappable="true"/>
                        </p>
                    </li>
                    <li>
                        <p class="bodyText align-center">
                            <strong>Heroku</strong> has personally been my platform of choice for the past few years as is evidenced by the fact that a multiplicity of my projects are hosted here on the said platform.    
                        </p>
                    </li>
                </ul>
                <div class="sticker-box full-width">
                    <Icon class="icon" :size="64">
                        <Aws />
                    </Icon>
                    <HerokuIcon />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.hire-me-section{
    background-color: $primary-white;
    padding-bottom: var(--spacing-large);
    max-width: 1920px; //this is because the section looked ugly in a 4k monitor.. In future though I must seriously think about bumping up font sizes in gneral for a higher resolution

    @include for-tablet-portrait-up{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
} 

.three-way-grid{
    margin-top: calc(var(--spacing-large) * 2);

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

.sticker-box{
    width: 50%;
    &.full-width{
        width: 100%;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    svg{
        width: 64px;
        height: 64px;
    }
}

.skill-description-list{
    list-style: none;
    padding-left: 0;
    @include for-desktop-up{
        list-style: square;
        padding-left: unset; //initial probably would have been fine as well
    }

    li{
        margin-top: var(--spacing-normal)
    }
}
</style>

<script>
import { Icon } from '@vicons/utils'
import GameController  from '@vicons/ionicons5/GameController';
import WebFilled  from '@vicons/material/WebFilled';
import GodotIcon from '@/components/Icons/GodotIcon.vue';
import Android from '@vicons/ionicons4/LogoAndroid';

import LogoJavascript  from '@vicons/ionicons5/LogoJavascript';
import Microsoft from '@vicons/fa/Microsoft';
import LogoVue from '@vicons/ionicons5/LogoVue';

import Cloud  from '@vicons/fa/Cloud';
import Aws  from '@vicons/fa/Aws';
import HerokuIcon from '@/components/Icons/HerokuIcon.vue';

import AvatarTag from '@/components/AvatarTag.vue';

import {isMobile, isTablet, isDesktop} from '@/js/breakpoints.js';

export default {
    name: "HireMe Section",
    components:{
        Icon,
        GameController,
        WebFilled,
        GodotIcon,
        Android,
        LogoJavascript,
        LogoVue,
        Microsoft,

        Cloud,
        Aws,
        HerokuIcon,

        AvatarTag
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