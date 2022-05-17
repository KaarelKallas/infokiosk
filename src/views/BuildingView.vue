<template>
<RouterLink to="mess">
    <div class="oppehoone">
        <div class="flex">
        <span>Mess</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
        </div>
        <div>
        <span>Raamatukogu</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
        </div>
        <div>
        <span>Juuksur</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
        </div>
        <div>
        <span>IT-spetsialist</span><img class="arrow" src="src/images/Nool.svg" alt="Nool">
        </div>
    </div>
    <div class="konverentsid">
        <div>
        <span>Konverentsiruumid</span>   <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
        </div>
        <div>
        <span>Kohvik “Kass”</span>  <img class="arrow" src="src/images/Noolorange.svg" alt="Nool"> 
        </div>
        <div>
        <span>Innovatsioonilabor</span>  <img class="arrow" src="src/images/Noolorange.svg" alt="Nool"> 
        </div>
        <div>
        <span>Aula</span>   <img class="arrow" src="src/images/Noolorange.svg" alt="Nool">
        </div>
    </div>
</RouterLink>
</template>

<style scoped>
.arrow{
padding-left: 20px;
}
.oppehoone{
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 30px;
    top: 700px;
    left: 100px;
    color:black;
    gap: 10px;
}
.konverentsid{
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 30px;
    top: 700px;
    left: 350px;
    color:black;
    gap: 10px;
}
</style>