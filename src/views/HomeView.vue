<script setup>

</script>

<template>
  <RouterLink to="buildings">
    <main>
      <img class="logo" src="../assets/logo.png" alt="logo">
      <img class="gif" src="../assets/klikkfinal.gif" alt="gifpress">
    </main>
  </RouterLink>
</template>

<style>
*{
  padding: 0px;
  margin: 0;
}

main {
height: 1920px;
width: 1080px;
height: 1920px;
    background: url(src/assets/ametikool_bg.png);
}

.logo{
  position: absolute;
  left: 427px;
  top: 581px;
}

.gif{
    position: absolute;
  left: 68%;
  top: 60%;
  height: 100px;
}
</style>