<template>
  <div class="page-footer el-footer">
    <el-button-group>
      <router-link :to="{ path: '/' }" class="vlink">
        <el-button type="primary" icon="el-icon-menu">
          首页
        </el-button>
      </router-link>
      <el-button type="primary">
        <router-link :to="{ path: '/user' }" class="vlink">我的</router-link>
        <i class="el-icon-setting el-icon--right"></i>
      </el-button>
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
.page-footer .el-button .vlink{
  color: #fff;
  text-decoration: none;
}
</style>
