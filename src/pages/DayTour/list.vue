<template>
	<div>
		<ul  class="list-box">
			<li class="content" v-for="item of list" :key="item.id">
				<img class="picture" :src="item.imgUrl">	
				<ul class="introduce">
					<li class="title">{{item.title}}</li>
					<li class="introduce-con">
						<b class="introduce-left">
							<i class="introduce-list">北京出发</i>
							<i class="introduce-list">无自费</i>
							<i class="introduce-list" style="border:none">无购物</i>
						</b>
						<b class="introduce-right">
							<b class="right-money">
								<span class="rmb">¥</span>
								<span class="money">{{item.money}}</span style="font-size:12px font-weight:900">
								<span style="font-size:.22rem">元</span>
							</b>
						</b>
					</li>
					<li class= "sold">{{item.sold}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'daytour-list',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
	.list-box
		width: 100%
		.content
			display: flex
			width: 100%
			height: 2rem	
			.picture
				width: 1.6rem
				height: 1.6rem
				padding: .2rem
			.introduce
				flex: 1
				height: 1.99rem
				border-bottom: .01rem solid #ccc
				.title
					display: block
					line-height: .35rem
					margin-top: .24rem
					font-size: .27rem
					font-weight: 900
					margin-right: .40rem
				.introduce-con
					height: .6rem
					.introduce-list
						display: block
						float:left
						margin-top: .14rem
						font-size: .22rem
						padding: 0 .1rem 
						border-right: .01rem solid #ccc
					.introduce-right
						float:right
						margin-right: .2rem
						.right-money
							display: block
							height: .3rem
							padding-top: .3rem
							.rmb
								font-size: .14rem
								font-weight: 900
								color: #ef8a33
							.money
								font-size: .28rem
								font-weight: 900
								color: #ef8a33
				.sold
					color: #9e9e9e

</style>
