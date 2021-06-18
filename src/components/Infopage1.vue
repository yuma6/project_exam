<template>
    <div>
        <div class="a0">
            <img class="imgb0" src="../assets/iphone7hello_TP_V4.jpg">
        </div>
        <div class="b0">
            <div>
                <p>名前<br>小林結眞</p>
                <p>生年月日<br>1997/6/10</p>
                <p>出身地<br>福岡県</p>
                <p>出来ること<br>HTML&CSSが少し出来るようになった。</p>
            </div>
        </div>
        <div class="c0">
            <ul>
                <li><a @click='state = "info"' href="#">トップ</a></li>
                <li><a @click='state = "info_01"' href="#">自己紹介</a></li>
                <li><a @click='state = "info_02"' href="#">好きな季節</a></li>
            </ul>
        </div>
    </div>
</template>