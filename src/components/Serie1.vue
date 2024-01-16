<template>
    <div id="serie1">
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
                id: 1,
                name: 'Chuck',
                resumo: 'Chuck Bartowski é um homem comum que trabalha em uma loja de informática. Um dia, ele abre um e-mail que foi codificado com segredos vitais do governo, provocando uma transferência massiva de dados sigilosos em seu cérebro.',
                seen: false,
                character: [
                    { text: 'Chuck' },
                    { text: 'Sarah' },
                    { text: 'John' }
                ]
            }
            
        }
    };
</script>