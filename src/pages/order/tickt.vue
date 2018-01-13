<template>
  <div class="tickt">
    <div class="tickt-left">
      <div class="tickt-main">
        <h2 class="tickt-title">故宫</h2>
        <ul class="tickt-bottom">
          <li class="tickt-date">
            <img class="tickt-icon" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">
            2018
          </li>
          <li class="tickt-tag">
            <img class="tickt-icon" src="https://img1.qunarzz.com/piao/fusion/1703/dc/b515f102c483d002.png">
            不可退
          </li>
        </ul>
      </div>
    </div>
    <div class="tickt-right">
      <div class="tickt-price">￥
        <em class="tickt-price-num">50</em>
        <span class="tickt-price-word">/起</span>
      </div>
      <div class="tickt-note">预订须知</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-tickt'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .tickt
    height: 1.1rem
    padding: .2rem
    background: #ccc
    .tickt-left
      margin-right: 1.9rem
      float: left
      .tickt-main
        height: .7rem
        .tickt-title
          height: .44rem
          margin-bottom: .04rem
          color: #212121
          font-size: .32rem
        .tickt-bottom
          overflow: hidden
          .tickt-date
            float: left
            height: .44rem
            color: #616161
            font-size: .24rem
            .tickt-icon
              width: .24rem
              height: .24rem
              margin-right: .04rem
          .tickt-tag
            float: left
            margin-left: .2rem
            height: .44rem
            color: #616161
            font-size: .24rem
            .tickt-icon
              width: .24rem
              height: .24rem
              margin-right: .04rem
    .tickt-right
      float: right
      .tickt-price
        color: #ff8300
        .tickt-price-num
          font-size: .4rem
        .tickt-price-word
          color: #9e9e9e
      .tickt-note
        margin-top: .12rem
        font-size: .28rem
        font-weight: bold
        color: #00bcd4
</style>