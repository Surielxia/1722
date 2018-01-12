<template>
  <div class="header">
  	<div class="back iconfont">&#xe624;</div>
  	<div class="search">
	  	<span class="iconfont search-icon">&#xe632;</span>输入城市/景点/游玩主题
	  </div>
  	<div class="city">
  		北京
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'index-header'
  }
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.header
		display: flex
		height: .88rem
		line-height: .88rem
		background: $bgColor
		color: #fff
		.back
			width: .58rem
			text-align: center
			font-size: .2rem
			font-weight: 900
		.search
				flex: 1
				height: .6rem
				line-height: .6rem
				font-size: .3rem
				margin: .14rem .2rem
				padding-left: .4rem
				background: #fff
				border-radius: .1rem
				color: #ccc
				.search-icon
					padding-right: .02rem
		.city
			position: relative
			padding-right: .6rem
			&:before
				position: absolute
				top: .35rem
				right: .2rem
				content: '\0020' /*空，占位用*/
				width: 0
				height: 0
				border-left: .14rem solid transparent
				border-right: .14rem solid transparent
				border-top: .14rem solid #fff
</style>
