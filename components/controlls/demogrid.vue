<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns"
          @click="sortBy(column)"
          :key="column"
          :class="{ active: sortKey == column }">
          {{ column | capitalize }}
          <span class="arrow" :class="sortOrders[column] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredPaises" :key="entry">
        <td v-for="key in columns"  :key="key">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script >
export default{
  props:{
  paises:Array,
  columns:Array,
  filterKey:String,  
},
data(){
  var sortOrders={};
  this.columns.forEach(function(key) {
   sortOrders[key] =1
  })
  return {
    sortKey:'',
    sortOrders:sortOrders
  }

},
computed:{
  filteredPaises(){    
    var sortKey=this.sortKey
    var filterKey=this.filterKey && this.filterKey.toLowerCase()
    var order=this.sortOrders[sortKey]||1
    var paises=this.paises
    if(filterKey)
    {
      paises=paises.filter(function(row){
        return Object.keys(row).some(function(key){
          return String(row[key]).toLowerCase().indexOf(filterKey)>-1
        })
      })
    }
    if(sortKey){
      paises=paises.slice().sort(function(a,b){
        a=a[sortKey]
        b=b[sortKey]
        return (a===b?0:a>b?1:-1)*order
      })
    }
    return paises
  }
},
filters:{
  capitalize:function(str)
  {
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
},
methods:{
    
      sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}

</script>
