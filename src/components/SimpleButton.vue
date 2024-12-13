<template>
    <button id="simple-button">
        <slot></slot>
    </button>
</template>



<script>
export default {

}
</script>



<style>
#simple-button {
    background-color: var(--dark-color);
    color: var(--light-color);
    border: none;
    border-radius: 5px;
    border-bottom: solid var(--dark-color);
    outline: none;
    margin: 0px;
    width: 10%;
    min-width: 100px;
    font-family: inherit;
    font-size: larger;

}

#simple-button:hover {
    border-bottom: solid var(--light-color);
}

#simple-button:active {
    border-bottom: solid var(--primary-color);
}
</style>