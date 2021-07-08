<template>
    <div id="destinazione" class="my-5">
        <div class="mod mt-3">
            <h6 class="title text-left">Destinazione</h6>
            <div class="d-flex align-items-center mx-1 my-3">
                <label for="area1">
                    <span class="px-1">Ledwall:</span>
                </label>
                <select name="area1" id="area1" class="form-select mb-1" aria-label="Default select example" v-model="destination" @change="selectArea(destination)">
                    <option selected value="0">...</option>
                    <option value="1">Area 1-2</option>
                    <option value="3">Area 3</option>
                    <option value="4">Area 4</option>
                    <option value="5">Area 5</option>
                </select>
            </div>
        </div>
        <Area1  v-if="area1" />
        <Area3  v-if="area3"/>
        <Area4  v-if="area4" :contenuto="contenuto" :contenutoDue="contenutoDue"/>
        <Area5  v-if="area5"/>
        
    </div>
</template>

<script>
import Area1 from './Area1'
import Area3 from './Area3'
import Area4 from './Area4'
import Area5 from './Area5'

import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {
            destination: this.$store.state.areaState,
            area1: false,
            area3: false,
            area4: false,
            area5: false,
        }
    },
    components:{
        Area1,
        Area3,
        Area4,
        Area5,
    },
    methods: {
        ...mapMutations(['setArea']),
        selectArea(val) {
        this.setArea(val);
            switch (val) {
                case '1':
                    this.area1 = true;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = false;
                    break;
                case '3':
                    this.area1 = false;
                    this.area3 = true;
                    this.area4 = false;
                    this.area5 = false;
                    break;
                case '4':
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = true;
                    this.area5 = false;
                    break;
                case '5':
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = true;
                    break;
                default:
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = false;
                    break;
             }
          },

      




    },
    computed:{

    ...mapState([
      'contenuto',
      'contenutoDue',
      'areaState'
    ]),
   
    }
}
</script>

<style scoped>
    #destinazione {
        
    }
    .mod {
        margin-top: 10px;
        border: 1px solid rgb(211, 208, 208);
        position: relative;
    }
    .title {
        position: absolute;
        top: -10px;
    }
    h6 {
        margin-left: 10px;
        background-color: #fff;
    }

</style>