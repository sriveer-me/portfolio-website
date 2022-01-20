import {main} from '@/js/Animations/HomePage.js';
import {initHeadingObserver} from '@/js/Animations/headings.js';
import {contactAnimationMain} from '@/js/Animations/contactPage.js'

export function generateAnimation(){
    main();
    initHeadingObserver();
    contactAnimationMain();
}