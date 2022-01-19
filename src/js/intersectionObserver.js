function main(events,observer){
    events.forEach(function(event){
        if(event.isIntersecting === true){
            console.log(event.target)
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