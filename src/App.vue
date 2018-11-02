<template>
  <div id="app">
    <el-container class="is-vertical">
      <vheader :pos="header"></vheader>
      <el-main>
        <router-view/>
      </el-main>
      <vfooter v-on:childByPagefooter="childByPagefooter"></vfooter>
    </el-container>
  </div>
</template>
<script>
import vheader from '@/components/base/page-header/page-header'
import vfooter from '@/components/base/page-footer/page-footer'

export default {
  name: 'App',
  data () {
    return {
      header: '首页'
    }
  },
  components: {vheader, vfooter},
  methods: {
    childByPagefooter: function (childByValue) {
      this.header = childByValue
      console.log(this.header)
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-main{
  padding-bottom: 10vh;
}
</style>
