<template>
	<div>	
		<daytour-header></daytour-header>
		<daytour-nav :list="selectInfo"></daytour-nav>
		<daytour-lsit :list="introduceInfo"></daytour-lsit>
	</div>
</template>
<script>
import DaytourHeader from './header'
import DaytourNav from './nav'
import DaytourLsit from './list'
import axios from 'axios'
export default {
  name: 'DayTour',
  components: {
    DaytourHeader,
    DaytourNav,
    DaytourLsit
  },
  data () {
    return {
      selectInfo: [],
      introduceInfo: []
    }
  },
  methods: {
    getIndexData () {
      axios.get('/api/select.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.selectInfo = data.selectAllLsit
    },
    handleGetDataErr () {
      console.log('err')
    },
    getListData () {
      axios.get('/api/list.json')
        .then(this.handleGetLsitDataSucc.bind(this))
        .catch(this.handleGetLsitDataErr.bind(this))
    },
    handleGetLsitDataSucc (res) {
      const data = res.data.data
      this.introduceInfo = data.introduceList
      console.log(this.introduceInfo)
    },
    handleGetLsitDataErr () {
      console.log('err')
    }
  },
  created () {
    this.getIndexData()
    this.getListData()
  }
}
</script>
<style lang="stylus" scoped>

</style>
