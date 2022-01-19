export function playHomePageAnimationDesktop(){
    let homeAnimationTimeline = new TimelineMax({ //eslint-disable-line
        paused: true
    });

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

    homeAnimationTimeline
        .staggerFrom(headings,1,{
            y:250,
            opacity: 0
        },0.5,"first-phase")
        .from(svg,2,{
            scaleX: 0
        },"second-phase")
        .staggerFrom(icons,1,{
            opacity: 0
        },0.5,"second-phase")
        .from(scrollIcon,0.5,{
            y:100,
            opacity: 0
        },"third-phase");
    
    homeAnimationTimeline.play().then(function(){
        let scrollInnerArrow = document.getElementById('scroll-inner-arrow');
        let scrollAnimationTimeLine = new TimelineMax({ //eslint-disable-line
            paused:true,
            yoyo:true,
            repeat: -1
        }) 

        scrollAnimationTimeLine.
            to(scrollInnerArrow,0.75,{
                y: 5
            });
        
        scrollAnimationTimeLine.play();
    });
}

export function playHomePageAnimationMobileTablet(){
    let homeAnimationTimeline = new TimelineMax({ //eslint-disable-line
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




    homeAnimationTimeline
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
    
    homeAnimationTimeline.play();
}
