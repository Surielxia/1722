<template>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="title">订单填写</div>
    <div class="login">登录</div>
  </header>
</template>

<script>
export default {
  name: 'order-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
      padding-left: .2rem
    .title
      flex: 1
      height: .88rem
      line-height: .88rem
      text-align: center
      font-size: .32rem
    .login
      font-size: .28rem
      padding-right: .3rem
</style>
