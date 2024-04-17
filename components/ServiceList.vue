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
    <div class="row p-lg-5 m-lg-3 p-2">
        <div class="accordion col-lg-3 col-md-5 rounded p-lg-3" id="accordionExample">
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
                            <button class="nav-link" id="pills-act-1-tab" data-bs-toggle="pill" data-bs-target="#pills-act-1" type="button" role="tab" aria-controls="pills-act-1" aria-selected="false" @click="changeType(1)">地推活動</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-act-2-tab" data-bs-toggle="pill" data-bs-target="#pills-act-2" type="button" role="tab" aria-controls="pills-act-2" aria-selected="false" @click="changeType(1)">主持活動</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-act-3-tab" data-bs-toggle="pill" data-bs-target="#pills-act-3" type="button" role="tab" aria-controls="pills-act-3" aria-selected="false" @click="changeType(1)">品牌發佈會</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-act-4-tab" data-bs-toggle="pill" data-bs-target="#pills-act-4" type="button" role="tab" aria-controls="pills-act-4" aria-selected="false" @click="changeType(1)">記者會 / 典禮</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-act-5-tab" data-bs-toggle="pill" data-bs-target="#pills-act-5" type="button" role="tab" aria-controls="pills-act-5" aria-selected="false" @click="changeType(1)">尾牙 / 員旅</button>
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
                        <ul class="nav nav-pills flex-column" role="tablist">
                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link liveive" id="pills-live-1-tab" data-bs-toggle="pill" data-bs-target="#pills-live-1" type="button" role="tab" aria-controls="pills-live-1" aria-selected="false" @click="changeType(2)">線上會議</button>
                            </li> -->
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-live-2-tab" data-bs-toggle="pill" data-bs-target="#pills-live-2" type="button" role="tab" aria-controls="pills-live-2" aria-selected="false" @click="changeType(2)">電競賽事</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-live-3-tab" data-bs-toggle="pill" data-bs-target="#pills-live-3" type="button" role="tab" aria-controls="pills-live-3" aria-selected="false" @click="changeType(2)">品牌發佈會</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-live-4-tab" data-bs-toggle="pill" data-bs-target="#pills-live-4" type="button" role="tab" aria-controls="pills-live-4" aria-selected="false" @click="changeType(2)">記者會 / 典禮</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-live-5-tab" data-bs-toggle="pill" data-bs-target="#pills-live-5" type="button" role="tab" aria-controls="pills-live-5" aria-selected="false" @click="changeType(2)">網路節目</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        行銷
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav nav-pills flex-column" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-1-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-1" type="button" role="tab" aria-controls="pills-mkt-1" aria-selected="false" @click="changeType(3)">社群媒體</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-2-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-2" type="button" role="tab" aria-controls="pills-mkt-2" aria-selected="false" @click="changeType(3)">廣告投放</button>
                            </li>
                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-3-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-3" type="button" role="tab" aria-controls="pills-mkt-3" aria-selected="false" @click="changeType(3)">數據分析</button>
                            </li> -->
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-4-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-4" type="button" role="tab" aria-controls="pills-mkt-4" aria-selected="false" @click="changeType(3)">口碑行銷</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-5-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-5" type="button" role="tab" aria-controls="pills-mkt-5" aria-selected="false" @click="changeType(3)">演藝經紀</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content col-lg-9 col-md-7" id="pills-tabContent">
            <!-- 影像 -->
            <div v-show="showType == 0" class="tab-pane fade show active" id="pills-video-1" role="tabpanel" aria-labelledby="pills-video-1-tab" tabindex="0">
                <!-- 廣告製作 -->
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
                        <h5 class="my-4">量身定做</h5>
                        <p class="lh-lg">無論是小型店家還是大型企業，只要您有需求，我們便會量身定制影片製作計劃，確保滿足您的期望，並超過一百分。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img class="img-fluid"  src="~assets/images/swiper3.jpg" alt="">
                        <h3 class="lh-lg text-center text-light m-3">" 精彩 呈現您的品牌 "</h3>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-2" role="tabpanel" aria-labelledby="pills-video-2-tab" tabindex="0">
                <!-- 短影音 -->
                <h2 class="lh-lg text-light">短影音</h2>
                <div class="row">
                    <!-- <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <small>#腳本到銀幕，專業創意無限</small>
                        <small>#捕捉每一刻，創造無限可能</small>
                        <small>#從策劃到剪輯，一氣呵成</small>
                        <small>#觀點獨特，每一剪都是藝術</small>
                        <small>#精彩後製，讓畫面說話</small>
                    </div> -->
                    <div class="col-12 pe-lg-3 pb-lg-3"><h5 class="lh-lg">” 我們的專業團隊搭配頂尖設備，精心製作每部作品，從腳本到拍攝，確保完美呈現品牌精神。 ”<br>” 我們相信，只有每個環節都達到完美，客戶才能展現理想中的影片效果。 ”</h5></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="">關鍵工具</h5>
                        <small class="text-body-secondary">#腳本到銀幕，專業創意無限</small>
                        <p class="lh-lg mt-2">在這個快節奏的數位時代，短影音已經成為傳達信息、吸引觀眾、並加強品牌影響力的關鍵工具。我們專注於提供全方位的短影音製作服務，從創意發想、腳本撰寫、拍攝製作到後期剪輯和效果處理，每一步都追求完美。</p>
                        <img src="~assets/images/serviceList/shortVideo.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/serviceList/shortVideo1.jpg" class="img-fluid" alt=""/>
                        <h5 class="mt-3">絕佳夥伴</h5>
                        <small class="text-body-secondary">#從策劃到剪輯，一氣呵成</small>
                        <p class="lh-lg mt-2">無論是推廣企業品牌，還是講述一個引人注目的故事，我們的短影音製作服務都能幫助您的品牌在競爭激烈的市場中脫穎而出。我們不僅僅是您的服務提供商，更是您在視覺創意旅程中的夥伴。讓我們一起攜手，將您的想法轉化為能夠觸動人心的影片，共創卓越成果。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-3" role="tabpanel" aria-labelledby="pills-video-3-tab" tabindex="0">
                <h2 class="lh-lg text-light">產品功能影音</h2>
                <div class="row">
                    <div class="col-12">
                        <img src="~assets/images/swiper4.png" class="img-fluid" alt=""/>
                        <div class="d-flex">
                            <small class="text-body-secondary me-4">#每一個產品，都有一個故事</small>
                            <small class="text-body-secondary me-4 d-none d-lg-block">#精細剪輯，功能一目了然</small>
                            <small class="text-body-secondary me-4 d-none d-lg-block">#功能展示，讓你的產品說話</small>
                        </div>
                    </div>
                    <!-- <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5></h5>
                        <h4 class="lh-lg text-light"></h4>
                        <h5>每一個產品，都有一個故事</h5>
                        <h4 class="lh-lg text-light">精細剪輯，功能一目了然</h4>
                        <h5></h5>
                    </div> -->
                    <div class="col-12 text-center p-3 p-lg-5"><h6 class="lh-lg">” 從微妙的產品細節到整體應用演示，我們都能夠提供高質量的視覺表達，幫助您的產品在市場上脫穎而出。 ”<br>” 結合最先進的攝影設備和剪輯技術，確保每個功能都能被清晰且吸引人地呈現。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-3">讓產品說話</h5>
                        <p class="lh-lg">在競爭激烈的市場中，產品功能影片是展示您產品優勢的關鍵。我們提供專業的產品功能影片製作服務，從概念規劃、腳本撰寫到影片拍攝和後期製作，每一步驟都致力於精確展現您產品的獨特功能和應用。</p>
                        <img src="~assets/images/serviceList/product.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/serviceList/product1.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-3">展現產品力</h5>
                        <p class="lh-lg">無論您是希望解釋複雜的技術細節，還是展示產品的實際應用，我們都能提供量身定製的解決方案。讓我們協助您通過強有力的視覺敘事，增強客戶對產品功能的理解和興趣，從而推動銷售和品牌忠誠度。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-4" role="tabpanel" aria-labelledby="pills-video-4-tab" tabindex="0">
                <h2 class="lh-lg text-light">活動側拍</h2>
                <div class="row">
                    <h5 class="text-center mb-3">捕捉每一瞬間，記錄無限回憶</h5>
                    <div class="col-12">
                        <div class="row">
                            <h4 class="text-light col-1 d-none d-lg-block" style="writing-mode:vertical-rl;">活動的每個角落，我們都細心記錄</h4>
                            <img src="~assets/images/liveShow.jpg" class="img-fluid col-lg-8" alt=""/>
                            <h4 class="text-light col-1 d-none d-lg-block" style="writing-mode:vertical-rl;">紀錄影片，完美捕捉您的重要時刻</h4>
                        </div>
                    </div>
                    <h5 class="text-center mt-3">從前期策劃到後期呈現，精彩無遺</h5>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 選擇我們，讓您的每一場活動都留下動人的視覺記錄，珍藏每一刻的感動與價值 ”<br>” 您的活動影片將變成一部藝術作品，不僅能回味無窮，更是將您的品牌故事分享給更廣泛觀眾的最佳方式。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">紀錄感動的瞬間</h5>
                        <p class="lh-lg">無論是大型企業活動、家庭聚會還是公共表演，我們都能確保每一個重要瞬間都被紀錄下來。從動態的舞台表演到觀眾的互動反應，每一個鏡頭都傳達著活動的精神與情感。</p>
                        <img src="~assets/images/serviceList/boxing.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/serviceList/activityShow.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">捕捉關鍵的時刻</h5>
                        <p class="lh-lg">活動側拍紀錄影片不僅是捕捉事件，更是記錄情感與故事的藝術。我們提供從預規劃、腳本發展到影片拍攝及後期製作的全程專業服務，專注於捕捉那些定義您活動的關鍵時刻</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-5" role="tabpanel" aria-labelledby="pills-video-5-tab" tabindex="0">
                <h2 class="lh-lg text-light">節目製作</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>從靈感到實現，塑造每一幕的完美</h5>
                        <h4 class="lh-lg text-light">每一刻都是精彩，每一幕都值得記錄</h4>
                        <h5>專業節目製作，精準講述您的故事</h5>
                        <h4 class="lh-lg text-light">捕捉精彩，創造記憶，您的節目我們的承諾</h4>
                        <h5>創意腳本，精編剪輯，展現視覺魅力</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 選擇我們讓您的創意不再有界限，將您的想法轉化為影響深遠的視覺作品，讓每個觀眾都留下深刻的印象。 ”<br>” 精心的剪輯與特效加工將使您的節目在競爭激烈的市場中脫穎而出，吸引廣大觀眾並贏得他們的心。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">精彩可期</h5>
                        <p class="lh-lg">一個出色的節目製作可以顯著提升您的品牌形象並吸引觀眾。我們專業的節目製作服務涵蓋了從創意發想、腳本撰寫到場景設計、拍攝及後期剪輯等所有階段，旨在為您提供一站式的解決方案。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">完美團隊</h5>
                        <p class="lh-lg">我們的團隊由經驗豐富的製片人、編劇、導演、攝影師及後期製作人員組成，他們對於每一個細節都追求完美，確保每一個鏡頭都能精確地表達預期的情感與信息。無論是現場直播、訪談節目、教育性節目或娛樂性節目，我們都能根據您的具體需求提供量身定制的服務。</p>
                    </div>
                </div>
            </div>

            <!-- 活動 -->
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-1" role="tabpanel" aria-labelledby="pills-act-1-tab" tabindex="-1">
                <h2 class="lh-lg text-light">地推活動</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/wecanBanner1.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>宣傳您的品牌，快速推廣，見證效果</h5>
                        <h4 class="lh-lg text-light">精準規劃，專業執行，活動新境界</h4>
                        <h5>創意腳本，完美執行，效果加倍</h5>
                        <h4 class="lh-lg text-light">地推專家，效果顯著</h4>
                        <h5>從策劃到實施，活動一體化解決方案</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 團隊擁有豐富的市場活動經驗，能夠根據您的品牌需求和市場趨勢，設計具有創新性和吸引力的地推活動。 ”<br>” 提供全面的規劃服務，從活動策劃、人員配置到腳本設計，每一步都精心策略，確保您的品牌信息精確傳達給目標群體。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">全方位推廣設計</h5>
                        <p class="lh-lg">在當今市場營銷的多元化世界中，地推活動以其直接與消費者互動的能力脫穎而出。無論是產品推介、品牌宣傳還是特定節日促銷，我們都能提供包括場地選擇、人員培訓、活動物料製作和實時反饋追蹤的全方位服務。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">激發品牌力</h5>
                        <p class="lh-lg">加上我們獨特的腳本設計，確保每次互動都能激發消費者的興趣與參與感，從而增強品牌忠誠度和市場影響力。選擇我們的地推活動服務，讓您的品牌在激烈的市場競爭中脫穎而出，達到最佳的推廣效果。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-2" role="tabpanel" aria-labelledby="pills-act-2-tab" tabindex="-1">
                <h2 class="lh-lg text-light">主持活動</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/show.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>精彩由此開始，專業主持人，完美活動</h5>
                        <h4 class="lh-lg text-light">每個環節，精心策劃，專業主持帶動全場</h4>
                        <h5>讓每一場活動，都成為難忘的經典</h5>
                        <h4 class="lh-lg text-light">選用頂尖主持，流程無縫，活動效果極致</h4>
                        <h5>活動成功的秘密，專業主持人的完美演繹</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 我們擁有多位經驗豐富的主持人，他們不僅具有出色的語言表達能力和舞台掌控力， ”<br>” 還能夠根據不同活動的特點和需求，進行個性化的互動和引導，確保活動氛圍活躍，信息傳達有效。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">經驗豐富</h5>
                        <p class="lh-lg">從企業年會、產品發布會到大型娛樂活動，無論您的需求如何，我們都能提供專業的規劃建議和執行方案，確保您的活動流暢且印象深刻。選擇我們的主持活動規劃服務，讓您的每一場活動都成為與眾不同的亮點，獲得參與者的一致好評。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">行雲流水</h5>
                        <p class="lh-lg">一場成功的活動離不開出色的主持人和周到的活動規劃。我們提供一站式的活動主持服務，從主持人選用、活動流程設計到現場執行監督，我們的專業團隊確保每一個細節都達到完美。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-3" role="tabpanel" aria-labelledby="pills-act-3-tab" tabindex="-1">
                <h2 class="lh-lg text-light">品牌發佈會</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/hongkongBanner2.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>讓品牌閃耀，專業發佈，卓越展現</h5>
                        <h4 class="lh-lg text-light">每個細節，都是品牌力量的展現</h4>
                        <h5>精心策劃，專業主持，品牌發佈新高度</h5>
                        <h4 class="lh-lg text-light">從腳本到舞台，打造品牌發佈的極致體驗</h4>
                        <h5>主持專業，策劃完美，品牌發佈無縫對接</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 深入理解市場趨勢和品牌需求，能夠根據您的獨特定位和目標觀眾，量身定制發佈會的每個環節。 ”<br>” 從活動主題的創意發想到現場執行的細節管理，我們都將保證活動的流暢與專業，確保信息的有效傳達。”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">形象打造</h5>
                        <p class="lh-lg">一場精彩的品牌發佈會能夠顯著提升品牌形象並吸引公眾的目光。我們提供全面的品牌發佈會活動規劃服務，包括主持人選用、司儀流程規劃以及腳本設計，旨在為您的品牌創造令人難忘的發佈體驗。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">精心設計</h5>
                        <p class="lh-lg">我們選用具有豐富經驗和高度專業素質的主持人，搭配精心設計的腳本和流程，使得每一場發佈會都能精準地展現品牌的核心價值與未來願景。選擇我們的服務，讓您的品牌發佈會成為業界的焦點，獲得成功與回響。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-4" role="tabpanel" aria-labelledby="pills-act-4-tab" tabindex="-1">
                <h2 class="lh-lg text-light">記者會 / 典禮</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/hongkongBanner2.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>專業記者會，展現您的亮點，塑造公眾形象</h5>
                        <h4 class="lh-lg text-light">精緻典禮，從場地到流程，完美每一刻</h4>
                        <h5>精心策劃，完美執行，打造新聞焦點</h5>
                        <h4 class="lh-lg text-light">記者會成功的秘密，我們的專業規劃</h4>
                        <h5>每一場典禮，都是品牌故事的開始</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 能夠根據您的具體需求，選擇最合適的場地並進行創意佈置，從而符合活動主題並增強活動的吸引力。 ”<br>” 無論是新產品發布、重大合作公告還是其他重要典禮，我們都會根據活動性質設計合適的流程，確保活動的順利進行。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">印象加分</h5>
                        <p class="lh-lg">在當代媒體密集的時代，一場精心規劃的記者會或典禮是展現企業形象和傳遞關鍵信息的重要方式。我們提供全面的記者會和典禮規劃服務，涵蓋流程設計、場地選擇、場地佈置以及腳本撰寫，確保您的活動能夠吸引媒體關注並留下深刻印象。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">話題焦點</h5>
                        <p class="lh-lg">我們的專業編劇將為您的活動量身打造腳本，從開場白到活動高潮，每一個細節都旨在強化信息傳達和觀眾互動。選擇我們的服務，讓您的記者會或典禮成為話題中心，有效傳達您的品牌故事，達到最佳的公關效果。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-5" role="tabpanel" aria-labelledby="pills-act-5-tab" tabindex="-1">
                <h2 class="lh-lg text-light">尾牙 / 員旅</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between p-sm-4 text-sm-center">
                        <h5>尾牙盛宴，精彩由我們規劃</h5>
                        <h4 class="lh-lg text-light">精選場地，專業佈置，讓員工旅遊更難忘</h4>
                        <h5>每一場活動，都是一次團隊凝聚的旅程</h5>
                        <h4 class="lh-lg text-light">打造非凡體驗，讓員工旅遊變成傳奇</h4>
                        <h5>從場地到娛樂，精心規劃您的完美尾牙</h5>
                    </div>
                    <div class="col-12 text-md-center p-md-5 p-sm-1 "><h6 class="lh-lg">” 豐富的活動策劃經驗，能夠根據您的企業文化和特定需求，量身定制每一場活動。 ”<br>” 提供最適合的場地選擇和創意佈置方案，營造出既舒適又激勵人心的環境。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">團隊凝聚</h5>
                        <p class="lh-lg">尾牙和員工旅遊不僅是放鬆和慶祝的時刻，更是加強員工關係和提升團隊凝聚力的重要活動。我們提供一站式的活動策劃服務，從主持人選用、活動設計到場地選用和場地佈置，確保每一個細節都完美無缺。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">回味無窮</h5>
                        <p class="lh-lg">專業主持人將確保活動流程順暢且充滿樂趣，從互動遊戲到頒獎典禮，每一環都讓參與者感到愉快和值得。選擇我們的服務，讓您的尾牙和員工旅遊成為員工間交流、共融的美好時刻，進一步提升員工的幸福感和對公司的忠誠度。</p>
                    </div>
                </div>
            </div>

            <!-- 直播 -->
            <!-- <div v-show="showType == 2" class="tab-pane fade" id="pills-live-1" role="tabpanel" aria-labelledby="pills-live-1-tab" tabindex="0">1</div> -->
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-2" role="tabpanel" aria-labelledby="pills-live-2-tab" tabindex="0">
                <h2 class="lh-lg text-light">電競賽事</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>極速零延遲，專業直播，捕捉每一刻精彩</h5>
                        <h4 class="lh-lg text-light">無縫直播體驗，專業拍攝每一瞬間</h4>
                        <h5>高級設備，頂尖導播，電競賽事直播的首選</h5>
                        <h4 class="lh-lg text-light">精準直播，專業技術，賽事體驗升級</h4>
                        <h5>高效直播，完美呈現，電競戰場一手掌握</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 我們的專業導播團隊具有豐富的大型活動直播經驗，精通各種直播技巧，能夠即時捕捉並突出比賽中的高光時刻。 ”<br>” 混音和導播技術，每一樣都是精心選擇，以保證影像和聲音的質量達到最高標準。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">高光時刻</h5>
                        <p class="lh-lg">在電競的世界裡，每一秒都充滿了轉折與激動人心的瞬間。我們提供專業的電競賽事直播服務，配備最先進的高級設備和專業導播團隊，確保直播過程中零延遲、無縫接軌，讓觀眾無論身在何處都能感受到賽場上的每一分鐘激情與緊張。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">完美呈現</h5>
                        <p class="lh-lg">選擇我們的電競賽事直播工程，您的比賽將轉化為一場視覺盛宴，吸引更多的觀眾，提高賽事的關注度和影響力。無論是國際賽事還是地方比賽，我們都能提供量身定制的直播解決方案，確保每一場賽事都能完美呈現，滿足所有電競愛好者的期待。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-3" role="tabpanel" aria-labelledby="pills-live-3-tab" tabindex="0">
                <h2 class="lh-lg text-light">品牌發佈會</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>專業導播操刀，高級設備支持，品牌發佈高效傳遞</h5>
                        <h4 class="lh-lg text-light">專業導播，品牌形象全新展示</h4>
                        <h5>精準設備選擇，零延遲直播，完美呈現每一刻</h5>
                        <h4 class="lh-lg text-light">頂級的直播，讓您的品牌閃耀全球</h4>
                        <h5>品牌發佈，專業拍攝，直播技術的藝術</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 您的品牌發佈會將轉化為一場全球性的視覺盛宴，吸引更廣泛的觀眾群，增強品牌影響力。 ”<br>” 在競爭激烈的市場中脫穎而出。讓我們助力您的品牌，實現信息的全球傳播。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">全球直播</h5>
                        <p class="lh-lg">在今日的數字化時代，一場成功的品牌發佈會不僅需要出色的內容，更需技術的支持來確保信息的有效傳遞。我們提供專業的品牌發佈會直播工程服務，從高級設備選擇到專業導播操作，每一環節都致力於將您的品牌以最佳方式展現給全球觀眾。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">頂級設備</h5>
                        <p class="lh-lg">使用最新的直播技術和零延遲的傳輸設備，我們保證直播過程中的每一個畫面都清晰流暢，無論是產品展示還是重要發言，都能精確地捕捉並傳達給觀眾。我們的專業團隊具備豐富的直播經驗，能夠根據您的具體需求，提供定制化的直播策劃和執行方案。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-4" role="tabpanel" aria-labelledby="pills-live-4-tab" tabindex="0">
                <h2 class="lh-lg text-light">記者會 / 典禮</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>專業導播，高級設備，每個角度都是亮點</h5>
                        <h4 class="lh-lg text-light">精彩呈現，專業技術支持</h4>
                        <h5>流程精準規劃，專業拍攝，典禮直播的首選</h5>
                        <h4 class="lh-lg text-light">活動高點全收錄，技術細節掌握</h4>
                        <h5>頂級設備，高效直播，讓典禮無國界</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 我們的直播工程服務提供一流的專業導播、高級設備及精確的流程規劃。 ”<br>” 確保您的活動在每一個細節上都能達到最高標準。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">先進技術</h5>
                        <p class="lh-lg">通過使用最先進的攝影設備和編導技術，我們能夠捕捉並傳達每一個重要瞬間，無論是重大公告還是活動亮點，都將被完美記錄並傳播到全世界。選擇我們的直播工程服務，讓您的典禮和記者會達到新的高度，廣泛影響並吸引全球觀眾。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">經驗豐富</h5>
                        <p class="lh-lg">我們的專業團隊擁有直播大型活動的經驗，從活動前的準備到活動實施的每一步，都有詳盡的計劃和備份方案。無論是場地的選擇、視覺設計還是技術支持，我們都能提供最優質的服務，確保直播過程中的畫面和音質清晰、流暢，無任何技術障礙。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-5" role="tabpanel" aria-labelledby="pills-live-5-tab" tabindex="0">
                <h2 class="lh-lg text-light">網路節目</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>專業導播引領，流程完美規劃，網路節目直播專家</h5>
                        <h4 class="lh-lg text-light">精確拍攝，每一刻直播都精彩無比</h4>
                        <h5>從腳本到畫面，專業呈現，創造網路直播新經典</h5>
                        <h4 class="lh-lg text-light">高效直播，網路節目影響力倍增</h4>
                        <h5>完美直播，無縫交接，每一節目都是視覺盛宴</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 您的網路節目將擁有無與倫比的視覺效果和聲音質量，同時提供給觀眾一個流暢且互動性強的觀看體驗。 ”<br>” 讓我們一起打造令人難忘的網路直播節目，拓展觀眾群，提升品牌影響力。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">直播專家</h5>
                        <p class="lh-lg">在這個數位內容爆炸的時代，網路節目的直播成為了吸引觀眾、增加互動的重要方式。我們提供全方位的網路節目直播工程服務，涵蓋專業導播、高級設備運用、精準的拍攝技術、周到的流程規劃及創意腳本設計，確保每一次直播都能達到最佳表現。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">高效應變</h5>
                        <p class="lh-lg">我們的專業團隊由業界頂尖的導播和技術人員組成，擁有豐富的直播經驗和創意能力，能夠應對各種直播挑戰，從複雜的技術設置到緊張的現場調度。無論是談話節目、遊戲直播、教育講座還是娛樂表演，我們都能提供量身定制的解決方案，讓您的節目在網路上脫穎而出。</p>
                    </div>
                </div>
            </div>

            <!-- 數位行銷 -->
            <div v-show="showType == 3" class="tab-pane fade" id="pills-mkt-1" role="tabpanel" aria-labelledby="pills-mkt-1-tab" tabindex="0">
                <h2 class="lh-lg text-light">社群媒體</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>精準內容，瞬間引爆你的社群力量</h5>
                        <h4 class="lh-lg text-light">讓每一篇文章，都觸動粉絲的心</h4>
                        <h5>社群互動，我們讓您的品牌更親民</h5>
                        <h4 class="lh-lg text-light">文章到互動，我們精通每一步</h4>
                        <h5>建立連結，讓您的社群網絡活躍起來</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 為您的品牌量身打造吸引人的內容策略，並通過引人入勝的文章加強與目標群體的連接。 ”<br>” 注重粉絲的互動管理，確保每一次互動都能增進粉絲對品牌的好感和忠誠度。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">脫穎而出</h5>
                        <p class="lh-lg">社群媒體已成為企業與客戶溝通的重要橋樑。我們專業的社群媒體經營團隊提供從內容創建、文章撰寫到粉絲互動的全面服務，幫助您的品牌在競爭激烈的市場中脫穎而出</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">回味無窮</h5>
                        <p class="lh-lg">無論您希望提高品牌知名度、增強客戶忠誠度，還是推動銷售，我們的社群媒體管理服務都能提供有效的解決方案。選擇我們，讓您的社群媒體帳號成為品牌故事的生動舞台，創造持久的品牌價值。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 3" class="tab-pane fade" id="pills-mkt-2" role="tabpanel" aria-labelledby="pills-mkt-2-tab" tabindex="0">
                <h2 class="lh-lg text-light">廣告投放</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>精準廣告，高效預算，實現您的市場目標</h5>
                        <h4 class="lh-lg text-light">專業投放策略，讓每一分預算都產生價值</h4>
                        <h5>超越目標，創造機會，您的品牌，我們的承諾</h5>
                        <h4 class="lh-lg text-light">從策略到實施，讓您的廣告投放無憂</h4>
                        <h5>優化預算，精確投放，提升您的廣告效益</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 您將得到一個完整的廣告解決方案，不僅提升品牌知名度和市場份額，同時也最大化您的投資效益。 ”<br>” 讓我們一起打造有影響力的廣告，激發市場潛力，實現業務增長。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">最大效能</h5>
                        <p class="lh-lg">一場成功的廣告投放可以顯著提升品牌的視覺影響力並直接促進銷售。我們提供全面的廣告投放服務，包括廣告規劃、預算管理和投放目標設計，確保您的廣告活動能在正確的時間、正確的地點以及對的人群中發揮最大效能。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">精準投放</h5>
                        <p class="lh-lg">我們的專業團隊擁有豐富的市場經驗和數據分析能力，能夠根據您的業務需求和市場趨勢，設計出最合適的廣告投放策略。從選擇適合的廣告平台到確定精確的目標受眾，再到預算的優化配置，我們確保每一筆投資都能帶來最佳的回報。</p>
                    </div>
                </div>
            </div>
            <!-- <div v-show="showType == 3" class="tab-pane fade" id="pills-mkt-3" role="tabpanel" aria-labelledby="pills-mkt-3-tab" tabindex="0">3</div> -->
            <div v-show="showType == 3" class="tab-pane fade" id="pills-mkt-4" role="tabpanel" aria-labelledby="pills-mkt-4-tab" tabindex="0">
                <h2 class="lh-lg text-light">廣告投放</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>精準廣告，高效預算，實現您的市場目標</h5>
                        <h4 class="lh-lg text-light">專業投放策略，讓每一分預算都產生價值</h4>
                        <h5>超越目標，創造機會，您的品牌，我們的承諾</h5>
                        <h4 class="lh-lg text-light">從策略到實施，讓您的廣告投放無憂</h4>
                        <h5>優化預算，精確投放，提升您的廣告效益</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 您將得到一個完整的廣告解決方案，不僅提升品牌知名度和市場份額，同時也最大化您的投資效益。 ”<br>” 讓我們一起打造有影響力的廣告，激發市場潛力，實現業務增長。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">最大效能</h5>
                        <p class="lh-lg">一場成功的廣告投放可以顯著提升品牌的視覺影響力並直接促進銷售。我們提供全面的廣告投放服務，包括廣告規劃、預算管理和投放目標設計，確保您的廣告活動能在正確的時間、正確的地點以及對的人群中發揮最大效能。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">精準投放</h5>
                        <p class="lh-lg">我們的專業團隊擁有豐富的市場經驗和數據分析能力，能夠根據您的業務需求和市場趨勢，設計出最合適的廣告投放策略。從選擇適合的廣告平台到確定精確的目標受眾，再到預算的優化配置，我們確保每一筆投資都能帶來最佳的回報。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 3" class="tab-pane fade" id="pills-mkt-5" role="tabpanel" aria-labelledby="pills-mkt-5-tab" tabindex="0">
                <h2 class="lh-lg text-light">口碑行銷</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>策略導向，打造口碑，成就品牌傳奇</h5>
                        <h4 class="lh-lg text-light">精準預算規劃，選擇最佳網紅，秒變熱搜</h4>
                        <h5>分析客群，定制行銷，口碑傳播一觸即發</h5>
                        <h4 class="lh-lg text-light">客群洞察，策略口碑建立，推動品牌成長</h4>
                        <h5>合作網紅，創造話題，口碑效應顯著</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 讓我們一起塑造品牌的獨特故事，透過有效的口碑行銷策略，實現品牌價值的最大化。 ”<br>” 我們相信，精確的客群分析與創新的行銷方法是提升品牌口碑的核心。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="my-4">策略規劃</h5>
                        <p class="lh-lg">口碑行銷是品牌建立和維護與消費者關係的關鍵策略。我們專注於提供全方位的口碑行銷服務，包括策略規劃、預算分配、網紅合作選擇以及深入的客群分析，確保您的品牌能在競爭激烈的市場中突出重圍。</p>
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <img src="~assets/images/sharkingHand.jpg" class="img-fluid" alt=""/>
                        <h5 class="my-4">品牌效力</h5>
                        <p class="lh-lg">我們的專業團隊具備深厚的市場洞察力和豐富的行銷經驗，能夠根據品牌特性和目標市場，制定出最適合的行銷策略。通過與適合的網紅合作，我們不僅能幫助品牌建立正面的公眾形象，還能有效擴大品牌影響力並吸引目標客群</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
