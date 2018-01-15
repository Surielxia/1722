<template>
<<<<<<< HEAD
  <div class="main">
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <div class="place border-top">
      <div class="iconfont place-content border-right">&#xe600;<span class="place-text">定位失败</span></div>
      <div class="iconfont place-content">&#xe622;<span class="place-text">五折泡温泉</span></div>
    </div>
    <index-scroller class="scroller"></index-scroller>
  </div>
=======
  <index-header></index-header>
>>>>>>> origin/master
</template>

<script>
  import IndexHeader from './header'
<<<<<<< HEAD
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexScroller from './scroller'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexScroller
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
=======
  export default {
    name: 'index',
    components: {
      IndexHeader
>>>>>>> origin/master
    }
  }
</script>

<<<<<<< HEAD
<style lang="stylus" scoped>
  .main
    display flex
    flex-direction column
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    .scroller
      flex 1
      overflow hidden
    .place
      display flex
      height .98rem
      .place-content
        width 50%
        text-align center
        .place-text
          line-height .98rem
</style>
=======
<style scoped></style>
>>>>>>> origin/master
