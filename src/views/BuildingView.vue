<script setup>
import MajajuhtNav from '../components/MajajuhtNav.vue';
</script>

<template>
<div class="font-[Signika] flex flex-col items-center">
    <MajajuhtNav class="self-start"/>
    
    <h1 class="font-bold text-[96px] mb-[114px] mt-[152px]">VALI HOONE</h1>
    
    <div class="flex gap-[52px] mb-[84px]">
        <div class="BuildingContainer">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/oppehoonelogo.svg" alt="Õppehoone">
                <span class="text-[40px] text-[#61A60B] font-bold">ÕPPEHOONE</span>
            </div>
            <div>
                <RouterLink class="flex" to="mess">
                    <span>Mess</span>
                    <img class="arrow" src="src/images/Nool.svg" alt="Nool">
                </RouterLink>
            </div>
            <div class="flex">
                <span>Raamatukogu</span>
                <img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Juuksur</span>
                <img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>IT-spetsialist</span>
                <img class="arrow" src="src/images/Nool.svg" alt="Nool">
            </div>
        </div>
        <div class="BuildingContainer">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/konverentsidlogo.svg" alt="logo">
                <span class="text-[40px] text-[#F95F05] font-bold">KONVERENTSID</span>
            </div>
            <div class="flex">
                <span>Konverentsiruumid</span>   
                <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Kohvik “Kass”</span>  
                <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Innovatsioonilabor</span>  
                <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Aula</span>   
                <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
            </div>
        </div>
        <div class="BuildingContainer">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/stuudiologo.svg" alt="logo">
                <span class="text-[40px] text-[#1B8FBE] font-bold">STUUDIO</span>
            </div>
            <div class="flex">
                <span>Keraamika</span>   
                <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Maaliklass</span>  
                <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Dekoor</span>  
                <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Spaa</span>   
                <img class="arrow" src="src/images/Noolblue.svg" alt="Nool">
            </div>
        </div>
    </div>
    <div class="flex gap-[97px]">
        <div class="BuildingContainer">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/administratsioonlogo.svg" alt="logo">
                <span class="text-[40px] text-[#014C83] font-bold">ADMINISTRATSIOON</span>
            </div>
            <div class="flex">
                <span>Teabejuht</span>   
                <img class="arrow" src="src/images/Nooldarkblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Haldusjuht</span>  
                <img class="arrow" src="src/images/Nooldarkblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Direktor</span>  
                <img class="arrow" src="src/images/Nooldarkblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Juhiabi</span>   
                <img class="arrow" src="src/images/Nooldarkblue.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Raamatupidamine</span>   
                <img class="arrow" src="src/images/Nooldarkblue.svg" alt="Nool">
            </div>
        </div>
        <div class="BuildingContainer">
            <div class="flex flex-col items-center gap-[29px]">
                <img src="../assets/disainlogo.svg" alt="logo">
                <span class="text-[40px] text-[#1B1C20] font-bold">DISAINIMAJAKAS</span>
            </div>
            <div class="flex">
                <span>Galerii</span>   
                <img class="arrow" src="src/images/Noolblack.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Kujundus</span>  
                <img class="arrow" src="src/images/Noolblack.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Fotostuudio</span>  
                <img class="arrow" src="src/images/Noolblack.svg" alt="Nool">
            </div>
            <div class="flex">
                <span>Nahaklass</span>   
                <img class="arrow" src="src/images/Noolblack.svg" alt="Nool">
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
.BuildingContainer{
    display: flex;
    flex-direction: column;
    font-size: 32px;

    color:black;
    gap: 10px;
}
</style>