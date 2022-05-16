<template>
    <div class="loader-wrapper">
       <svg viewBox="0 0 120 120" fill="#000">
            <g class="g1">
                <rect class="r1" x="30" y="30" width="60" height="60" />  
                <rect  class="big" x="81" y="81" width="8" height="8" />  
                <rect class="r_ol" x="31" y="31" width="8" height="8" />  
                <rect  class="r_or" x="81" y="31" width="8" height="8" />  
                <rect class="r_ul"  x="31" y="81" width="8" height="8" />  
                <xrect  class="r_ur" x="81" y="81" width="8" height="8" />
            </g>
        </svg>
    </div>
</template>

<style lang="scss">
body{
    background: #DDD5D5;    
}
</style>

<style lang="scss" scoped>
svg {
    stroke:none;
    fill: #DDD5D5;  
    

    width: 95vw;
    height: 95vh;
    margin: 0;
    padding: 0;
}
.r1 {
    fill:#262525;
}
.big {
    transform:  scale(5) translate( calc( -9px / 5  ) , calc( -9px / 5  ) );
    transform-origin:100% 100%;
    transform-box:fill-box;
}
.r_ol {
    transform-origin:0% 0%;
    transform-box:fill-box;
}

svg {
    .r_ol {
        animation: small2big 4s ease-in-out infinite;
    }
    .big {
        animation: big2small 4s ease-in-out infinite;
    }
    .r_or {
        animation: or2ol 4s ease-in-out infinite;
    }
    .r_ul {
        animation: ul2ol 4s ease-in-out infinite;
    }
    .g1 {
        animation: rot 8s ease infinite;
    }
}
@keyframes or2ol {
    0% {
        transform: scale(1) translate( 0 );
    }
    25% {
        transform: scale(1) translate( 0 );
    }
    50% {
        transform: scale(1) translate( -50px,0 );
    }
    50.001% {
        transform: scale(1) translate( 0 );
    }
}
@keyframes ul2ol {
    0% {
        transform: scale(1) translate( 0 );
    }
    75% {
        transform: scale(1) translate( 0 );
    }
    100% {
        transform: scale(1) translate( 0,-50px );
    }

}

@keyframes small2big {
    0% {
        transform: scale(1) translate( 0 );
    }
    25% {
        transform: scale(5) translate( calc( 9px / 5  ) , calc( 9px / 5  ) );
    }
    50% {
        transform: scale(5) translate( calc( 9px / 5  ) , calc( 9px / 5  ) );
    }
    50.001% {
        transform: scale(1) translate( 0 );
    }
    75% {
        transform: scale(5) translate( calc( 9px / 5  ) , calc( 9px / 5  ) );
    }
    100% {
        transform: scale(5) translate( calc( 9px / 5  ) , calc( 9px / 5  ) );
    }
}
@keyframes big2small {
    0% {
        transform: scale(5) translate( calc( -9px / 5  ) , calc( -9px / 5  ) );
    }
    25% {
        transform: scale(1) translate( 0 );
    }
    50% {
        transform: scale(1) translate( 0,-50px );
    }
    50.001% {
        transform: scale(5) translate( calc( -9px / 5  ) , calc( -9px / 5  ) );
    }
    75% {
        transform: scale(1) translate( 0 );
    }
    100% {
        transform: scale(1) translate( -50px,0px );
    }
}

@keyframes rot {
    0% {
        transform: rotate(45deg);
    }
    
    12.5% {
        transform: rotate(45deg);
    }
    25% {
        transform: rotate(135deg);
    }
    
    37.5% {
        transform: rotate(135deg);
    }
    50% {
        transform: rotate(225deg);
    }
    
    62.5% {
        transform: rotate(225deg);
    }
    75% {
        transform: rotate(315deg);
    }
    87.5% {
        transform: rotate(315deg);
    }
    100% {
        transform: rotate(405deg);
    }
}

.g1 {
    transform-origin:50% 50%;
    transform: rotate(45deg);
}
* {
    transition:all 1s ease-in-out;
}
</style>

<script>
export default {
    name: "Loading-Screen"
}
</script>