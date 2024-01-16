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
              {{ char.text }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 2,
                name: 'Lucifer',
                resumo: 'Entediado com a vida nas trevas, Lucifer se muda para Los Angeles, abre um bar e faz amizade com uma investigadora da polícia.',
                seen: false,
                character: [
                    { text: 'Lucifer' },
                    { text: 'Chloe' },
                    { text: 'Dan' }
                ]
            }
        }
    };
</script>