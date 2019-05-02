<template>
  <div>
    <header-nav/>
    <nuxt />
    <footer-nav/>
  </div>
</template>

<script>
import HeaderNav from '~/components/layoutPartials/headerNav'
import FooterNav from '~/components/layoutPartials/footerNav'


export default {
  components:{
    HeaderNav,
    FooterNav,
    
  }
}

</script>
