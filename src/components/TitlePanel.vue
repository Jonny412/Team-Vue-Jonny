<template>
    <div>
         <div class="container py-1" id="titlePanel">{{$store.state.packageVersion}}</div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {

 
}
</script>

<style scoped>
#titlePanel{
  color: white;
  background:tomato;
  box-shadow: 2px 2px 20px black;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
}

</style>