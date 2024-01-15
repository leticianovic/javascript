<template>
    <div id="serie2">
        <h1> 
            {{ type }} 
        </h1>

        <h2 v-bind:title="resumo">
            <span v-if="seen">{{ id }}</span> 
            {{ name }}
        </h2>

        <ol>
            <li v-for="char in character">
                {{ char.charT }}               
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 3,
                name: 'The Blacklist',
                resumo: 'Após se entregar à polícia, um brilhante fugitivo oferece ajuda ao FBI, mas apenas se a novata Elizabeth Keen for sua parceira.',
                seen: false,
                character: [
                    { charT: 'Raymond Reddington' },
                    { charT: 'Elizabeth Keen' },
                    { charT: 'Dembe Zuma'}
                ]
            }
            
        }
    };
</script>