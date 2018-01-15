<template>
	<div class="header">
		<div class="back iconfont">&#xe624</div>
		<input type="text" class="search-text" value="一日游">
		<div class="search-btn" >搜索</div>	
	</div>
</template>

<script>
export default {
  name: 'daytour-header'
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.header
		display: flex
		height: .88rem
		background: $bgColor
		color: #fff
		.back
			width: .6rem
			height: .88rem
			line-height: .88rem
			text-align: center
		.search-text
			flex: 1
			height: .6rem
			padding-left: .2rem
			margin-top: .14rem
			margin-left: .2rem
			border-radius: .1rem
			border: none
			font-size: 14px
			font-weight: 900
			color: #919191
		.search-btn
			line-height: .88rem
			padding:0 .25rem 0 .20rem;

</style>
