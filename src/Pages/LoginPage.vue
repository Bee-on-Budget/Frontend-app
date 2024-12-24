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
import { onMounted, ref } from 'vue';
import { jwtDecode } from 'jwt-decode';
import InputField from '@/Components/InputField.vue';
import SimpleButton from '@/Components/SimpleButton.vue';
import HSeperator from '@/Components/HSeperator.vue';
import { useRouter } from 'vue-router';


const TOKEN_DURATION = 24 // hours
const GOOGLE_LOGIN_API_URL = 'http://localhost:8080/api/auth/google'
const ALLOWEED_CHARACTERS = `abcdefghijklmnopqrstuvwxyz1234567890~!$%^&*_=+}{'?-.@`

const router = useRouter();
const emailText = ref("");
const passwordText = ref("");

const handleLoginAttempt = async() => {
    
    if ((emailText.value != "") && (passwordText.value != "")) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailAddress = emailText.value;
        
        emailAddress = emailAddress.trim();
        emailAddress = emailAddress.toLowerCase();
        
        if (emailRegex.test(emailAddress)) {
            let emailValid = true;
            
            for(let char of emailAddress) {
                if (!ALLOWEED_CHARACTERS.includes(char)) {
                    emailValid = false;
                    break;
                }
            }
            
            if (emailValid) {
                console.log(emailAddress, passwordText.value);
                console.log("AUTH THROUGH EMAIL NOT IMPLEMENTED YET")
            }
            else {
                console.log("email invalid!")
            }
        }
        else {
            console.log("email invalid!")
        }
        
    }
    else if ((emailText.value == "") && (passwordText.value != "")) {
        console.log("please provide an email!")
    }
    else if ((emailText.value != "") && (passwordText.value == "")) {
        console.log("Please provide a password!")
    }
    else {
        console.log("Please provide an email and a passowrd!")
    }
    
    
}


const handleGoogleLoginInSuccess = async(response) => {
    const { credential } = response; 

    // TODO: Send image link to backend 
    console.log(jwtDecode(credential));
    
    if (credential != null){
        try {
            const requestResponse = await fetch(GOOGLE_LOGIN_API_URL, {
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
                
                // TODO: set expiration date to the token's expiry date
                const dateObj = new Date();
                dateObj.setTime(dateObj.getTime() + (TOKEN_DURATION /*hour*/ * 60 /*min*/ * 60 /*sec*/ * 1000 /*ms*/ ))

                document.cookie = `token=${data.token}; expires=${dateObj.toUTCString()}; path=/`   
                router.push("/");                
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


onMounted(() => {
    if (document.cookie.includes("token=")) {
        router.push('/');
    }
});
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