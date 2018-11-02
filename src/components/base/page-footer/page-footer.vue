<template>
  <div class="page-footer el-footer">
    <el-button-group>
        <el-button type="primary" icon="el-icon-menu" v-on:click="childHome">
          <router-link :to="{ path: '/' }" class="vlink">首页</router-link>
        </el-button>
        <el-button type="primary" v-on:click="childUser">
          <router-link :to="{ path: '/user' }" class="vlink">我的</router-link>
          <i class="el-icon-setting el-icon--right"></i>
        </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      childuser: '我的',
      childhome: '首页'
    }
  },
  methods: {
    childUser () {
      this.$emit('childByPagefooter', this.childuser)
    },
    childHome () {
      this.$emit('childByPagefooter', this.childhome)
    }
  }
}
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
