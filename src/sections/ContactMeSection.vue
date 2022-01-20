<template>
    <section class="contact-me-section" id="contact-me-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode" id="contact-me-heading">Contact</h1>
            <h2 
                class="menu-item-text caption large-margin-top"
                id ="contact-me-sub-heading"
            >
                Please fill in the form and I will get in touch with you as soon as I am able to.
            </h2>

            <div class="grid-two-way">
                
                <div class="left">
                    <Icon size="75">
                        <LinkedinIcon />
                    </Icon>
                    <Icon size="75">
                        <DiscordIcon />
                    </Icon>
                    <FirefoxIcon width="75" height="75" />
                    <Icon size="75">
                        <GithubIcon />
                    </Icon>
                </div>
                <div class="right">
                    <form name="contact" method="POST" data-netlify="true" class="contact-form">
                        <input type="hidden" name="form-name" value="contact">

                        <div class="form-element">
                            <div>
                                <label 
                                    class="menu-item-text caption"
                                    for="name-input-field">Name
                                </label>
                            </div>
                            <div><input type="text" name="name" id="name-input-field" class="bodyText" /></div>
                        </div>
                        
                        <div class="form-element">
                            <div>
                                <label 
                                    class="menu-item-text caption"
                                    for="email-input-field">Email
                                </label>
                            </div>
                            <div><input type="email" name="name" id="email-input-field" class="bodyText" /></div>
                        </div>

                        <div class="form-element">
                            <div>
                                 <label 
                                    class="menu-item-text caption"
                                    for="message-input-field">Message
                                </label>
                            </div>
                            <div><textarea name="message" id="message-input-field" class="bodyText"></textarea></div>
                        </div>

                        <div class="buttons">
                            <button type="reset" class="menu-item-text">Reset</button>
                            <button type="submit" class="menu-item-text">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        

    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.contact-me-section{
    background-color: $primary-black;
    min-height: 70vh;
}

.grid-two-way{
    margin-top: 5vh;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "icon" "form";
    row-gap: var(--spacing-large);

    @include for-desktop-up{
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        grid-template-areas: "icon form";
    }

    width: 100%;

    .left{
        grid-area: icon;
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @include for-desktop-up{    
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            min-height: 50vh;
        }

        svg{
            color: $primary-white;
            fill: $primary-white;

            cursor: pointer;
        }
    }

    .right{
        grid-area: form;
        @include for-desktop-up{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
}

.contact-form{
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-large);

    input,textarea{
        transition: border var(--global-transition);

        width: 100%;
        background-color: $primary-white;
        border: none;
        padding: var(--spacing-normal);
        max-width: 100%;

        border: 3px solid map-get($accent,"dark-mode");

        border-radius: 5px;
    }

    input:focus,textarea:focus{
        border-color: map-get($accent,"light-mode");
        outline: none;
    }

    textarea{
        height: 10vh;
    }

    .buttons{
        display: flex;
        column-gap: var(--spacing-large);
    }

    button{
        background-color: $primary-white;
        flex: 1 1 100%;

        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
}

</style>

<script>
import { Icon } from '@vicons/utils';
import LinkedinIcon from '@vicons/fa/Linkedin';
import DiscordIcon from '@vicons/fa/Discord';
import GithubIcon from '@vicons/fa/Github';
import FirefoxIcon from '@/components/Icons/FirefoxIcon.vue';

export default {
    name: "Conatct-Me-Section",
    components:{
        Icon,
        LinkedinIcon,
        DiscordIcon,
        GithubIcon,
        FirefoxIcon
    }
}
</script>