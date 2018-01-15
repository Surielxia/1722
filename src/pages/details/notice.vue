<template>
    <div class="notice-box">
      <div class="box">
        <span class="iconfont">&#xe64c;</span>
        <p class="notice-w">除法定节假日，故宫博物馆实行周一闭馆。</p>
        <span class="iconfont" style="float:right;">&#xe8f1;</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index-notice'
  }
</script>

<style lang="stylus" scoped>
  .notice-box
    width 100%
    height 0.9rem
    background #f9eddd
    position absolute
    top 7.1rem
    .box
      width 7.01rem
      height 0.9rem
      margin 0 auto
      .iconfont
        line-height 0.9rem
        float left
        color #ff4923
      .notice-w
        line-height 0.9rem
        float left
        color #ff4923
        
</style>