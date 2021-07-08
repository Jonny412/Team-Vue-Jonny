<template>
  <div class="container" id="principale">
    <div class="row">
      <Destinazione class="col-6"/>
      <PannelloMosart class="col-3" />
      <DebugPanel class="col-3" v-if="boolPanel" />
       
       <button @click="activeDebugPanel" >Release 1.0.0</button>
       <div class="dP" v-if="boolPanel==true">{{altezza}}</div>
      <!-- <div  class="dP" v-else>{{altezza * 10}}</div> -->

       <p id="pumba">{{altezza}}</p>
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
      
      border:solid 3px red;
      border-collapse:collapse;
}

#dP{
  background-color:gray;
}
</style>