<template>
  <div class="list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{op.item}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" v-on:click="childDetail">
          <router-link :to="{ path: '/detail' }" class="vlink">{{ops}}
            <i class="el-icon-arrow-right el-icon--right"></i>
          </router-link>
        </el-button>
      </div>
      <div class="el-card_bg" :style="{'background-image': 'url(' + op.bg + ')'}"></div>
      <!-- <div v-for="o in 4" :key="o" class="text item">
      </div> -->
    </el-card>
  </div>
</template>

<script>
import middle from '../../utils/middleware..js'
export default {
  data () {
    return {
      ops: '进去看看'      
    }
  },
  props: {
    op: {
      type: Object
    }
  },
  methods: {
    childDetail () {
      middle.$emit('value', this.op.item)
    }
  }
}
</script>

<style>
.clearfix span{
  display: block;
}
.vlink{
  text-decoration: none;
}
.list .el-card__body{
  padding: 0;
}
.list .el-card__body .el-card_bg{
  height: 28vh;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: blur(2px); */
}
.text {
  font-size: .9rem;
}
.item {
  margin-bottom: 1rem;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 100%;
}
</style>
