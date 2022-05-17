<script setup>

</script>

<template>
  <main>
      <div class="flex w-[1080px] h-[1920px] justify-between">
    <div class="flex items-end h-[100%]">
        <img class="flex mb-64" src="src/images/burger.svg" alt="">
    </div>
    <RouterLink to="buildings">
      <div class=" h-[100%] w-[111px] flex justify-end items-end ">
          <div class="mb-64 flex items-center justify-center w-[111px] bg-sky-900 text-center text-[64px] rounded-l-full h-[739px] "><div class=" h-[111px] origin-center rotate-[-90deg]"><span class="text-white">MAJAJUHT</span></div></div>
      </div>
    </RouterLink>
</div>
  </main>
</template>
<style>
main {
        background-image: url("src/images/background.svg");
        background-repeat: no-repeat;
        width: 1080px;
        height: 1920px;

    }</style>
