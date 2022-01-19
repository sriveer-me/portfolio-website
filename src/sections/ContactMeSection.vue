<template>
    <section class="contact-me-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode">Contact</h1>
            <h2 
                class="menu-item-text caption large-margin-top"
            >
                Please fill in the form and I will get in touch with you as soon as I am able to.
            </h2>

            <div class="grid-two-way">
                
                <div class="left">
                    
                </div>
                <div class="right">
                    <form name="contact" action="POST" data-netlify="true" class="contact-form">
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
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "icon form";

    width: 100%;

    .left{
        grid-area: icon;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .right{
        grid-area: form;
    }
}

.contact-form{
    margin-top: 5vh;

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