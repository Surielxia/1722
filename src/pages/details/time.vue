<template>
    <div class="time-p">
      <div class="time-address">
        <span class="iconfont">&#xe600;</span>北京市东城区景山前街4号
      </div>
      <div class="time-open" >
        <span class="iconfont">&#xe691;</span> 查看经典简洁及开放时间
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index-time'
  }
</script>

<style lang="stylus" scoped>
    .time-p
      width 100%
      height 1.88rem
      background white
      border-top-left-radius .1rem
      border-top-right-radius .1rem
      position absolute
      top 4rem
      .time-address
        line-height 0.87rem
        margin-left 0.24rem
        width 7.06rem
        height 0.87rem
        margin 0 auto
        font-size 0.28rem
        color #212121
        border-bottom 1px solid #f7f7f7
        .iconfont
          margin-right 0.25rem
      .time-open
        line-height 0.87rem
        margin-left 0.24rem
        width 7.06rem
        height 0.87rem
        margin 0 auto
        margin-top 0.02rem
        font-size 0.28rem
        color #212121
        border-top 1px solid #f7f7f7
        .iconfont
          margin-right 0.25rem
</style>