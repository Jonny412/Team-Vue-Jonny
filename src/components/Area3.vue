<template>
<div class="mod">
            <h6 class="title text-left">A3</h6>
            <div class="mx-1 my-3">
                <div class="input-group mb-3 ">
                    <label class="input-group-text" for="inputGroupSelect01">Nome Team:</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Inter</option>
                        <option value="2">Milan</option>
                        <option value="3">Juventus</option>
                        <option value="4">Napoli</option>
                        <option value="5">Roma</option>
                        <option value="6">Atalanta</option>
                    </select>
                </div>
            </div>
        </div>
</template>

<script>
export default {
     data() {
        return {
            controlli: false,
        }
    },

}
</script>