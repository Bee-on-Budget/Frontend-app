<template>
    <div class="HSeperatorContainer">
        <hr class="HSeperator">
        <label class="HSeperatorLabel">
            <slot></slot>
        </label>
        <hr class="HSeperator">
    </div>
</template>



<script>
export default {

}
</script>



<style>
.HSeperatorContainer {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 15px;
    padding: 0px;
    margin: 0px;
    margin-block: 20px;
}

.HSeperator {
    background-color: var(--dark-color);
    height: 5px;
    min-width: 110px;
    outline: none;
    border: none;
    border-radius: 5px;
}

.HSeperatorLabel {
    color: var(--dark-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>