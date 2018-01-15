<template>
  <div class="all-visiter">
    <div class="visiter">
      <div class="visiter-tr">
        <label class="visiter-title">游客 1</label>
        <div class="visiter-mes">
          <label class="visiter-textout-note" v-show="name">游客姓名</label>
          <input class="visiter-input" type="text" placeholder="游客姓名" @blur="handleNameBlur" @focus="handleNameFocus">
        </div>
        <span class="visiter-icon iconfont">&#xe6a5;</span>
      </div>
      <div class="visiter-tr">
        <label class="visiter-title">手机号</label>
        <div class="visiter-mes">
          <button class="phone-code">+86</button>
          <label class="visiter-textout-note" v-show="phone">请填写手机号</label>
          <input class="visiter-input" type="text" placeholder="请填写手机号" @blur="handlePhoneBlur" @focus="handlePhoneFocus">
        </div>
      </div>
      <div class="visiter-tr">
        <label class="visiter-title">身份证</label>
        <div class="visiter-mes">
          <label class="visiter-textout-note" v-show="idcard">请填写正确的身份证号码</label>
          <input class="visiter-input" type="text" placeholder="请填写正确的身份证号码" @blur="handleIdcardBlur" @focus="handleIdcardFocus">
        </div>
      </div>
    </div>
    <div class="visiter" v-show="show" v-for="item in list">
      <div class="visiter-tr">
        <label class="visiter-title">游客 {{item}}</label>
        <div class="visiter-mes">
          <label class="visiter-textout-note" v-show="name">游客姓名</label>
          <input class="visiter-input" type="text" placeholder="游客姓名" @blur="handleNameBlur" @focus="handleNameFocus">
        </div>
        <span class="visiter-icon iconfont">&#xe6a5;</span>
      </div>
      <div class="visiter-tr">
        <label class="visiter-title">身份证</label>
        <div class="visiter-mes">
          <label class="visiter-textout-note" v-show="idcard">请填写正确的身份证号码</label>
          <input class="visiter-input" type="text" placeholder="请填写正确的身份证号码" @blur="handleIdcardBlur" @focus="handleIdcardFocus">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'visiter',
    data () {
      return {
        list: [],
        show: false,
        name: false,
        phone: false,
        idcard: false
      }
    },
    methods: {
      bindEvents () {
        this.$bus.$on('reduce', this.handleVisiterNumReduce.bind(this))
        this.$bus.$on('increase', this.handleVisiterNumIncrease.bind(this))
      },
      handleVisiterNumReduce () {
        this.list.pop(this.list[this.list.length - 1])
        if (this.list.length === 0) {
          this.show = false
        }
      },
      handleVisiterNumIncrease () {
        this.list.push(this.list.length + 2)
        if (this.list.length > 0) {
          this.show = true
        }
      },
      handleNameBlur (e) {
        if (e.target.value === '') {
          this.name = !this.name
          e.target.placeholder = ''
        }
      },
      handlePhoneBlur (e) {
        if (e.target.value === '') {
          this.phone = !this.phone
          e.target.placeholder = ''
        }
      },
      handleIdcardBlur (e) {
        if (e.target.value === '') {
          this.idcard = !this.idcard
          e.target.placeholder = ''
        }
      },
      handleNameFocus (e) {
        if (e.target.value === '') {
          this.name = false
          e.target.placeholder = '游客姓名'
        }
      },
      handlePhoneFocus (e) {
        if (e.target.value === '') {
          this.phone = false
          e.target.placeholder = '请填写手机号'
        }
      },
      handleIdcardFocus (e) {
        if (e.target.value === '') {
          this.idcard = false
          e.target.placeholder = '请填写正确的身份证号码'
        }
      }
    },
    created () {
      this.bindEvents()
    }
  }
</script>

<style lang="stylus" scoped>
  .visiter
    margin: .2rem 0
    background: #fff
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
        color: #00bcd4
</style>