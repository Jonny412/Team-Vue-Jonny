<template>
  <div class="container mt-0" id="principale">
    <div class="row">
    <Destinazione class="col-6"/>
      <PannelloMosart class="col-3" />
      <DebugPanel class="col-3" v-if="boolPanel" />
      <div class="col-6"></div>
      <button @dblclick="activeDebugPanel" class="col-3">Release {{versionRelease.release}}</button>
    </div>
  </div>
</template>
<script>
import Destinazione from './Destinazione'
import PannelloMosart from './PannelloMosart'
import DebugPanel from './DebugPanel'
import $ from 'jquery'

export default {
  name: 'team',

    
  data() {
    return{
    boolPanel: false,
    altezza: 150,
    }
  },

  props:{
    versionRelease: Number,

  },


  components: {
    Destinazione,
    PannelloMosart,
    DebugPanel,
  },


computed:{
  changeColor(){
        this.boolPanel = !this.boolPanel;

     setTimeout(function(){if(this.boolPanel == true){
            console.log("cambiaColore");
            document.getElementById('dP').style.backgroundColor = 'green';

    }},1000)
  }

},
methods: {
      activeDebugPanel(){
        this.boolPanel = !this.boolPanel;
            //console.log("AttivaPanello");
            
            
            

            if(this.boolPanel == true){
            document.getElementsByClassName('dP')[0].style.backgroundColor = 'red';
            }
           

            
            
        }

  }
}
</script>
<style scoped>

#principale{
      
      
      border-collapse: collapse;
      color: white;
}

</style>
