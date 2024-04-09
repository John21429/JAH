<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showNavbar = ref(true);
let scrollTimer = null;

const handleScroll = () => {
  // 用户滚动时隐藏 navbar
  showNavbar.value = false;
  
  // 清除之前的定时器（如果有）
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
  }
  
  // 设置定时器，如果一段时间（例如 150 毫秒）没有滚动，则显示 navbar
  scrollTimer = setTimeout(() => {
    showNavbar.value = true;
  }, 500);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="">
    <!-- <nav v-show="showNavbar" class="navbar rounded fixed-top  w-100 z-5" aria-label="Eleventh navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo" src="~assets/images/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item me-3 active" >
              <a class="nav-link" aria-current="page" href="/">首頁</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="/about">關於我們</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="/service">服務項目</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="/service">作品彙整</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <nav class="navbar navbar-dark fixed-top" v-show="showNavbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo" src="~assets/images/LogoWhiteShadow.png" alt=""></a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <button class="navbar-toggler border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas bg-dark offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">選單列表</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item active" >
                <a class="nav-link" aria-current="page" href="/">首頁</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">關於我們</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/service">服務項目</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">作品彙整</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> -->
            </ul>
            <!-- <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>