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
   // packageVersion: process.env.PACKAGE_VERSION || '0',
    packageVersion: [1],
    

  },
  mutations: {
    setItems(state, items){
      state.contenuto = items
      state.contenutoDue = Array.prototype.map.call([],items)
      
    },


    
    setArea(state, items){

      state.areaState = items
      

    },

    setRelease(state, items){
      state.packageVersion = items

    }
  },
  actions: {
    getItems(contex, items){
      console.log('funzione get Items');
      if(items === null){
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
          var ciccio = response.data;
          sessionStorage.setItem('elia', JSON.stringify(ciccio));
          contex.commit('setItems', ciccio);
         // this.contenuto2 = items.filter(product => product.department.includes('name'));
          /* larispostadelserver = JSON.parse(contex),
          
          console.log('larispostadelserver'),
          console.log(larispostadelserver)*/
        })
        .catch(error =>{
        console.error();
        })
      }
      else {
        contex.commit('setItems', items);
      }
    },

    getRelease(contex, val){
      console.log('funzione get Release');
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        var val = response.data;
        sessionStorage.setRelease('valori', JSON.stringify(val));
        contex.commit('setRelease', val);
       // this.contenuto2 = items.filter(product => product.department.includes('name'));
        console.log(val);
        /* larispostadelserver = JSON.parse(contex),
        
        console.log('larispostadelserver'),
        console.log(larispostadelserver)*/
      })
      .catch(error =>{
        console.error('hai un errore pirla');
      })
      
  
    


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
    },

    /*appVersion: (state) => {
      return state.packageVersion
    }*/

  }
})
