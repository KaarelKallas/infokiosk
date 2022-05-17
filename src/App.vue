<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>



  <RouterView />
</template>
<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

     body {
        background-image: url("src/images/background.svg");
        background-repeat: no-repeat;
        width: 1080px;
        height: 1920px;

    }
</style>
