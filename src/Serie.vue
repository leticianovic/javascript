<template>
    <div id="serie">
        <h1> 
            {{ type }} 
        </h1>

            <br>

        <h2 v-bind:title="resumo">
            <span v-if="seen">{{ id }}</span> 
            {{ name }}
        </h2>

            <br>

        <ol>
            <li v-for="char in serie">
              {{ char.text }}
            </li>
        </ol>
    </div>
</template>

<script>
    import {series} from './series.js';

    export default {
        mixins: [series],
        data() {
            return {
                arraySeries: []
            };
        },
        created() {
            this.arraySeries = this.getSeries()
        }
    };
</script>