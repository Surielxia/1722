<template>
  <div class="visiter">
    <div class="visiter-tr">
      <label class="visiter-title">游客</label>
      <div class="visiter-mes">
        <label class="visiter-textout-note">游客姓名</label>
        <input class="visiter-input" type="text" placeholder="游客姓名">
      </div>
      <span class="visiter-icon iconfont">1</span>
    </div>
    <div class="visiter-tr">
      <label class="visiter-title">手机号</label>
      <div class="visiter-mes">
        <button class="phone-code">+86</button>
        <label class="visiter-textout-note">请填写手机号</label>
        <input class="visiter-input" type="text" placeholder="请填写手机号">
      </div>
    </div>
    <div class="visiter-idcard"></div>
  </div>
</template>

<script>
  export default {
    name: 'visiter'
  }
</script>

<style lang="stylus" scoped>
  .visiter
    margin: .2rem 0
    .visiter-tr
      overflow: hidden
      height: .5rem
      padding: .24rem
      border-bottom: .02rem solid #f5f5f5
      .visiter-title
        float: left
        color: #616161
        font-size: .3rem
        line-height: .5rem
      .visiter-mes
        position: relative
        margin-left: 1rem
        float: left
        .phone-code
          float: left
        .visiter-textout-note
          position: absolute
          top: .1rem
          font-size: .32rem
          color: red
        .visiter-input
          float: left
          border: none
          font-size: .32rem
      .visiter-icon
        float: right
        font-size: .32rem
</style>