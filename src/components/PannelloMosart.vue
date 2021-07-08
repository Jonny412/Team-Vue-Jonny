<template>
  <div >
    <div id="pannellmosart" class="m-1">
      <select class="form-select">
        <option value="1">CH1</option>
        <option value="2">CH2</option>
        <option value="3">CH3</option>
        <option value="4">CH4</option>
        <option value="5">CH5</option>
        <option value="6">CH6</option>
        <option value="7">CH7</option>
        <option value="8">CH8</option>
        <option value="9">CH9</option>
        <option value="10">CH10</option>
        <option value="11">CH11</option>
        <option value="12">CH12</option>
        <option value="13">CH13</option>
        <option value="14">CH14</option>
        <option value="15">CH15</option>
        <option value="16">CH16</option>
      </select>
      <select class="form-select">
        <option value="1">AUTO+</option>
        <option value="2">MANUAL</option>
      </select>
      <br />
      <input class="form-control" type="text" placeholder="00:04" />
      <input class="form-control" type="text" placeholder="00:05" />
      <br />
      <br />
      <select class="form-select">
        <option value="1">AUTOOUT</option>
        <option value="2">BACKGROUNDEND</option>
        <option value="3">STORYEND</option>
        <option value="4">OPENEND</option>
      </select>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >Mosart replace logic</label
        >
      </div>
      <button type="submit" class="btn btn-primary">Check</button>
      <input
        class="form-control"
        type="text"
        placeholder="Mosart=W101|00:04|O"
      />
    </div>
  </div>
</template>
<script>
export default {

 
}
</script>

<style>
#pannellinoMosart {
  border: 1px solid black;
}
</style>
