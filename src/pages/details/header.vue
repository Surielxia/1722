<template>
	<div class="header">
     <div class="img" @click="handleclick">
       <img :src="content.imgurlList" class="headerp">
     </div>
     <p class="spot">{{content.title}}</p> 
	</div>
</template>

<script>
  export default {
    props: {
      content: Object
    },
    name: 'index-header',
    methods: {
      handleclick () {
        this.$emit('change')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    width:100%
    height:4.04rem
    position:relative
    .img
      .headerp
        width:100%
    .spot
      position:absolute
      top:3.5rem
      left:0.2rem
      color:white
      font-size:0.32rem
</style>
