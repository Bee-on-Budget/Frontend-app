<template>
    <div id="page-container">
        <InputField 
            input-type="email" 
            input-width="20%"
        >Email:</InputField>
        <InputField 
            label-text="Password:" 
            input-type="password" 
            input-width="20%" 
            style="margin-top: 10px;"
        >Password:</InputField>
        <SimpleButton 
        style="margin-top: 20px;">Sign In</SimpleButton>
        <HSeperator>OR</HSeperator>
        <GoogleSignInButton 
            @success="handleGoogleLoginInSuccess"
            @error="handleGoogleLoginInFail"
        ></GoogleSignInButton>
    </div>
</template>



<script setup>
import InputField from '@/Components/InputField.vue';
import SimpleButton from '@/Components/SimpleButton.vue';
import HSeperator from '@/Components/HSeperator.vue';

async function handleGoogleLoginInSuccess(response) {
    const { credential } = response; 
    console.log(credential)
} 

async function handleGoogleLoginInFail() {
    console.log('fail');
} 
</script>



<style scoped>
#page-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: var(--secundary-color);
}
</style>