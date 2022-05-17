<template>
<RouterLink class="oppehoone" to="mess">
    <div>
        <header class="top"><img src="src/images/Handshake.svg" alt="Logo"></header>
        <div class="k-icon"><img src="src/images/K.svg" alt="K"></div>
        <div class="k-building">
            <h2>VALI ÕPPEKLASS</h2>
            <div class="search-wrapper">
                <img src="src/images/Magnify.svg" alt="icon">
                <input placeholder="Otsi..." type="text">
            </div>
            <div class="rooms">
                <div class="room" id="room">200</div>
                <div class="room" id="room">201</div>
                <div class="room" id="room">202</div>
                <div class="room" id="room">203</div>
                <div class="room" id="room">204</div>
                <div class="room" id="room">205</div>
                <div class="room" id="room">206</div>
                <div class="room" id="room">207</div>
                <div class="room" id="room">208</div>
                <div class="room" id="room">209</div>
                <div class="room" id="room">210</div>
                <div class="room" id="room">211</div>
            </div>
        </div>
        <footer><img src="" alt=""></footer>
    </div>
</RouterLink>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');
    html {
        width: 100%;
        height: 100vh;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .top > img {
        padding: 76px 0px 0px 76px;
    }

    .k-icon {
        margin: 146px 0px 46px 0px;
    }

    .k-icon > img {
        margin: auto;
    }

    .k-building {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .k-building > h2 {
        font-weight: 700;
        font-family: 'Signika', sans-serif;
        color: #F95F05;
        font-size: 96px;
    }

    .search-wrapper {
        font-size: 32px;
        width: 780px;
        height: 84px;
        display: flex;
        border: 5px solid #F95F05;
        border-radius: 100px;
        margin: 60px 0px;
    }

    .search-wrapper > input {
        width: 80%;
        outline: none;
    }

    .rooms {
        display: grid;
        grid-template-columns: auto auto auto;
        row-gap: 30px;
        column-gap: 60px;
    }


    .room {
        color: #F95F05;
        border: 5px solid #F95F05;
        border-radius: 100%;
        font-weight: 400;
        font-size: 64px;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
