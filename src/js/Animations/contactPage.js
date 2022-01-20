let animation = new TimelineMax({paused: true}); //eslint-disable-line 

function genContactPageAnimation(){
    let linkedinIcon = document.getElementById('contact-linkedin-icon');
    let discordIcon = document.getElementById('contact-discord-icon');
    let firefoxIcon = document.getElementById('contact-firefox-icon');
    let githubIcon = document.getElementById('contact-github-icon');

    let icons = [linkedinIcon, discordIcon, firefoxIcon, githubIcon];
    animation.staggerFrom(icons,0.75,{
        x: -50,
        opacity: 0
    },0.25);
}

function observerMain(events){
    events.forEach(function(event){
        if(event.isIntersecting === true)
            animation.play();
        else animation.reverse();
    })
}

export function contactAnimationMain(){
    genContactPageAnimation();

    let contactIconTray = document.getElementById('contact-icon-tray');
    let observer = new IntersectionObserver(observerMain);

    observer.observe(contactIconTray);
}