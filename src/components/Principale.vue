<template>
<div id="team">
    <Destinazione />
    <PannelloMosart />
    <DebugPannel />
</div>
</template>

<script>
import Destinazione from './Destinazione'
import PannelloMosart from './PannelloMosart'
import DebugPannel from './DebugPannel'

export default {
  name: 'team',
  components: {
    Destinazione,
    PannelloMosart,
    DebugPannel



  }
}
</script>

<style>
</style>
