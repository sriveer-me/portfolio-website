export function generateNavObserver(observerMain){
    let observer = null;
    
    let generate = function(){
        //assuming navBar is 75pixels .. there is no reason to assume this and the code will likely break in the future
        let observerMarginBottom = window.innerHeight - 75;

        observer = new IntersectionObserver(observerMain,{
            root: null,
            rootMargin: `0px 0px -${observerMarginBottom}px 0px`,
        });

        let homeSection = document.getElementById('home-section');
        let portfolioSection = document.getElementById('portfolio-section-complete');
        let hireMeSection = document.getElementById('hire-me-section-complete');
        let contactMeSection = document.getElementById('contact-me-section-complete');

        observer.observe(homeSection);
        observer.observe(portfolioSection);
        observer.observe(hireMeSection);
        observer.observe(contactMeSection);
    }

    generate();
    window.addEventListener("resize", function(){
        observer.disconnect();
        generate();
    })
}