let cardTimelines = {};

export function genCardTimeline(domElement,fromLeft)
{
    //get the heading of this card to use as index into the map
    let title = domElement.querySelector('.body-heading').innerHTML;

    //return if the timeline was already generated
    if(title in cardTimelines)
        return cardTimelines[title];

    //get the required elements to generate the timeline
    let projectCard = domElement.querySelector('.project-card');
    let leftGroup = projectCard.querySelectorAll('.left > *'); //eslint-disable-line
    let projectDescription = projectCard.querySelectorAll('.right > *');
    
    //remove the last element icon-box from the animatable bunch
    projectDescription = [...projectDescription];
    projectDescription = projectDescription.map(function(el){
        if(el.classList.contains('sticker-box'))
        {
            console.log('found the sticker-box');
            return;
        }
        else return el;
    });

    //assemble the timeline
    let tlm = new TimelineMax({paused: true}); //eslint-disable-line

    //step-1 the cards slide in from the left or right
    if(fromLeft === true)
    {
        tlm.from(projectCard,1,{
            x: '-100%',
            ease: Power4.EaeInOut //eslint-disable-line
        });
    }
    else
    {
        console.log('hello');
        tlm.from(projectCard,1,{
            x: '100%',
            ease: Power4.EaeInOut //eslint-disable-line
        });
    }
    
    //step-2 light everything up one at a time
    let allElements = [
        ...leftGroup, ...projectDescription
    ];

    tlm.staggerFromTo(allElements,1,{
        opacity: 0
    },
    {
        opacity: 1
    },0.25);


    //cache the timeline
    cardTimelines[title] = tlm;
    
    //return the result out
    return cardTimelines[title];
}