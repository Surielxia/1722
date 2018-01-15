<template>
  <div class='slide-container'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='item of photo' :key='item.id' class='swiper-photo'>
        <img :src='item.url' class='photo'/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      photo: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: 'swiper-pagination',
          paginationType: 'fraction'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-container
    height 100%
    background #000
    .swiper-photo
      display inline-block!important
      vertical-align: middle;
      .photo
        width 100%
</style>