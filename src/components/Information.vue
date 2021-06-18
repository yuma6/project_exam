<template>
    <div>
        <p>Information</p>
        <div class="a0 a0-top">
            <h1>自己紹介サイトのトップ</h1>
        </div>
        <div class="b0">
            <a class="ba" @click='state = "info_01"' href="#"><img class="imgb0" src="../assets/iphone7hello_TP_V4.jpg"><br>自己紹介</a>
            <a class="ba" @click='state = "info_02"' href="#"><img class="imgb0" src="../assets/012stockphoto_TP_V4.jpg"><br>好きな季節</a>
        </div>
        <div class="c0">
            <ul>
                <li><a @click='state = "info"' href="#">トップ</a></li>
                <li><a @click='state = "info_01"' href="#">自己紹介</a></li>
                <li><a @click='state = "info_02"' href="#">好きな季節</a></li>
            </ul>
        </div>
        <main>
            <Information v-if='state === "info"' />
            <Infopage1 v-if='state === "info_01"' />
            <Infopage2 v-if='state === "info_02"' />
        </main>
    </div>
</template>

<script>
</script>

<style>
body {
    background-color: lightgray;
    border: black solid 1px;
}
.imgb0 {
    width: 250px;
    height: 150px;
}
.a0 {
    border: black solid 1px;
    text-align: center;
}

.b0 {
    border: black solid 1px;
    display: flex;
    justify-content: space-around;
}
.c0 {
    border: black solid 1px;
    text-align: left;
}
@media (max-width: 500px){
    .b0 {
        flex-direction: column;
    }
}
</style>