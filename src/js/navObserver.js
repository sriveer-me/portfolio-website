export function generateNavObserver(observerMain){
    let observer = new IntersectionObserver(observerMain,{
        rootMargin: "-40% 0px"
    });

    let homeSection = document.getElementById('home-section');
    let portfolioSection = document.getElementById('portfolio-section');
    let hireMeSection = document.getElementById('hire-me-section');
    let contactMeSection = document.getElementById('contact-me-section');

    observer.observe(homeSection);
    observer.observe(portfolioSection);
    observer.observe(hireMeSection);
    observer.observe(contactMeSection);

    return observer;
}