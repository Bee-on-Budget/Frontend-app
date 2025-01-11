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
        <InputField 
            label-text="PasswordCheck:" 
            input-type="password" 
            input-width="20%" 
            style="margin-top: 10px;"
            v-model:inputText="passwordCheck"
        >Password:</InputField>

        <SimpleButton 
            style="margin-top: 20px;"
            @click="handleRegister"    
        >Register</SimpleButton>
    </div>
</template>

<script setup>
import InputField from '@/components/InputField.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import { validateEmail, validatePassword } from '@/composables/formValidation';
import { ref } from 'vue';

const emailText = ref("");
const passwordText = ref("");
const passwordCheck = ref("");

const handleRegister = async() =>{
    let emailStatus = validateEmail(emailText.value)
    let passowrdStatus = validatePassword(passwordText.value)
    
    if(emailStatus=='valid'){
        if(passowrdStatus=='valid'){
            if(passwordText.value == passwordCheck.value){
                console.log("you will register at some point")
            }
            else{
                console.log('Passwords don t match')
            }
        }
        else{
            console.log(passowrdStatus)
        }
    }
    else{
        console.log('Email is ' + emailStatus)
    }
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

.navbar {
    list-style-type: none;
}
</style>