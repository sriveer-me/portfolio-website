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
    let avatarTags = [...projectCard.querySelectorAll('.avatar-tag')];
    let rightGroup = projectCard.querySelectorAll('.right > *');
    let projectDescriptionList = projectCard.querySelectorAll('.project-description-list > *');

    leftGroup = [...leftGroup];
    leftGroup = leftGroup.filter(function(el){
        if(el.classList.contains('body-heading'))
            return false;
        
        if(el.classList.contains('action-group'))
            return false;
        
        if(el.classList.contains('tag-container'))
            return false;

        return true;
    });
    leftGroup = [...leftGroup];

    rightGroup =[...rightGroup];
    rightGroup= rightGroup.filter(function(el){
        if(el.classList.contains('project-description-list'))
            return false;
        
        if(el.classList.contains('sticker-box'))
            return false;

        return true;
    });

    rightGroup = [...rightGroup, ...projectDescriptionList];

    
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
        tlm.from(projectCard,1,{
            x: '100%',
            ease: Power4.EaeInOut //eslint-disable-line
        });
    }
    
    //step-2 light everything up one at a time
    tlm.staggerFromTo(leftGroup,2,{
        opacity: 0
    },
    {
        opacity: 1,
        ease: Power4.EaeInOut //eslint-disable-line

    },1,"lightUpElements");

    tlm.staggerFromTo(rightGroup,1,{
        opacity: 0
    },
    {
        opacity: 1,
        ease: Power4.EaeInOut //eslint-disable-line
    },0.25,"lightUpElements");

    tlm.staggerFromTo(avatarTags,0.5,{
        scale: 0
    },
    {
        scale: 1,
        ease: "elastic.out(1, 0.3)" //eslint-disable-line
    },0.25);


    //cache the timeline
    cardTimelines[title] = tlm;
    
    //return the result out
    return cardTimelines[title];
}