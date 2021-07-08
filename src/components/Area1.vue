<template>
<div class="mod my-3">
    <h6 class="title text-left">A1 - A2</h6>
    <div class="row">
        <div class="d-flex mt-3 col-3">
                <div class="d-flex flex-column mt-3">
                    <div class="d-flex flex-column justify-content-center mx-5">
                        <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                            
                            <select class="form-select form-select-sm d-flex " id="selectPlayer" >
                                <option value="">...</option>
                                <option value="1">Giocatore1</option>
                                <option value="2">Giocatore2</option>
                                <option value="3">Giocatore3</option>
                                <option value="4">Giocatore4</option>
                            </select>
                            <div class="form-check d-flex justify-content-center">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlli1">
                                <label class="form-check-label px-1" for="flexCheckDefault">
                                Controlli Avanzati
                                </label>
                            </div>
                        
                    </div> 
                    <div class="controll d-flex flex-column justify-content-center mx-5" v-if="controlli1" >
                    <div class="sliderControl d-flex flex-column justify-content-center">
                            <label for="posX" class="form-label">PosX</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posX">
                            <label for="posY" class="form-label">PosY</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posY">
                            <label for="Scale" class="form-label">Scale</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="Scale">
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

         <div class="d-flex mt-3 col-3">
                <div class="d-flex flex-column justify-content-center mt-3">
                    <div class="d-flex flex-column justify-content-center mx-5">
                        <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                            
                            <select class="form-select form-select-sm d-flex " id="selectPlayer" >
                                <option value="">...</option>
                                <option value="1">Giocatore1</option>
                                <option value="2">Giocatore2</option>
                                <option value="3">Giocatore3</option>
                                <option value="4">Giocatore4</option>
                            </select>
                            <div class="form-check d-flex justify-content-center">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlli2">
                                <label class="form-check-label px-1" for="flexCheckDefault">
                                Controlli Avanzati
                                </label>
                            </div>
                        
                    </div> 
                    <div class="controll d-flex flex-column justify-content-center mx-5" v-if="controlli2" >
                    <div class="sliderControl d-flex flex-column justify-content-center">
                            <label for="posX" class="form-label">PosX</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posX">
                            <label for="posY" class="form-label">PosY</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posY">
                            <label for="Scale" class="form-label">Scale</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="Scale">
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

         <div class="d-flex mt-3 col-3">
                <div class="d-flex flex-column mt-3">
                    <div class="d-flex flex-column justify-content-center mx-5">
                        <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                            
                            <select class="form-select form-select-sm d-flex " id="selectPlayer" >
                                <option value="">...</option>
                                <option value="1">Giocatore1</option>
                                <option value="2">Giocatore2</option>
                                <option value="3">Giocatore3</option>
                                <option value="4">Giocatore4</option>
                            </select>
                            <div class="form-check d-flex justify-content-center">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlli3">
                                <label class="form-check-label px-1" for="flexCheckDefault">
                                Controlli Avanzati
                                </label>
                            </div>
                        
                    </div> 
                    <div class="controll d-flex flex-column justify-content-center mx-5" v-if="controlli3" >
                    <div class="sliderControl d-flex flex-column justify-content-center">
                            <label for="posX" class="form-label">PosX</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posX">
                            <label for="posY" class="form-label">PosY</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posY">
                            <label for="Scale" class="form-label">Scale</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="Scale">
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

         <div class="d-flex mt-3 col-3">
                <div class="d-flex flex-column mt-3">
                    <div class="d-flex flex-column justify-content-center mx-5">
                        <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                            
                            <select class="form-select form-select-sm d-flex " id="selectPlayer" >
                                <option value="">...</option>
                                <option value="1">Giocatore1</option>
                                <option value="2">Giocatore2</option>
                                <option value="3">Giocatore3</option>
                                <option value="4">Giocatore4</option>
                            </select>
                            <div class="form-check d-flex justify-content-center">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlli4">
                                <label class="form-check-label px-1" for="flexCheckDefault">
                                Controlli Avanzati
                                </label>
                            </div>
                        
                    </div> 
                    <div class="controll d-flex flex-column justify-content-center mx-5" v-if="controlli4" >
                    <div class="sliderControl d-flex flex-column justify-content-center">
                            <label for="posX" class="form-label">PosX</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posX">
                            <label for="posY" class="form-label">PosY</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="posY">
                            <label for="Scale" class="form-label">Scale</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="Scale">
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
    </div>
</div>
</template>

<script>
export default {
     data() {
        return {
            controlli1: false,
            controlli2: false,
            controlli3: false,
            controlli4: false,



        }
    },

}
</script>