<template>
    <ul id="navbar">
        <slot></slot>
    </ul>
</template>



<script setup> 

</script>



<style>
#navbar {
    min-height: 40px;
    height: 5%;
    background-color: var(--primary-color);
    list-style-type: none;
    margin: 0%;
    padding-inline: 20px;
    border-bottom: solid var(--dark-color);
}

#navbar li, img {
    float: left;
    padding-inline: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--dark-color);
}

#navbar li:hover {
    border-bottom: solid var(--light-color);
}

#navbar li:active {
    color: var(--dark-color);
    background-color: var(--light-color);
    border-bottom: solid var(--primary-color);
}

#navbar li.active {
    color: var(--dark-color);
    background-color: var(--light-color);
    border-bottom: solid var(--primary-color);
}
</style>