<template>
<section>

    <div id="demo">
        <demo-grid :dataRows="paises" :columns="columns" :filter-key="searchQuery"  @onEventoComponente="ejecuteEvento()"/>
    </div>
    <div>

        <h1 class="title">
            pruebavuejs
        </h1>

        <button @click="getPaises" >Traiga ya carajo!</button>

        <div v-for="pais in paises" :key="pais.id">{{pais.id}} {{pais.nombrePais}} {{pais.codigoIso}}</div>
        <div>{{cargando}}</div>
        <div v-if="seEjecutoEvento">se ejecuta bubu</div>
    </div>
</section>
</template>

<script>
import DemoGrid from '~/components/controlls/demogrid'
export default {
    components: {
        DemoGrid
    },
    data() {
        return {
            searchQuery: '',
            columns: ['id', 'nombrePais', 'codigoIso'],
            paises: [],
            cargando:false,
            seEjecutoEvento:false
        }
    },
    methods: {
      ejecuteEvento(){
        this.seEjecutoEvento = true;
      },
        getPaises() {
            debugger;
            this.cargando = true;
            this.paises = [{
                    id: 1,
                    nombrePais: "colombia",
                    codigoIso: "col"
                },
                {
                    id: 2,
                    nombrePais: "Alemania",
                    codigoIso: "de"
                },
                {
                    id: 3,
                    nombrePais: "Suiza",
                    codigoIso: "ch"
                }
            ]
            // this.$axios.$get('Paises/GetAll')
            //     .then(dataDelApi=>{
            //       debugger;

            //       this.paises =JSON.parse(JSON.stringify(dataDelApi));
            //     })
            //     .catch(elError=>{
            //       console.log(elError)
            //     })
            //     .finally(()=> this.cargando = false);
            //   },
        }
    }
}
</script>

<style>

</style>
