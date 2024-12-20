<template>
    <div class="input-container" :style="{ width: props.inputWidth }">
        <label class="input-label" 
            v-if="$slots.default">
            <slot></slot>
        </label>
        <input class="input-field" :type="props.inputType"/>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    inputType: {
        type: String,
        required: false,
        default: "text"
    },
    inputWidth: {
        type: String,
        required: false,
        default: "20%"
    }
});

</script>


<style scoped>
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