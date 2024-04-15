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
                        行銷
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav nav-pills flex-column" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link liveive" id="pills-live-1-tab" data-bs-toggle="pill" data-bs-target="#pills-live-1" type="button" role="tab" aria-controls="pills-live-1" aria-selected="false" @click="changeType(2)">線上會議</button>
                            </li>
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
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav nav-pills flex-column" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-1-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-1" type="button" role="tab" aria-controls="pills-mkt-1" aria-selected="false" @click="changeType(2)">社群媒體</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-2-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-2" type="button" role="tab" aria-controls="pills-mkt-2" aria-selected="false" @click="changeType(2)">廣告投放</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-mkt-3-tab" data-bs-toggle="pill" data-bs-target="#pills-mkt-3" type="button" role="tab" aria-controls="pills-mkt-3" aria-selected="false" @click="changeType(3)">數據分析</button>
                            </li>
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
                    <div class="col-sm-12 col-md-6 p-3">
                        <img class="img-fluid"  src="~assets/images/swiper3.jpg" alt="">
                        <h3 class="lh-lg text-center text-light m-3">" 精彩 呈現您的品牌 "</h3>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-2" role="tabpanel" aria-labelledby="pills-video-2-tab" tabindex="0">
                <h2 class="lh-lg text-light">短影音</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/swiper2.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>腳本到銀幕，專業創意無限</h5>
                        <h4 class="lh-lg text-light">捕捉每一刻，創造無限可能</h4>
                        <h5>從策劃到剪輯，一氣呵成</h5>
                        <h4 class="lh-lg text-light">觀點獨特，每一剪都是藝術</h4>
                        <h5>精彩後製，讓畫面說話</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 我們的專業團隊搭配頂尖設備，精心製作每部作品，從腳本到拍攝，確保完美呈現品牌精神。 ”<br>” 我們相信，只有每個環節都達到完美，客戶才能展現理想中的影片效果。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-4">行銷的關鍵工具</h5>
                        <p class="lh-lg">在這個快節奏的數位時代，短影音已經成為傳達信息、吸引觀眾、並加強品牌影響力的關鍵工具。我們專注於提供全方位的短影音製作服務，從創意發想、腳本撰寫、拍攝製作到後期剪輯和效果處理，每一步都追求完美。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">絕佳的夥伴</h5>
                        <p class="lh-lg">無論是推廣企業品牌，還是講述一個引人注目的故事，我們的短影音製作服務都能幫助您的品牌在競爭激烈的市場中脫穎而出。我們不僅僅是您的服務提供商，更是您在視覺創意旅程中的夥伴。讓我們一起攜手，將您的想法轉化為能夠觸動人心的影片，共創卓越成果。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-3" role="tabpanel" aria-labelledby="pills-video-3-tab" tabindex="0">
                <h2 class="lh-lg text-light">產品功能影音</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/swiper4.png" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>精準捕捉，展現產品力</h5>
                        <h4 class="lh-lg text-light">從規劃到實現，我們精通每一步</h4>
                        <h5>每一個產品，都有一個故事</h5>
                        <h4 class="lh-lg text-light">精細剪輯，功能一目了然</h4>
                        <h5>功能展示，讓你的產品說話</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 從微妙的產品細節到整體應用演示，我們都能夠提供高質量的視覺表達，幫助您的產品在市場上脫穎而出。 ”<br>” 結合最先進的攝影設備和剪輯技術，確保每個功能都能被清晰且吸引人地呈現。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-4">讓產品說話</h5>
                        <p class="lh-lg">在競爭激烈的市場中，產品功能影片是展示您產品優勢的關鍵。我們提供專業的產品功能影片製作服務，從概念規劃、腳本撰寫到影片拍攝和後期製作，每一步驟都致力於精確展現您產品的獨特功能和應用。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">展現產品力</h5>
                        <p class="lh-lg">無論您是希望解釋複雜的技術細節，還是展示產品的實際應用，我們都能提供量身定製的解決方案。讓我們協助您通過強有力的視覺敘事，增強客戶對產品功能的理解和興趣，從而推動銷售和品牌忠誠度。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 0" class="tab-pane fade" id="pills-video-4" role="tabpanel" aria-labelledby="pills-video-4-tab" tabindex="0">
                <h2 class="lh-lg text-light">活動側拍</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>捕捉每一瞬間，記錄無限回憶</h5>
                        <h4 class="lh-lg text-light">活動的每個角落，我們都細心記錄</h4>
                        <h5>從前期策劃到後期呈現，精彩無遺</h5>
                        <h4 class="lh-lg text-light">紀錄影片，完美捕捉您的重要時刻</h4>
                        <h5>每個畫面，都是故事的開始</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 選擇我們，讓您的每一場活動都留下動人的視覺記錄，珍藏每一刻的感動與價值 ”<br>” 您的活動影片將變成一部藝術作品，不僅能回味無窮，更是將您的品牌故事分享給更廣泛觀眾的最佳方式。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-4">紀錄感動的瞬間</h5>
                        <p class="lh-lg">無論是大型企業活動、家庭聚會還是公共表演，我們都能確保每一個重要瞬間都被紀錄下來。從動態的舞台表演到觀眾的互動反應，每一個鏡頭都傳達著活動的精神與情感。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">捕捉關鍵的時刻</h5>
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
                        <h5 class="mb-4">精彩可期</h5>
                        <p class="lh-lg">一個出色的節目製作可以顯著提升您的品牌形象並吸引觀眾。我們專業的節目製作服務涵蓋了從創意發想、腳本撰寫到場景設計、拍攝及後期剪輯等所有階段，旨在為您提供一站式的解決方案。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">完美團隊</h5>
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
                        <h5 class="mb-4">全方位推廣設計</h5>
                        <p class="lh-lg">在當今市場營銷的多元化世界中，地推活動以其直接與消費者互動的能力脫穎而出。無論是產品推介、品牌宣傳還是特定節日促銷，我們都能提供包括場地選擇、人員培訓、活動物料製作和實時反饋追蹤的全方位服務。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">激發品牌力</h5>
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
                        <h5 class="mb-4">經驗豐富</h5>
                        <p class="lh-lg">從企業年會、產品發布會到大型娛樂活動，無論您的需求如何，我們都能提供專業的規劃建議和執行方案，確保您的活動流暢且印象深刻。選擇我們的主持活動規劃服務，讓您的每一場活動都成為與眾不同的亮點，獲得參與者的一致好評。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">行雲流水</h5>
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
                        <h5 class="mb-4">形象打造</h5>
                        <p class="lh-lg">一場精彩的品牌發佈會能夠顯著提升品牌形象並吸引公眾的目光。我們提供全面的品牌發佈會活動規劃服務，包括主持人選用、司儀流程規劃以及腳本設計，旨在為您的品牌創造令人難忘的發佈體驗。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">精心設計</h5>
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
                        <h5 class="mb-4">印象加分</h5>
                        <p class="lh-lg">在當代媒體密集的時代，一場精心規劃的記者會或典禮是展現企業形象和傳遞關鍵信息的重要方式。我們提供全面的記者會和典禮規劃服務，涵蓋流程設計、場地選擇、場地佈置以及腳本撰寫，確保您的活動能夠吸引媒體關注並留下深刻印象。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">話題焦點</h5>
                        <p class="lh-lg">我們的專業編劇將為您的活動量身打造腳本，從開場白到活動高潮，每一個細節都旨在強化信息傳達和觀眾互動。選擇我們的服務，讓您的記者會或典禮成為話題中心，有效傳達您的品牌故事，達到最佳的公關效果。</p>
                    </div>
                </div>
            </div>
            <div v-show="showType == 1" class="tab-pane fade" id="pills-act-5" role="tabpanel" aria-labelledby="pills-act-5-tab" tabindex="-1">
                <h2 class="lh-lg text-light">尾牙 / 員旅</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6"><img src="~assets/images/liveShow.jpg" class="img-fluid" alt=""/></div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-between">
                        <h5>尾牙盛宴，精彩由我們規劃</h5>
                        <h4 class="lh-lg text-light">精選場地，專業佈置，讓員工旅遊更難忘</h4>
                        <h5>每一場活動，都是一次團隊凝聚的旅程</h5>
                        <h4 class="lh-lg text-light">打造非凡體驗，讓員工旅遊變成傳奇</h4>
                        <h5>從場地到娛樂，精心規劃您的完美尾牙</h5>
                    </div>
                    <div class="col-12 text-center p-5"><h6 class="lh-lg">” 豐富的活動策劃經驗，能夠根據您的企業文化和特定需求，量身定制每一場活動。 ”<br>” 提供最適合的場地選擇和創意佈置方案，營造出既舒適又激勵人心的環境。 ”</h6></div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <h5 class="mb-4">團隊凝聚</h5>
                        <p class="lh-lg">尾牙和員工旅遊不僅是放鬆和慶祝的時刻，更是加強員工關係和提升團隊凝聚力的重要活動。我們提供一站式的活動策劃服務，從主持人選用、活動設計到場地選用和場地佈置，確保每一個細節都完美無缺。</p>
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                    </div>
                    <div class="col-sm-12 col-md-6 p-3">
                        <video class="w-100" loop autoplay src="~assets/video/shakingHand.mp4"></video>
                        <h5 class="mb-4">回味無窮</h5>
                        <p class="lh-lg">專業主持人將確保活動流程順暢且充滿樂趣，從互動遊戲到頒獎典禮，每一環都讓參與者感到愉快和值得。選擇我們的服務，讓您的尾牙和員工旅遊成為員工間交流、共融的美好時刻，進一步提升員工的幸福感和對公司的忠誠度。</p>
                    </div>
                </div>
            </div>

            <!-- 直播 -->
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-1" role="tabpanel" aria-labelledby="pills-live-1-tab" tabindex="0">1</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-2" role="tabpanel" aria-labelledby="pills-live-2-tab" tabindex="0">2</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-3" role="tabpanel" aria-labelledby="pills-live-3-tab" tabindex="0">3</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-4" role="tabpanel" aria-labelledby="pills-live-4-tab" tabindex="0">4</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-live-5" role="tabpanel" aria-labelledby="pills-live-5-tab" tabindex="0">5</div>

            <!-- 數位行銷 -->
            <div v-show="showType == 2" class="tab-pane fade" id="pills-mkt-1" role="tabpanel" aria-labelledby="pills-mkt-1-tab" tabindex="0">1</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-mkt-2" role="tabpanel" aria-labelledby="pills-mkt-2-tab" tabindex="0">2</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-mkt-3" role="tabpanel" aria-labelledby="pills-mkt-3-tab" tabindex="0">3</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-mkt-4" role="tabpanel" aria-labelledby="pills-mkt-4-tab" tabindex="0">4</div>
            <div v-show="showType == 2" class="tab-pane fade" id="pills-mkt-5" role="tabpanel" aria-labelledby="pills-mkt-5-tab" tabindex="0">5</div>
        </div>
    </div>
</template>
