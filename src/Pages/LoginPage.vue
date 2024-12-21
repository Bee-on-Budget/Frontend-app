<template>
    <div id="page-container">
        <InputField 
            input-type="email" 
            input-width="20%"
            v-model:inputText="emailText"
        >Email:</InputField>
        <InputField 
            label-text="Password:" 
            input-type="password" 
            input-width="20%" 
            style="margin-top: 10px;"
            v-model:inputText="passwordText"
        >Password:</InputField>
        <SimpleButton 
            style="margin-top: 20px;"
            @click="handleLoginAttempt"    
        >Sign In</SimpleButton>
        <HSeperator>OR</HSeperator>
        <GoogleSignInButton 
            @success="handleGoogleLoginInSuccess"
            @error="handleGoogleLoginInFail"
        ></GoogleSignInButton>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import InputField from '@/Components/InputField.vue';
import SimpleButton from '@/Components/SimpleButton.vue';
import HSeperator from '@/Components/HSeperator.vue';

const TOKEN_DURATION = 1.5 // hours

const emailText = ref("");
const passwordText = ref("");


const handleLoginAttempt = async() => {
    console.log(emailText.value, passwordText.value);
}


const handleGoogleLoginInSuccess = async(response) => {
    const { credential } = response; 
    console.log(credential);


    if (credential != null){
        try {
            const requestResponse = await fetch('http://localhost:8080/api/auth/google', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "idToken": credential
                }),
            });
            

            if (requestResponse.status == 200) {
                const data = await requestResponse.json();

                const dateObj = new Date();
                dateObj.setTime(dateObj.getTime() + (TOKEN_DURATION /*hour*/ * 60 /*min*/ * 60 /*sec*/ * 1000 /*ms*/ ))

                document.cookie = `userToken=${data.token}; expires=${dateObj.toUTCString()}; path=/`                
            }
            else {
                console.log(`Request invalid: ${requestResponse.status}`, requestResponse);
            }

        }
        catch (error) {
            console.log("ERROR: ", error);
        }
    }
    else {
        console.log('Credentials Empty!');
    }

} 


const handleGoogleLoginInFail = () => {
    console.log('Login Fail!');
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