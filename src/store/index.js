import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contenuto:[],
    areaState:'3',
    contenutoDue:[],
    contenutoTre:[],
  },
  mutations: {
    setItems(state, items){
      state.contenuto = items
      state.contenutoDue = Array.prototype.map.call([],items)
      
    },


    
    setArea(state, items){

      state.areaState = items
      

    }
  },
  actions: {
    getItems(contex, items){
      if(items === null){
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
          var ciccio = response.data;
          sessionStorage.setItem('users', JSON.stringify(ciccio));
          contex.commit('setItems', ciccio);
         // this.contenuto2 = items.filter(product => product.department.includes('name'));
          console.log('contenuto2');
   
          

        /* larispostadelserver = JSON.parse(contex),
          
          console.log('larispostadelserver'),
          console.log(larispostadelserver)*/
        })
        .catch(error =>{
          console.error(error);
        })
      }
      else {
        contex.commit('setItems', items);
      }
    }
  },
  modules: {
  },

  getters:{

    //contenutoDue = [...new Set(contenuto.map(contenuto))]    
    // contenutoTotale: state =>{
    //   contenuto = sessionStorage.getItem("username")
    // }

    contenuto:(state, items) =>{
      store.contenuto.filter(contenuto => contenuto.userId)
    }

  }
})
