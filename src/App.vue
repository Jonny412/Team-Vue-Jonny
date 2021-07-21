<template>
  <div id="app" class="col-8">
     <div class="container py-1" id="titlePanel">{{versionRelease.name}}</div>
     <Principale :versionRelease ="versionRelease"/>
  </div>
</template>
<script>
import TitlePanel from './components/TitlePanel'
import Principale from './components/Principale'
import store from './store/index'
import versRelease from '../release.json'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    TitlePanel,
    Principale
  },
   data() {
        return {
            versionRelease: versRelease,
        }

    },
  beforeMount() {
    const datiUsers = sessionStorage.getItem('users');
    const parseUser = JSON.parse(datiUsers);
    this.getItems(parseUser);
    console.log('ho chiamato get Items');

    const ValRel = sessionStorage.getItem('release');
    const parseRel = JSON.parse(ValRel);

    this.getRelease(parseRel);

    
    

  },
  methods:{
    ...mapActions([
      'getItems',
      'getRelease'

    ]),
    
  },
  computed:{

    ...mapState([
      'contenuto',
      'areaState',
      'packageVersion'
      
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
background-color: #36393d;
}

.text-left{
text-align: left;

}

#titlePanel{
  color: white;
  background:tomato;
  box-shadow: 2px 2px 20px black;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
}


</style>