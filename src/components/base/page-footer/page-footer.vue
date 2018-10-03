<template>
  <div class="page-footer el-footer">
    <el-button-group>
      <el-button router-link="{path:'/'}" type="primary" icon="el-icon-arrow-left">首页</el-button>
      <el-button router-link="{path:'/user'}" type="primary">我的<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {}
</script>

<style>
.page-footer{
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding:0;
}
.page-footer .el-button-group{
  width: 100%;
}
.page-footer .el-button{
  width: 50%;
}
</style>
