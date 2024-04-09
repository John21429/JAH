<script setup>
import { onMounted, nextTick, ref } from 'vue';

const animateTitles = ref(false);

const reAnimation = () => {
    // 先关闭动画触发器
    animateTitles.value = false;
    
    nextTick(() => {
        // 然后在下一个 DOM 更新循环中重新打开，确保动画能触发
        animateTitles.value = true;
    });
};

onMounted(() => {
    // 可以在组件首次挂载时调用动画，或基于某些条件或事件来调用
    reAnimation();
});

// const reAnimation = () => {
//     console.log('reAnimation');
//     // 确保 Vue 完成 DOM 更新
//     const titlesRight = document.querySelectorAll('.titleRight');
//     const titlesLeft = document.querySelectorAll('.titleLeft');
    
    
//     // 重新触发动画
//     titlesRight.forEach(title => {
//         triggerReflow(title)
//         title.classList.remove('fadeInRight');
//         title.classList.add('fadeInRight');
//     });
    
//     titlesLeft.forEach(title => {
//         console.log('l');
//         title.classList.remove('fadeInLeft');
//         title.classList.add('fadeInLeft');
//     });
// };

const slideChange = () => {
    reAnimation();
};


</script>

<template>
    <main >
        <Swiper class="mySwiper"
            :modules="[SwiperNavigation, SwiperEffectCreative, SwiperScrollbar, SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            
            :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }"
            :pagination="{
                clickable: true,
            }"
            :effect="'fade'"
            :creative-effect="{
                
                prev: {
                    shadow: true,
                    translate: ['-100%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
            @slide-change="slideChange()"
        >
            <SwiperSlide  >
                <div class="swiper-slide swiperImg1">
                    <h1 class="title display-1 fw-bold" :class="{'fadeInRight': animateTitles, 'titleRight': true}">專業</h1>
                    <h2 class="subTitle display-3 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">影像製作</h2>
                    <h4 class="text display-10 fw-bold " :class="{'fadeInRight': animateTitles, 'titleRight': true}">短影音、數位廣告製作、產品功能影片、活動側拍、節目製作 </h4>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div class="swiper-slide swiperImg2">
                    <h1 class="title display-1 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">頂級</h1>
                    <h2 class="subTitle display-3 fw-bold " :class="{'fadeInRight': animateTitles, 'titleRight': true}">直播工程</h2>
                    <h4 class="text display-10 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">線上會議、電競賽事直播、品牌發佈會、記者會/典禮、網路節目 </h4>
                </div>               
            </SwiperSlide>
            <SwiperSlide>
                <!-- <img src="~assets/images/show.png" alt="" class="  swiperImg1" :class="{'fadeInRight': animateTitles, 'titleRight': true}"> -->
                <div class="swiper-slide swiperImg3">
                    <h1 class="title display-1 fw-bold " :class="{'fadeInRight': animateTitles, 'titleRight': true}">專屬</h1>
                    <h2 class="subTitle display-3 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">活動規劃</h2>
                    <h4 class="text  display-10 fw-bold " :class="{'fadeInRight': animateTitles, 'titleRight': true}">地推活動、主持活動、品牌發佈會、記者會/典禮、尾牙/員旅 </h4>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div class="swiper-slide swiperImg4">
                    <h1 class="title  display-1 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">高效</h1>
                    <h2 class="subTitle  display-3 fw-bold " :class="{'fadeInRight': animateTitles, 'titleRight': true}">數位行銷</h2>
                    <h4 class="text  display-10 fw-bold " :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">社群媒體、廣告投放、數據分析、口碑行銷、演藝經紀 </h4>
                </div>
            </SwiperSlide>
        </Swiper>

        <!-- 第二區塊 -->
        <div class="server bg-secondary h-100 text-white position-relative m-5">
            <div class="col-xl-6 p-5 pb-0 mb-5">
                <h1 class="mb-3" v-aos="['animate__fadeInUp']" data-aos-delay="0.25s" data-aos-duration="1s">Effective</h1>
                <!-- 電腦 -->
                <h4 class="d-sm-none d-md-none d-lg-block w-100 lh-lg" v-aos="['animate__fadeInUp']" data-aos-delay="0.4s" data-aos-duration="1s">釐清所需，加強單一項目 與客戶之間的連結，即是我們的優勢；我們會建議適合的執行方式，讓最終成果與想像的一致。</h4>
                <!-- 平板以上 -->
                <h4 class="d-sm-none d-md-block d-lg-none w-50 lh-lg">釐清所需，加強單一項目 與客戶之間的連結，即是我們的優勢；我們會建議適合的執行方式，讓最終成果與想像的一致。</h4>
                <h4 class="d-sm-block d-md-none lh-lg">釐清所需，加強單一項目 與客戶之間的連結，即是我們的優勢；我們會建議適合的執行方式，讓最終成果與想像的一致。</h4>
            </div>
            <!-- 手平板以上 -->
            <img class="position-absolute top-0 d-sm-none d-md-block h-100" src="~assets/images/hand.png" alt="" style=" width:auto;right: 3%;" v-aos="['animate__zoomIn']" data-aos-delay="1s" data-aos-duration="3s">
            <!-- 平板以上 -->
            <div class="bg-dark d-sm-none d-md-block p-5 mt-5">
                <img class="w-50" src="~assets/images/resources.png" alt="" v-aos="['animate__backInLeft']" data-aos-delay="1s" data-aos-duration="1s">
            </div>
            <!-- 手機版 -->
            <div class="bg-dark d-sm-block d-md-none p-5 mt-5 ">
                <img class="w-100" src="~assets/images/resources.png" alt="" v-aos="['animate__backInLeft']" data-aos-delay="1s" data-aos-duration="1s">
            </div>
        </div>
        <!-- <div class="row" style="max-height: 100vh;">
            <div class="col-md-2">
                <div id="history-list" class="list-group">
                    <a class="list-group-item list-group-item-action" href="#list-item-1">2022-2023</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-2">2021-2022</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-3">2020-2021</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-4">2019-2020</a>
                </div>
            </div>
            <div class="col-md-10">
                <div data-bs-spy="scroll" data-bs-target="#history-list" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                    <div class="card">
                        <div class="card-header">
                            <h2 id="list-item-1 card-title">2022 - 2023</h2>
                            <h4 class="">第三十二屆香港婕斯大學_澳門直播工程</h4>
                        </div>
                        <div class="card-body row">
                            <div class="col-6">
                                <img class=""src="~assets/images/hongkong.png" alt="">
                            </div>
                            
                            <div class="col-6">
                                <p>
                                    第三十二屆香港婕斯大學在“澳門威尼斯人度假酒店”舉辦。由我司擔任直播攝影攝影工程，與澳門當地攝影器材公司合作，為期兩日的活動直播，從前期我方的國際外聯製片與當地器材公司協調進撤場，至活動結束後的VOD素材提供。
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                
                
                <h2 id="list-item-2">2021 - 2022</h2>
                <h4 class="">艾肯遊戲動漫嘉年華活動第一、二屆</h4>
                <p>由艾肯娛樂主辦，集結『遊戲』『動漫』『同人創作』三大ACG元素，為熱愛各類二次元文化的玩家及粉絲打造一個深度交流的專屬嘉年華盛典！
                    活動內容包含二創攤商、桌遊體驗、直播節目、COS大賽、動漫表演團體。
                </p>

                <h2 id="list-item-3">2020 - 2021</h2>
                <h4 class="">共同執行 CCCE城市盃-數位科藝電競邀請賽一、二、三屆</h4>
                <p>由艾肯娛樂主辦，集結『遊戲』『動漫』『同人創作』三大ACG元素，為熱愛各類二次元文化的玩家及粉絲打造一個深度交流的專屬嘉年華盛典！
                活動內容包含二創攤商、桌遊體驗、直播節目、COS大賽、動漫表演團體。</p>

                <h2 id="list-item-4">2019 - 2020</h2>
                <h4 class="">艾肯遊戲動漫嘉年華活動第一、二屆</h4>
                <p>由艾肯娛樂主辦，集結『遊戲』『動漫』『同人創作』三大ACG元素，為熱愛各類二次元文化的玩家及粉絲打造一個深度交流的專屬嘉年華盛典！
                    活動內容包含二創攤商、桌遊體驗、直播節目、COS大賽、動漫表演團體。
                </p>
                </div>
            </div>
        </div> -->
        
        <div class="card cardBox">
            <h1 class="display-3">2022 - 2023</h1>
            <h3 class="">第三十二屆香港婕斯大學_澳門直播工程</h3><br>
            <div class="row">
                <div class="col-md-4 p-3 text-center">
                    <img src="~assets/images/hongkong.png" class="bigImg" alt="...">
                </div>
                <div class="col-md-8 p-3 banner">
                    <div class="">
                        <p class="">第三十二屆香港婕斯大學在“澳門威尼斯人度假酒店”舉辦。由我司擔任直播攝影攝影工程，與澳門當地攝影器材公司合作，為期兩日的活動直播，從前期我方的國際外聯製片與當地器材公司協調進撤場，至活動結束後的VOD素材提供。</p>
                        <div class="row" >
                            <div class="col-4"><img src="~assets/images/hongkongBanner1.png" alt="" class=""></div>
                            <div class="col-4"><img src="~assets/images/hongkongBanner2.png" alt="" class=""></div>
                            <div class="col-4"><img src="~assets/images/hongkongBanner3.png" alt="" class=""></div>
                        </div>
                        <a class=""><small class="">活動花絮由JAH合作攝影單位拍攝、剪輯</small></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card cardBox">
            <h1 class="card-title display-3">2021 - 2022</h1>
            <h3 class="card-title">Yamaha R-Series 線上兩輪名人盃</h3><br>
            <div class="row">
                <div class="col-sm-12 col-md-7 order-sm-2 order-md-1">
                    <div class="card-body">
                            <div class="row row-cols-1 row-cols-md-2 g-4 align-items-center">
                                <div class="col">
                                    <div class="card h-100 cardBanner">
                                        <a href="https://www.facebook.com/R.Dna.Club/videos/697001068361453"><img src="~assets/images/moto1.png" class="card-img-top" alt="..."></a>
                                        <div class="card-body">
                                            <h5 class="card-title">活動前選手宣傳拍攝</h5>
                                            <small class="card-text"> #14位Youtuber個人社群曝光</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 cardBanner">
                                        <a href="https://youtu.be/vUxrPKvOxrA"><img src="~assets/images/moto2.png" class="card-img-top" alt="..."></a>
                                        <div class="card-body">
                                            <h5 class="card-title">活動當日選手專訪</h5>
                                            <small class="card-text"> #賽事直播破口廣告快剪快播</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 cardBanner">
                                        <a href="https://youtu.be/vUxrPKvOxrA"><img src="~assets/images/moto3.png" class="card-img-top" alt="..."></a>
                                        <div class="card-body">
                                            <h5 class="card-title">賽後花絮宣傳片</h5>
                                            <small class="card-text"> #賽事直播破口廣告快剪快播</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100 cardBanner" >
                                        <a href="https://youtu.be/vUxrPKvOxrA"><img src="~assets/images/moto4.png" class="card-img-top" alt="..."></a>
                                        <div class="card-body">
                                            <h5 class="card-title">電競賽事直播啟動</h5>
                                            <small class="card-text"> #賽事直播破口廣告快剪快播</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col-sm-12 order-sm-1 order-md-2 col-md-5">
                    <img src="~assets/images/yamaha.png" class="img-fluid rounded-end p-1" alt="...">
                    <p class="card-text p-1">Yamaha開創在台線上擬真摩托車名人賽首例，將邀請國內多位兩輪Youtuber，參與透過擬真賽車遊戲RIDE 4，以指定「R-Series」車款挑戰世界知名賽道。電競活動當日於Yamaha台灣官方Facebook粉絲專頁「Yamaha Motor TW」線上直播。</p>
                    <a class="card-text"><small class="">JAH包含宣傳影片製作、活動側拍、電競製播工程</small></a>
                </div>
                
            </div>
        </div>

        <div class="card cardBox">
            <h1 class="card-title display-3">2020 - 2021</h1>
            <h3 class="card-title">CCCE城市盃-數位科藝電競邀請賽一、二、三屆</h3><br>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="row">
                        <div class="col-6 p-3"><img src="~assets/images/ccce.png" class="" alt="..."></div>
                        <div class="col-6 p-3">
                            <p class="card-text">CCCE城市盃-數位科藝電競邀請賽為台灣本土舉辦之電競與育才結合之活動，活動內容包含社團開展、課程設計、實驗專班設置、選手和產業人才培育、職涯就業規劃等。</p>
                            <a class="" href="https://cccedu.org/"><small class="">官方網站請點此連結</small></a>
                        </div>
                    </div>
                    <img src="~assets/images/ccceBanner.png" class="w-100 p-1" alt="..."><br>
                    <a class="card-text" href="https://youtu.be/tAPPX_5jzGI"><small class="">請點此連結觀看直播存擋</small></a>
                </div>
                <div class="col-sm-12 col-md-6 align-self-center">
                    <div class="card-body">
                        <div class="">
                            <div class="d-flex justify-content-center align-self-center">
                                <div class="card m-3 cardBanner">
                                    <a href="" class="card-img-top" alt="..."><img src="~assets/images/ccceBanner1.png" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">科藝競賽項目<br>(設計)、(企劃)、(直播)</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-self-center">
                                <div class="card m-3 cardBanner">
                                    <a href=""><img src="~assets/images/ccceBanner2.png" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">實體電競賽事</h5>
                                    </div>
                                </div>
                                <div class="card m-3 cardBanner">
                                    <a href=""><img src="~assets/images/ccceBanner3.png" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">實境宣傳節目</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card cardBox container">
            <h1 class="card-title display-3">2019 - 2020</h1>
            <h3 class="card-title">艾肯遊戲動漫嘉年華活動第一、二屆</h3><br>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row">
                        <div class="col-3 p-3"><img src="~assets/images/wecan.png" class="" alt="..."></div>
                        <div class="col-9 p-3">
                            <p class="card-text p-1">
                                由艾肯娛樂主辦，集結『遊戲』『動漫』『同人創作』三大ACG元素，為熱愛各類二次元文化的玩家及粉絲打造一個深度交流的專屬嘉年華盛典！<br>
                                活動內容包含二創攤商、桌遊體驗、直播節目、COS大賽、動漫表演團體。
                            </p>
                            <small class="">JAH製作團隊包含活動流程規劃、宣傳廣告製作、直播攝影工程</small>
                            <div class="d-flex mt-4">
                                <a class="me-5" href="https://cccedu.org/"><small class="">官方網站</small></a>
                                <a class="" href="https://youtu.be/tAPPX_5jzGI"><small class="">新聞連結</small></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 row justify-content-center">
                    <div class="col-4">
                        <div class="card cardBanner mx-auto">
                            <a href=""><img src="~assets/images/wecanBanner1.png" class="card-img-top" alt="..."></a>
                            <div class="card-body">
                                <h5 class="card-title text-center">第一屆wecanLive遊戲動漫嘉年華精彩回顧</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card cardBanner mx-auto">
                            <a href=""><img src="~assets/images/wecanBanner2.png" class="card-img-top" alt="..."></a>
                            <div class="card-body">
                                <h5 class="card-title text-center">wecanLive遊戲動漫嘉年華宣傳影片</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card cardBanner mx-auto">
                            <a href=""><img src="~assets/images/wecanBanner3.png" class="card-img-top" alt="..."></a>
                            <div class="card-body">
                                <h5 class="card-title text-center">《大神666》張家兄弟決戰動漫嘉年華</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>