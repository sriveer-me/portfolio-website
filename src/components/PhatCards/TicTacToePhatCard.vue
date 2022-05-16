<template>
    <PhatProjectCard 
        title="AI Driven Tic-tac-toe"
        :tags="[
            {
                name: 'Godot',
                image: require('@/assets/images/godot-logo.png')
            },
            {
                name: 'C',
                image: require('@/assets/images/c-logo.png')
            },
            {
                name: 'C++',
                image: require('@/assets/images/cpp-logo.png')
            },
            {
                name: 'C#',
                image: require('@/assets/images/c-sharp-logo.png')
            },
            {
                name: 'AI',
                image: require('@/assets/images/ai-logo.png')
            }
        ]"
        :images="[
            require('@/assets/images/ai-tic-tac-toe-1.png'),
            require('@/assets/images/ai-tic-tac-toe-2.png'),
            require('@/assets/images/ai-tic-tac-toe-3.png'),
            require('@/assets/images/ai-tic-tac-toe-4.png'),
            require('@/assets/images/ai-tic-tac-toe-5.png'),
            require('@/assets/images/ai-tic-tac-toe-6.png'),
        ]"
    >
       <template #project-description-heading>
           This Desktop App which was designed to be run on Windows, Mac and Linux was written with the help of a few SVG's coupled with the powerful 2D renderer and Event System of the Godot Video Game Engine.
        </template>

        <template #project-description-list>
            <li>
                <p class="bodyText">
                    The <a class="link" href="https://www.javatpoint.com/mini-max-algorithm-in-ai">Mini-Max Algorithm</a> used to write the Artificial Intelligence, is ideally suited for a game such as Tic Tac Toe which can contain only 255168 possible combinations of the board at the start.
                </p>
            </li>
            <li>
                <p class="bodyText">
                    The Player is allowed the first move in the game as this is the only way to reliably win the game against this <a class="link" href="https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games">Artificial Intelligence</a> which only makes the most optimal moves.
                </p>
            </li>
            <li>
                <p class="bodyText">
                    Allowing the player to take the first move cuts down exponentially on the possibilities this game can play out in, allowing the algorithm to run much faster due to lesser computation required.
                </p>
            </li>
            <li>
                <p class="bodyText">
                    The <a class="link" href="https://docs.godotengine.org/en/stable/tutorials/ui/index.html">UI Tooling in Godot</a> offers a platform independent way to design the front-end while also allowing the user to harness the power of a powerful video game engine.
                </p>
            </li>
        </template>

        <template #sticker-box>
            <GodotIcon style="width: 64px; height: 64px;"/>
            <Icon size="64" color="#262525">
                <ChessBoard />
            </Icon>
            <Icon size="64" color="#262525">
                <AccountTreeSharp />
            </Icon>
        </template>
    </PhatProjectCard>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

li{
    margin-top: var(--spacing-normal);
}
</style>

<script>
import PhatProjectCard from '@/components/PhatProjectCard';

import { Icon } from '@vicons/utils'

import GodotIcon from '@/components/Icons/GodotIcon.vue'; 
import ChessBoard from '@vicons/fa/ChessBoard';
import AccountTreeSharp from '@vicons/material/AccountTreeSharp';

export default {
    name: "TicTacToePhatCard",
    components:{
        PhatProjectCard,

        Icon,
        GodotIcon,
        ChessBoard,
        AccountTreeSharp
    }
}
</script>