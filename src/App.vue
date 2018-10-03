<template>
  <div id="app">
    <el-container class="is-vertical">
      <vheader></vheader>
      <el-main>
        <router-view/>
      </el-main>
      <vfooter></vfooter>
    </el-container>
  </div>
</template>
<script>
import vheader from '@/components/base/page-header/page-header'
import vfooter from '@/components/base/page-footer/page-footer'

export default {
  name: 'App',
  components: {vheader, vfooter}
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
</style>
