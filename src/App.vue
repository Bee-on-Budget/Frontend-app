<template>
  <div id="app-container">
    <!-- TODO: move navbar functionality to navbar component -->
    <NavBar>
      <img 
        src="./assets/Logo3.svg" 
        alt="Logo" 
        style="margin-left: -20px; width: 200px;" 
        @click="navigatePage(HOME_PAGE)"
      >
      <!-- <li 
        :class="{ active: activepage === HOME_PAGE }" 
        @click="navigatePage(HOME_PAGE)"
      >Home</li> -->
      <li 
        v-if="!signedIn"
        :class="{ active: activepage === LOGIN_PAGE }" 
        style="float: right;" 
        @click="navigatePage(LOGIN_PAGE)"
      >Sign In</li>
      <li 
        v-if="signedIn"
        :class="{ active: activepage === LOGIN_PAGE }" 
        style="float: right;" 
        @click="signOut"
      >Sign Out</li>
    </NavBar>
    <div id="page-viewer">
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import NavBar from '@/Components/NavBar.vue';
import { onMounted, ref, watch } from 'vue';

const HOME_PAGE = '/'
const LOGIN_PAGE = '/login'

const router = useRouter();
const route = useRoute();
const activepage = ref(HOME_PAGE);
const signedIn = ref(false);

const navigatePage = (page) => {

  switch(page) {
    case HOME_PAGE:
      router.push('/');
      break;
      
    case LOGIN_PAGE:
      router.push('/login');
      break;
  }
}

const signOut = () => {
  const currentDate = new Date();
  document.cookie = `token=0; expires=${currentDate.toUTCString()}; path=/;`
  signedIn.value = false;
};

onMounted(() => {
  if (document.cookie.includes("token=")) {
    signedIn.value = true;
  }
});

watch(() => route.path, (newPath) => {
  activepage.value = newPath;

  if (document.cookie.includes("token=")) {
    signedIn.value = true;
  }
});
</script>

<style>
:root {
  --secundary-color: #379777;
  --light-color: #F5F7F8;
  --dark-color: #45474B;
  --primary-color: #F4CE14;
  --shadow-color:  #1d1d1d;
}

html, body {
  margin: 0%;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Protest Strike", Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
}

#app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#page-viewer {
  height: 100%;
}
</style>
