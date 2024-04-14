// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/scss/app.scss'
  ],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
      autoprefixer: true
    }
  },
  modules: [
    'nuxt-swiper',
    'nuxt3-aos'

  ],
  // app: {
  //   baseURL: process.env.NODE_ENV === 'production' ? '/JAH/' : '/',
  //   buildAssetsDir: '/static/'
  // }

})
