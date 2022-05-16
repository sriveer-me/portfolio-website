<template>
    <Transition leave-active-class="animate__animated animate__zoomOut position-absolute" enter-active-class="animate__animated animate__fadeIn" >
        <Suspense>
            <App />
            <template #fallback>
                <LoadingScreen />
            </template>
        </Suspense>
    </Transition>
</template>

<script>
import LoadingScreen from '@/sections/Loading.vue';

import {defineAsyncComponent} from 'vue';
const App = defineAsyncComponent(function(){
    return import('./App.vue');
});

import 'animate.css';

export default {
    name: "Main",
    components:{
        LoadingScreen,
        App
    }
}
</script>
