function main(events){
    console.log(events)
}

export function genObserver(){ 
    let observer = new IntersectionObserver(main,{
        root: null,
        threshold: 0.7,
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