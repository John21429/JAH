<script setup>
import { onMounted, nextTick, ref } from 'vue';
let showType = ref(0);

function changeType(num) {
    showType.value = num;
    console.log(showType);
}
</script>
<template>
    <div class="text-center mt-5 pt-5">
        <h1 class="lh-lg text-decoration-underline text-light">多元＋客製化的服務項目</h1>
        <h5 class="lh-base">” 讓我們用心打造專屬你的<strong class="text-decoration-underline">最佳方案</strong>”</h5>
    </div>
    <div class="row p-5 m-3">
        <div class="accordion col-md-3 rounded p-3" id="accordionExample">
            <h2 class="accordion-header text-center bg-secondary rounded-top lh-lg text-light">服務項目</h2>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        影像
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav nav-pills flex-column"  role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-video-1-tab" data-bs-toggle="pill" data-bs-target="#pills-video-1" type="button" role="tab" aria-controls="pills-video-1" aria-selected="true" @click="changeType(0)">數位廣告製作</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-video-2-tab" data-bs-toggle="pill" data-bs-target="#pills-video-2" type="button" role="tab" aria-controls="pills-video-2" aria-selected="false" @click="changeType(0)">短影音</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-video-3-tab" data-bs-toggle="pill" data-bs-target="#pills-video-3" type="button" role="tab" aria-controls="pills-video-3" aria-selected="false" @click="changeType(0)">產品功能影片</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-video-4-tab" data-bs-toggle="pill" data-bs-target="#pills-video-4" type="button" role="tab" aria-controls="pills-video-4" aria-selected="false" @click="changeType(0)">活動側拍</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-video-5-tab" data-bs-toggle="pill" data-bs-target="#pills-video-5" type="button" role="tab" aria-controls="pills-video-5" aria-selected="false" @click="changeType(0)">節目製作</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        活動
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-pills flex-column" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link videoive" id="pills-video-6-tab" data-bs-toggle="pill" data-bs-target="#pills-video-6" type="button" role="tab" aria-controls="pills-video-6" aria-selected="false" @click="changeType(1)">數位廣告製作</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-video-7-tab" data-bs-toggle="pill" data-bs-target="#pills-video-7" type="button" role="tab" aria-controls="pills-video-7" aria-selected="false" @click="changeType(1)">短影音</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-video-8-tab" data-bs-toggle="pill" data-bs-target="#pills-video-8" type="button" role="tab" aria-controls="pills-video-8" aria-selected="false" @click="changeType(1)">產品功能影片</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-video-9-tab" data-bs-toggle="pill" data-bs-target="#pills-video-9" type="button" role="tab" aria-controls="pills-video-9" aria-selected="false" @click="changeType(1)">活動側拍</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-video-10-tab" data-bs-toggle="pill" data-bs-target="#pills-video-10" type="button" role="tab" aria-controls="pills-video-10" aria-selected="false" @click="changeType(1)">節目製作</button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        直播
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav nav-pills flex-column" id="pills-live-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link liveive" id="pills-live-1-tab" data-bs-toggle="pill" data-bs-target="#pills-live-1" type="button" role="tab" aria-controls="pills-live-1" aria-selected="false" @click="changeType(2)">數位廣告製作</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-live-2-tab" data-bs-toggle="pill" data-bs-target="#pills-live-2" type="button" role="tab" aria-controls="pills-live-2" aria-selected="false" @click="changeType(2)">短影音</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-live-3-tab" data-bs-toggle="pill" data-bs-target="#pills-live-3" type="button" role="tab" aria-controls="pills-live-3" aria-selected="false" @click="changeType(2)">產品功能影片</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-live-4-tab" data-bs-toggle="pill" data-bs-target="#pills-live-4" type="button" role="tab" aria-controls="pills-live-4" aria-selected="false" @click="changeType(2)">活動側拍</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-live-5-tab" data-bs-toggle="pill" data-bs-target="#pills-live-5" type="button" role="tab" aria-controls="pills-live-5" aria-selected="false" @click="changeType(2)">節目製作</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content col-md-9" id="pills-tabContent">
            <!-- 影像 -->
            <div v-show="showType == 0" class="tab-pane fade show active" id="pills-video-1" role="tabpanel" aria-labelledby="pills-video-1-tab" tabindex="0">
                <h2 class="lh-lg text-light">數位廣告製作</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/swiper1.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>商品形象廣告</h5>
                        <h4 class="lh-lg text-light">品牌形象</h4>
                        <h5>企業社群媒體形象短片</h5>
                        <h4 class="lh-lg text-light">質感影片</h4>
                        <h5>個人動態名片製作</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 我們提供全方位的專業製片服務，從客戶溝通、影片設計、編排到預算規劃，都秉持最專業的態度執行。 ”<br>” 我們相信，只有每個環節都達到完美，客戶才能展現理想中的影片效果。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-4">量身定做</h5>
                        <p class="lh-lg">無論是小型店家還是大型企業，只要您有需求，我們便會量身定制影片製作計劃，確保滿足您的期望，並超過一百分。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3"><img class="img-fluid"  src="~assets/images/swiper3.jpg" alt=""></div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-2" role="tabpanel" aria-labelledby="pills-video-2-tab" tabindex="0">2</div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-3" role="tabpanel" aria-labelledby="pills-video-3-tab" tabindex="0">3</div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-4" role="tabpanel" aria-labelledby="pills-video-4-tab" tabindex="0">4</div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-5" role="tabpanel" aria-labelledby="pills-video-5-tab" tabindex="0">5</div>

            <!-- 活動 -->
            <div v-show="showType == 1" class="tab-pane fade" id="pills-video-6" role="tabpanel" aria-labelledby="pills-video-6-tab" tabindex="-1">6</div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-video-7" role="tabpanel" aria-labelledby="pills-video-7-tab" tabindex="-1">7</div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-video-8" role="tabpanel" aria-labelledby="pills-video-8-tab" tabindex="-1">8</div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-video-9" role="tabpanel" aria-labelledby="pills-video-9-tab" tabindex="-1">9</div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-video-10" role="tabpanel" aria-labelledby="pills-video-10-tab" tabindex="-1">10</div>

            <!-- 直播 -->
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-1" role="tabpanel" aria-labelledby="pills-live-1-tab" tabindex="0">1</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-2" role="tabpanel" aria-labelledby="pills-live-2-tab" tabindex="0">2</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-3" role="tabpanel" aria-labelledby="pills-live-3-tab" tabindex="0">3</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-4" role="tabpanel" aria-labelledby="pills-live-4-tab" tabindex="0">4</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-5" role="tabpanel" aria-labelledby="pills-live-5-tab" tabindex="0">5</div>
        </div>
    </div>
</template>
