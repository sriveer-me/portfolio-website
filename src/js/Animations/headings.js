function genHeadingAnimation(mainHeading,subHeading){
    let container = [mainHeading, subHeading];

    let tlm = new TimelineMax({paused: true}); //eslint-disable-line
    tlm.staggerFrom(container,0.5,{
        y: 50,
        opacity: 0,
        ease: Power1.easeOut //eslint-disable-line
    },0.25);

    return tlm;
}

let observer = null;
let timelines = {};

function observerMain(events,observer){ //eslint-disable-line
    events.forEach(function(event){
        if(event.isIntersecting === true){
            console.log(event.target.id)
            timelines[`${event.target.id}`].play();
        }
        else{
            timelines[`${event.target.id}`].reverse();
        }
    });
}
export function initHeadingObserver(){
    observer = new IntersectionObserver(observerMain,{
        root: null,
        threshold: 0.7
    });

    let portfolioHeading = document.getElementById('portfolio-hero-heading');
    let portfolioSubHeading = document.getElementById('portfolio-hero-sub-heading');

    let hireMeHeading = document.getElementById('hire-me-heading');
    let hireMeSubHeading = document.getElementById('hire-me-sub-heading');

    let contactMeHeading = document.getElementById('contact-me-heading');
    let contactMeSubHeading = document.getElementById('contact-me-sub-heading');
    
    observer.observe(portfolioHeading);
    // observer.observe(portfolioSubHeading);

    observer.observe(hireMeHeading);
    // observer.observe(hireMeSubHeading);

    observer.observe(contactMeHeading);
    // observer.observe(contactMeSubHeading);

    timelines[`${portfolioHeading.id}`] = genHeadingAnimation(portfolioHeading,portfolioSubHeading);
    timelines[`${hireMeHeading.id}`] = genHeadingAnimation(hireMeHeading,hireMeSubHeading);
    timelines[`${contactMeHeading.id}`] = genHeadingAnimation(contactMeHeading,contactMeSubHeading);
}