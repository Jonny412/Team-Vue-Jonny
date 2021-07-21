<template>
      <div id="debugPanel">
            <div class=" deb d-flex mx-5 mb-2">
                  <label>GUIDE:</label>
                  <input type="number" max="5" min="0" class="form-control" v-model="areaState">
            </div>
            <div class="deb mx-5 mb-2">
                  <label>L5</label>
                  <select class="form-select " v-model="areaState">
                        <option value="" selected>...</option>
                        <option value="1" >Team_Z1-Z2</option>
                        <option value="3" >Team_Z3</option>
                        <option value="4" >Team_Z4</option>
                        <option value="5" >Team_Z5</option>
                  </select>
            </div>
            <div class="deb mx-5 mb-2">
                  <select class="form-select  my-2" v-model="areaState">
                        <option value="" selected>...</option>
                        <option value="1" >bg_Z1</option>
                        <option value="3" >bg_Z3</option>
                        <option value="4" >bg_Z4</option>
                        <option value="5" >bg_Z5</option>
                  </select>
                  <select class="form-select my-2" v-model="areaState">
                        <option value="" selected>...</option>
                        <option value="1" >struttura_Z1</option>
                        <option value="3" >struttura_Z3</option>
                        <option value="4" >struttura_Z4</option>
                        <option value="5" >struttura_Z5</option>
                       
                  </select>
                  <select class="form-select  my-2" v-model="areaState">
                        <option value="" selected>...</option>
                        <option value="1" >flare_Z1</option>
                        <option value="3" >flare_Z3</option>
                        <option value="4" >flare_Z4</option>
                        <option value="5" >flare_Z5</option>
                        
                  
                  </select>
            </div>
            <div class="deb d-flex justify-content-between mx-5 mb-2">
                  <img src="../assets/images/gray.png" height="50" width="50">
                  <img src="../assets/images/gray.png" height="50" width="50" >
            </div>
      </div>
</template>


<script>
import {mapState} from 'vuex'
export default {

      computed:{

    ...mapState([
      'contenuto',
      'areaState'
    ]),
   
    }

 
}
</script>

<style scoped>
#debugPanel{
      padding: 10px;
      border-collapse: collapse;
      box-shadow: 2px 10px 20px black;
      border-radius: 0px 0px 10px 10px;
      background: #3c3c3c;
    
}

.deb{
      border:1px solid gray;
      padding:5px;
}
</style>
