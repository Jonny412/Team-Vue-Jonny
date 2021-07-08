<template>
  <div id="app">
    <Principale />
  </div>
</template>
<script>
import Principale from './components/Principale'
import store from './store/index'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    Principale
  },
  beforeMount() {
    const datiUsers = sessionStorage.getItem('users');
    const parseUser = JSON.parse(datiUsers);
    this.getItems(parseUser);
    console.log(parseUser);
    

  },
  methods:{
    ...mapActions([
      'getItems'

    ]),
    
  },
  computed:{

    ...mapState([
      'contenuto',
      'areaState'
      
    ])



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