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



<script>
import InputField from '@/components/InputField.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import HSeperator from '@/components/HSeperator.vue';

export default {
    components: {
        InputField,
        SimpleButton,
        HSeperator
    },
    methods: {
        async handleGoogleLoginInSuccess(response) {
            const { credential } = response; 
            console.log(credential)
        },
        handleGoogleLoginInFail() {
            console.log('fail');
        }
    }
}
</script>



<style>
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