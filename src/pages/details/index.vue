<template>
  <div class="index-box">
    <index-header :content="getheadList" @change="handlechange" v-show="!show"></index-header>
    <index-swiper :photo="getswiperList" v-show="show"></index-swiper>
    <index-time></index-time>
    <index-score></index-score>
    <index-notice></index-notice>
    <index-remd></index-remd>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexTime from './time'
  import IndexScore from './score'
  import axios from 'axios'
  import IndexNotice from './notice'
  import IndexRemd from './remd'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexTime,
      IndexScore,
      IndexNotice,
      IndexRemd
    },
    data () {
      return {
        getheadList: {},
        getswiperList: [],
        show: false,
        count: 0,
        handlechangedata: null
      }
    },
    methods: {
      getData () {
        axios.get('../../../static/index.json')
          .then(this.handlegetdataSucc.bind(this))
          .catch(this.handlegetdataErr.bind(this))
      },
      handlegetdataSucc (res) {
        this.getheadList = res.data.data.headerList
        this.handlechangedata = () => {
          this.getswiperList = res.data.data.swiperList
        }
      },
      handlegetdataErr () {
        console.log('error')
      },
      handlechange () {
        this.count++
        if (this.count === 1) {
          // console.log(this.show)
          this.show = !this.show
        }
        this.handlechangedata()
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
