<template>
 <div class="mod">
            <h6 class="title text-left">A4</h6>
            <div class="d-flex flex-column justify-content-center mt-3">
                <div class="d-flex flex-column justify-content-center mx-5">
                    <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                        
                        <select class="form-select form-select-sm d-flex " id="selectPlayer">
                        
                            <option value="0">...</option>
                            <option v-for="(item,k) in contenuto" :key="k" :value="k">{{item.userId}}</option>
                        </select>
                        
                        <div class="form-check d-flex justify-content-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlli">
                            <label class="form-check-label px-1" for="flexCheckDefault">
                               Controlli Avanzati
                            </label>
                        </div>
                    
                </div> 
                <div class="controll d-flex flex-column justify-content-center mx-5" v-if="controlli" >
                  <div class="sliderControl d-flex flex-column justify-content-center">
                        <label for="posX" class="form-label">PosX</label>
                        <input type="range" class="form-range" min="-5" max="5" step="0.5" id="posX" v-model="range1">
                        <p>{{range1}}</p>
                        <label for="posY" class="form-label">PosY</label>
                        <input type="range" class="form-range" min="-5" max="5" step="0.5" id="posY" v-model="range2">
                        <p>{{range2}}</p>
                        <label for="Scale" class="form-label">Scale</label>
                        <input type="range" class="form-range" min="-5" max="5" step="0.5" id="Scale" v-model="range3">
                        <p>{{range3}}</p>
                  </div>
                  <div class="bagliore d-flex flex-column text-left justify-content-center">
                         
                        <label for="nessuno">
                            <input type="radio" name="typeBagliore" value="Nessuno" id="nessuno">
                            Nessuno
                        </label>
                       
                        <label for="destra">
                            <input type="radio" name="typeBagliore" value="Destra"  id="destra">
                            Destra
                        </label>
                        
                        <label for="sinistra">
                            <input type="radio" name="typeBagliore" value="Sinistra" id="sinistra">
                            Sinistra
                        </label>
                  </div>

                </div>
            </div>
        </div>
        
       
</template>

<script>
export default {
     data() {
        return {
            controlli: false,
            range1:0,
            range2:0,
            range3:0,
            

        }

    },

   computed:{

   },

    props:{
        contenuto: Array,
        contenutoDue:Array,
    },
    
    

  


}
</script>
