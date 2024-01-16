<template>
    <div id="filtroSeries">
        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do título">
        
        <ul>
            <li class="lista-char-item" v-for="character of filtroSerie">
                <div>
                    {{character.text}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                filtro: '',
                characters: [
                    { character: 'Sarah', titulo: 'Chuck' },
                    { character: 'Dan', titulo: 'Lucifer' },
                    { character: 'Dembe', titulo: 'The Blacklist' },
                ]
            }
        },
        computed: {
            filtroSerie(){
                if(this.filtro){
                    return this.titulo
                }
                else {
                    return this.character
                }
            }
        }
    }
</script>

<style>
    #filtroSeries {
        width: 100%;
        margin: 20px 8px;  
    }

    input[type=search] {
        background: aqua;
    }
</style>