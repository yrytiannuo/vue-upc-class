<template>
  <div class="page-header el-header">
    <i class="el-icon-location"></i>
    <span>{{pos}}</span>
  </div>
</template>

<script>
export default {
  props: {
    pos: String
  }
}
</script>

<style>
.page-header{
  height: 10vh;
  background-color: #409EFF;
  line-height: 10vh;
  color: #fff;
}
</style>
