<template>
  <div id="app">
    <Principale />
  </div>
</template>
<script>
import Principale from './components/Principale'
export default {
  name: 'app',
  components: {
    Principale
  } 
}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}


.text-left{
text-align: left;

}
</style>