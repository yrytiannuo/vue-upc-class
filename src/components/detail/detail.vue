<template>
  <div class="detail">
    <el-cascader
      :options="options"
      :show-all-levels="false">
    </el-cascader>
    <el-button type="primary" v-on:click="handleNodeClick">查询</el-button>
    <div class="idleness">
      <el-progress type="circle" :percentage="25"></el-progress>
      <span>教室空闲率</span>
    </div>
    <div class="class">
      <el-progress v-if="current" type="circle" :percentage="100" status="success"></el-progress>
      <el-progress v-else type="circle" :percentage="100" status="exception"></el-progress>
      <span>正上课吗？</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      options: [{
        value: '一楼',
        label: '一楼',
        children: [{
          value: '101',
          label: '101'
        }, {
          value: '102',
          label: '102'
        }]
      }, {
        value: '二楼',
        label: '二楼',
        children: [{
          value: '201',
          label: '201'
        }, {
          value: '202',
          label: '202'
        }]
      }, {
        value: '三楼',
        label: '三楼',
        children: [{
          value: '301',
          label: '301'
        }]
      }]
    }
  },
  methods: {
    handleNodeClick (data) {
      if (data.children === undefined) {
        var ele = '教室共有座位100个，剩余座位20个，较为拥挤'
        this.open(ele)
      }
    },
    open (ele) {
      this.$alert(ele, '101', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>
<style>
.detail .idleness,
.detail .class{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5vh;
}
.detail .el-message-box{
  width: 100%;
}
.detail .el-cascader {
  display: block;
}
.detail .el-button{
  margin-top: 3vh;
  display:block;
  margin:3vh auto;
}
</style>
