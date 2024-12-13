<template>
    <div class="input-container" :style="{ width: inputWidth }">
        <label class="input-label" 
            v-if="$slots.default">
            <slot></slot>
        </label>
        <input class="input-field" :type="inputType"/>
    </div>
</template>


<script>
export default {
    props: {
        inputType: {
            type: String,
            Required: false,
            default: "text"
        },
        inputWidth: {
            type: String,
            Required: false,
            default: "20%"
        }
    },
}
</script>


<style>
.input-container {  
    width: 40%;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 20px;
    min-width: 200px;
}

.input-label {
    display: block;
    margin-bottom: 5px;
    color: var(--light-color);
    font-size: large;
}

.input-field {
    margin-top: 5px;
    padding: 3px 5px;
    width: 100%;
    min-width: 200px;
    border: none;
    border-bottom: solid var(--dark-color);
    border-radius: 5px;
    color: var(--dark-color);
    font-size: medium;
    font-family: inherit;
    outline: none;
}

.input-field:focus {
    border-bottom: solid var(--primary-color);

}
</style>