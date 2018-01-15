<template>
  <div class="icons">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pageList" :key="index">
          <div class="area-con">
            <div class="area-item" v-for="item in page" :key="item.id">
              <img class="area-img" :src="item.iconUrl">
              <p class="area-desc">{{item.title}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-icons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      pageList () {
        const pages = []
        this.list.forEach((value, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .icons
    height 3.8rem
    .area-con
      display flex
      flex-wrap wrap
      .area-item
        width 25%
        height 1.9rem
        .area-img
          display block
          margin .2rem auto .1rem
          width .66rem
          height .66rem
        .area-desc
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          line-height .4rem
          text-align center
</style>