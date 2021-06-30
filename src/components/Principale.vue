<template>
  <div class="container">
    <div class="row">
      <Destinazione class="col-6"/>
      <PannelloMosart class="col-3" />
      <DebugPanel class="col-3"/>
    </div>
    <div class="d-flex justify-content-center my-2">
      <button class="btn btn-primary">Click</button>
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
</style>