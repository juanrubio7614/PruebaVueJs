

<template>  
<section>  
  
    <div id="demo">    
    <DemoGrid
    :paises="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
    </DemoGrid>
</div>
   <div>
      
      <h1 class="title">
        pruebavuejs
      </h1>
        {{valor}}
        <input type="text" v-model="valor" />   
        <button @click="getPaises" >Traiga ya carajo!</button>

        <div v-for="pais in paises" :key="pais.id">{{pais.id}} {{pais.nombrePais}} {{pais.codigoIso}}</div>
        <div>{{cargando}}</div>
    </div> 
 </section>
</template>


<script>
import DemoGrid from '~/components/controlls/demogrid'
export default{
  components:{
    DemoGrid
  }, 

  data:{
    searchQuery:'',
    gridColumns:['Id','nombreaPis'DOMPointReadOnly
    gridData:[]
  },
  methods:{
    getPaises(){
      debugger;
      this.cargando=true;
      this.$axios.$get('Paises/GetAll')
          .then(dataDelApi=>{
            this.paises =JSON.parse(JSON.stringify(dataDelApi));
          })
          .catch(elError=>{
            console.log(elError)
          })
          .finally(()=> this.cargando = false);
        },
  }
}
</script>


<style>

</style>
