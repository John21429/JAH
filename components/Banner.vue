<script setup>
    
    
</script>

<template>
    <!-- <div class="d-flex">
        <div class="w-50" style="writing-mode: vertical-lr;">
            
        </div>
        <div class="d-flex w-50">
            <div class="banner banner1 overflow-x-hidden">
                <img class="" src="~assets/images/swiper1.png" alt="">
                <h2>專業影音</h2>
                <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
            </div>
            <div class="banner2 w-25">
                <img class="w-100" src="~assets/images/swiper1.png" alt="">
                <h2>專業影音</h2>
                <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
            </div>
            <div class="banner3 w-25">
                <img class="w-100" src="~assets/images/swiper1.png" alt="">
                <h2>專業影音</h2>
                <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
            </div>
            <div class="banner4 w-25">
                <img class="w-100" src="~assets/images/swiper1.png" alt="">
                <h2>專業影音</h2>
                <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
            </div>
        </div>
    </div> -->
    <!-- <div class="banner4">
        <div class="d-flex">
            <h1 class="bannerTitle">全方位</h1>
            <h1 class="bannerTitle pt-5">行銷方案</h1>
        </div>
        <ul>
            <li class="b4m1">
                <h2>影像</h2>
                <div class="insideBackground m1">
                    <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
                </div>
            </li>
            <li class="b4m2">
                
                <h2>活動</h2>
                <div class="insideBackground m2">
                    <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
                </div>
                
            </li>
            <li class="b4m3">
                <h2>直播</h2>
                <div class="insideBackground m3">
                    <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
                </div>
            
            </li>
            <li class="b4m4">
                
                <h2>數位</h2>
                <div class="insideBackground m4">
                    <h4>短影音、數位廣告製作、產品功能影片、活動側拍、節目製作</h4>
                </div>
                
            </li>
        </ul>
    </div> -->
    <Swiper class="mySwiper"
            :modules="[SwiperNavigation, SwiperEffectCreative, SwiperScrollbar, SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            
            :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
                prev: {
                    shadow: true,
                    translate: ['-100%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
            
        >
            <SwiperSlide class="swiper-slide" >
                <img src="~assets/images/swiper1.png" alt="" class=" swiperImg1" :class="{'fadeInRight': animateTitles, 'titleRight': true}">
                <h1 style="position: absolute;left:5%; top:10%" class="title display-1 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">專業</h1>
                <h2 style="position: absolute;left:15%; top:25%" class="subTitle display-3 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">影像製作</h2>
                <h4 style="position: absolute;left:6%; top:45%;width:32%" class="text display-10 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">短影音、數位廣告製作、產品功能影片、活動側拍、節目製作 </h4>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
                <img src="~assets/images/swiper2.png" alt="" class=" swiperImg2" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">
                <h1 style="position: absolute;right:5%; top:10%" class="title   display-1 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">專業</h1>
                <h2 style="position: absolute;right:15%; top:25%" class="subTitle   display-3 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">影像製作</h2>
                <h4 style="position: absolute;right:6%; top:45%;width:32%" class="text   display-10 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">短影音、數位廣告製作、產品功能影片、活動側拍、節目製作 </h4>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
                <img src="~assets/images/swiper1.png" alt="" class="  swiperImg1" :class="{'fadeInRight': animateTitles, 'titleRight': true}">
                <h1 style="position: absolute;left:5%; top:10%" class="title   display-1 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">專業</h1>
                <h2 style="position: absolute;left:15%; top:25%" class="subTitle   display-3 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">影像製作</h2>
                <h4 style="position: absolute;left:6%; top:45%;width:32%" class="text  display-10 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">短影音、數位廣告製作、產品功能影片、活動側拍、節目製作 </h4>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
                <img src="~assets/images/swiper2.png" alt="" class=" swiperImg2" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">
                <h1 style="position: absolute;right:5%; top:10%" class="title  display-1 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">專業</h1>
                <h2 style="position: absolute;right:15%; top:25%" class="subTitle  display-3 fw-bold text-black" :class="{'fadeInRight': animateTitles, 'titleRight': true}">影像製作</h2>
                <h4 style="position: absolute;right:6%; top:45%;width:32%" class="text  display-10 fw-bold text-black" :class="{'fadeInLeft': animateTitles, 'titleLeft': true}">短影音、數位廣告製作、產品功能影片、活動側拍、節目製作 </h4>
            </SwiperSlide>
        </Swiper>


    
</template>