<template>
	<div>
		<div class="nav" ref="nav">
			<div class="partition"></div>
			<div class="nav-con classify" @click="selectAll">全部分类</div>
			<div class="partition"></div>
			<div class="nav-con destination">全部目的地</div>
			<div class="partition"></div>
			<div class="nav-con sort">推荐排序</div>
			<div class="partition"></div>
		</div>
		<div class="mask" v-show="type" @click.self="handleClickHide">
			<div class="select-box" >
				<div class="wrapper" ref="wrapper">
					<ul class="select-all">
						<li @click="handleClick(index)" class="all-con" v-for="(item,index) of list" :key="item.id">
							<img class="all-pic" :src="item.imgUrl">
							<span class="all-text">{{item.text}}</span>
							<span class="all-count">{{item.allCount}}</span>
						</li>
					</ul>
				</div>
				<div class="all-content">
					<div v-for="item in lists" class="child-content">{{item.nei}}</div>
				</div>
			</div>
		</div>	
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'daytour-nav',
  data () {
  	return {
  		type: false,
  		contentInfo: [],
  		lists: []
  	}
  },
  props: {
  	list: Array
  },
  created () {
  	this.handleGetContent()
  },
  methods: {
  	handleClickHide () {
  		if (this.type === true) {
  			this.type = !this.type
  		}
  	},
    selectAll () {
      this.type = !this.type
    },
    handleGetContent () {
      axios.get('/api/select.json')
      .then(this.handleGetContentSucc.bind(this))
    },
    handleGetContentSucc (res) {
      this.contentInfo = res.data.data.selectAllLsit
    },
    handleClick (id) {
      //console.log(id)
      this.contentInfo.forEach((value, index) => {
            if (id == index) {
           //console.log(value.oneContent)
                this.lists = value.oneContent
        }
    	})
    }
  }
}
</script>

<style lang="stylus" scoped>
	.nav
		display: flex
		height: .8rem
		color: #222
		position: relative
		.partition
			width: 0.02rem
			height: .8rem
			background: #666
			background-image: radial-gradient(2em circle at top,hsla(110,89%,100%,1),hsla(30,60%,90%,.9))
			background-image: -webkit-radial-gradient(5em circle at top,hsla(220,89%,100%,1),hsla(30,60%,60%,.9))
		.nav-con
			width: 33%
			line-height: .8rem
			text-align: center
			border-bottom: .02rem solid #c3c4d5
	.mask
		width:100%
		height: 14.48rem
		background: rgba(0,0,0,0.5)
		position: fixed
		.select-box
			display: flex
			width: 100%
			height: 4.8rem
			background: #f1f1f1
			.wrapper
				width: 50%
				height: 4.8rem
				overflow: hidden
				.select-all
					width: 100%
					.all-con
						height: .79rem
						line-height: .79rem
						border-bottom: .01rem solid #666
						background: #fff
						.all-pic
							width: .3rem
							margin:.21rem .1rem 0 .3rem
							float: left
						.all-text
							float: left
						.all-count
							float: right
							margin-right: .22rem
			.all-content
				width: 50%
				.child-content
					height: .79rem
					line-height: .79rem
					padding-left: .25rem

</style>
