import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'; //eslint-disable-line

let initDesktopFlag = false;
let initDesktopTimeline = null
let desktopTimeline = null;
let desktopScrollTimeline = null;

let initMobileTabletFlag = false;
let initMobileTabletTimeline = null;
let mobileTabletTimeline = null;

function generateDesktop(){
    if(isDesktop() === false){
        console.log('cannot initialize the desktop version of the homePage timeline when the device is not desktop');
        return;
    }
    if(initDesktopFlag === true)
        return;
    
    let headings = [
        document.getElementById('home-subheading'),
        document.getElementById('home-heading-1'),
        document.getElementById('home-heading-2'),
        document.getElementById('home-heading-3')
    ];

    let svg = document.getElementById('home-svg');

    let icons = [
        document.getElementById('home-linkedin'),
        document.getElementById('home-discord'),
        document.getElementById('home-firefox'),
        document.getElementById('home-github')
    ]

    let scrollIcon = document.getElementById("scroll-icon");
    let scrollInnerArrow = document.getElementById('scroll-inner-arrow');


    desktopTimeline = new TimelineMax({ //eslint-disable-line
        paused: true
    });
    desktopTimeline
        .staggerTo(headings,1,{
            y:0,
            opacity: 1
        },0.5,"first-phase")
        .to(svg,2,{
            scaleX: 1
        },"first-phase")
        .staggerTo(icons,1,{
            opacity: 1
        },0.5,"first-phase")
        .to(scrollIcon,0.5,{
            y:0,
            opacity: 1
        },"third-phase");

    initDesktopTimeline = new TimelineMax({ //eslint-disable-line
        paused: true
    });
    initDesktopTimeline
        .staggerTo(headings,0,{
            y:250,
            opacity: 0
        },0)
        .to(svg,0,{
            scaleX: 0
        })
        .staggerTo(icons,0,{
            opacity: 0
        },0)
        .to(scrollIcon,0,{
            y:100,
            opacity: 0
        });
    
    desktopScrollTimeline = new TimelineMax({ //eslint-disable-line
        paused:true,
        yoyo:true,
        repeat: -1
    });

    desktopScrollTimeline.
        to(scrollInnerArrow,0.75,{
            y: 5
        });
    
    initDesktopFlag = true;
}
function generateMobileTablet(){
    if(isDesktop() === true){
        console.log('cannot initialize the mobile/tablet version of the homePage timeline when the device is not either tablet or mobile');
        return;
    }
    if(initMobileTabletFlag === true)
        return;

    initMobileTabletTimeline = new TimelineMax({ //eslint-disable-line
        paused: true
    });
    mobileTabletTimeline = new TimelineMax({ //eslint-disable-line
        paused: true
    });


    let headings = [
        document.getElementById('home-subheading'),
        document.getElementById('home-heading-1'),
        document.getElementById('home-heading-2'),
        document.getElementById('home-heading-3')
    ];

    let svg = document.getElementById('home-svg');

    let iconsFromLeft = [
        document.getElementById('home-linkedin-box'),
        document.getElementById('home-firefox-box'),
    ];

    let iconsFromRight = [
        document.getElementById('home-discord-box'),
        document.getElementById('home-github-box')
    ]
     
    mobileTabletTimeline
        .staggerFrom(headings,1,{
            y:250,
            opacity: 0
        },0.5,"first-phase")
        .from(svg,2,{
            scaleX: 0
        },"first-phase")
        .staggerFrom(iconsFromLeft,0.5,{
            opacity: 0,
            x: -250
        },0,"third-phase")
        .staggerFrom(iconsFromRight,0.5,{
            opacity: 0,
            x: 250
        },0,"fourth-phase");

    initMobileTabletTimeline
        .staggerTo(headings,0,{
            y:250,
            opacity: 0
        },0.5)
        .to(svg,0,{
            scaleX: 0
        })
        .staggerTo(iconsFromLeft,0,{
            opacity: 0,
            x: -250
        },0)
        .staggerTo(iconsFromRight,0,{
            opacity: 0,
            x: 250
        },0);
    
    initMobileTabletFlag = true;
}

function observerMain(events,observer){ //eslint-disable-line
    events.forEach(function(event){
        if(event.target === document.getElementById('home-section')){
            if(event.isIntersecting === true){
                if(isDesktop()){
                    desktopTimeline.play().then(function(){
                        desktopScrollTimeline.play();
                    })
                }
                else mobileTabletTimeline.play();
                observer.unobserve(event.target);
            }
        } else{
            console.log("this target is not expexted to be observed by home section observer");
            console.log(event.target)
        } 
    })
}

let homeObserver = null;
function initializeHomeObserver(){
    if(homeObserver !== null)
        homeObserver.disconnect();
    
    homeObserver = new IntersectionObserver(observerMain,{
        root: null,
        threshold: 0.7
    });

    let homeSection = document.getElementById('home-section');
    homeObserver.observe(homeSection);
}


export function main(){
    let mainFunction = function(){
        if(isDesktop()){
            generateDesktop();
            initDesktopTimeline.play();
            initializeHomeObserver();
        }
        else{
            generateMobileTablet();
            initMobileTabletTimeline.play();
            initializeHomeObserver();
        } 
    }

    mainFunction();
    window.addEventListener("resize",mainFunction);
}