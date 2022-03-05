export function scrollToHomeSection(){
    document.getElementById("home-section").scrollIntoView({behavior: "smooth", block: "end"});
}
export function scrollToPortfolioSection(){
    document.getElementById("portfolio-section-complete").scrollIntoView({behavior: "smooth", block: "start"});
}
export function scrollToHireMeSection(){
    document.getElementById("hire-me-section-complete").scrollIntoView({behavior: "smooth", block: "start"});
}
export function scrollToContactSection(){
    document.getElementById("contact-me-section-complete").scrollIntoView({behavior: "smooth", block: "start"});
}