<script setup>
import MajajuhtNav from '../components/MajajuhtNav.vue';
</script>

<template>
<div class="font-[Signika] flex flex-col items-center">
    <MajajuhtNav class="self-start"/>
    
    <h1 class="font-bold text-[96px] mb-[114px]">VALI HOONE</h1>
    
    <div class="flex gap-[52px]">
        <div class="oppehoone">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/oppehoonelogo.svg" alt="Õppehoone">
                <span class="text-[40px] text-[#61A60B] font-bold">ÕPPEHOONE</span>
            </div>
            <div>
                <RouterLink class="flex" to="mess">
                    <span>Mess</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
                </RouterLink>
            </div>
            <div class="flex">
                <span>Raamatukogu</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Juuksur</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>IT-spetsialist</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
        </div>
        <div class="konverentsid">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/konverentsidlogo.svg" alt="logo">
                <span class="text-[40px] text-[#F95F05] font-bold">KONVERENTSID</span>
            </div>
            <div class="flex">
                <span>Konverentsiruumid</span>   <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Kohvik “Kass”</span>  <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Innovatsioonilabor</span>  <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Aula</span>   <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
        </div>
        <div class="stuudio">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/stuudiologo.svg" alt="logo">
                <span class="text-[40px] text-[#1B8FBE] font-bold">STUUDIO</span>
            </div>
            <div class="flex">
                <span>Keraamika</span>   <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Maaliklass</span>  <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Dekoor</span>  <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Spaa</span>   <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.arrow{
margin-left: 20px;
width: 16px;
}
.oppehoone{
    display: flex;
    flex-direction: column;
    width: 229px;
    font-size: 30px;

    color:black;
    gap: 10px;
}
.konverentsid{
    display: flex;
    flex-direction: column;

    font-size: 30px;

    color:black;
    gap: 10px;
}
.stuudio{
        display: flex;
    flex-direction: column;

    font-size: 30px;

    color:black;
    gap: 10px;
}
</style>