import {playHomePageAnimationDesktop,playHomePageAnimationMobileTablet} from '@/js/Timelines/HomePage.js';
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'; //eslint-disable-line

function main(events,observer){
    events.forEach(function(event){
        if(event.isIntersecting === true){
            
            if(event.target === document.getElementById('home-section')){
                console.log('home-section intersected');

                if(isDesktop())
                    playHomePageAnimationDesktop();
                else  playHomePageAnimationMobileTablet();
            }
            else if(event.target === document.getElementById('portfolio-section')){
                console.log('portfolio-section intersected');
            }
            else if(event.target === document.getElementById('hire-me-section')){
                console.log('hire-me-section intersected');
            }
            else if(event.target === document.getElementById('contact-me-section')){
                console.log('contact-me-section intersected')
            }
            else{
                console.log('unhandled element intersected.. ')
                console.log(event.target)
            }

            observer.unobserve(event.target);
        }
    })
}

export function genObserver(){
    let observer = new IntersectionObserver(main,{
        root: null
    });

    let homeSection = document.getElementById('home-section');
    let portfolioSection = document.getElementById('portfolio-section');
    let hireMeSection = document.getElementById('hire-me-section');
    let contactSection = document.getElementById('contact-me-section');

    observer.observe(homeSection);
    observer.observe(portfolioSection);
    observer.observe(hireMeSection);
    observer.observe(contactSection);
}