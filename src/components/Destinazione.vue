<template>
      <div id="destinazione">
      <div>
            <h5 class="text-left">Destinazione</h5>
            <label for="area" class="d-flex">
            <span class="px-1">Ledwall:</span>
                  <select name="area" class="form-select" aria-label="Default select example">
                        <option selected>...</option>
                        <option value="1">Area 1-2 </option>
                        <option value="3">Area 3</option>
                        <option value="4">Area 4 </option>
                        <option value="5">Area 5 </option>
                  </select>
            </label>
            </div>
            <div></div>

      </div>
</template>


<script>
export default {

 
}
</script>

<style scoped>
#destinazione{
      padding: 10px;
      border:solid 1px black;
      border-collapse:collapse;
}

.form-select{
      width:100%;
}

</style>
