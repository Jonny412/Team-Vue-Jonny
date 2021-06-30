<template>
  <div class="container" id="principale">
    <div class="row">
      <Destinazione class="col-6"/>
      <PannelloMosart class="col-3" />
      <DebugPanel class="col-3"/>
    </div>
  </div>
</template>
<script>
import Destinazione from './Destinazione'
import PannelloMosart from './PannelloMosart'
import DebugPanel from './DebugPanel'
export default {
  name: 'team',
  components: {
    Destinazione,
    PannelloMosart,
    DebugPanel
  }
}
</script>
<style scoped>

#principale{
      
      border:solid 3px red;
      border-collapse:collapse;
}
</style>