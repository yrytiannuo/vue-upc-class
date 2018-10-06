<template>
  <div class="detail">
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
    <el-cascader
      :options="options"
      :show-all-levels="false">
    </el-cascader>
    <el-button type="primary">查询</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        label: '一楼',
        children: [{
          label: '101'
        }]
      }, {
        label: '二楼',
        children: [{
          label: '201'
        }, {
          label: '202'
        }]
      }, {
        label: '三楼',
        children: [{
          label: '301'
        }, {
          label: '302'
        }]
      }],
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
        console.log(data.label)
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
.el-message-box{
  width: 100%;
}
.el-cascader {
  display: block;
}
.detail .el-button{
  margin-top: 3vh;
}
</style>
