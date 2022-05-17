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
        <span>Konverentsiruumid</span>   
        <span>Kohvik “Kass”</span>   
        <span>Innovatsioonilabor</span>   
        <span>Aula</span>   
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
.flex{
    display: flex;
    align-items: center;
}
</style>