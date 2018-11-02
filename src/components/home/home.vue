<template>
  <div class="home">
    <div v-for="op in ops" class="noe-card" v-bind:key="op.id">
      <vlist :op="op" class="con"></vlist>
    </div>
  </div>
</template>

<script>
import vlist from '@/components/home/list'
export default {
  data () {
    return {
      ops: [{
        item: '讲堂群',
        bg: '/static/1.jpg',
        id: 1
      }, {
        item: '南唐',
        bg: '/static/2.jpg',
        id: 2
      }, {
        item: '南教',
        bg: '/static/3.jpg',
        id: 3
      }, {
        item: '文理楼',
        bg: '/static/4.jpg',
        id: 4
      }
      ]
    }
  },
  components: {
    'vlist': vlist
  }
}
</script>

<style>
.con{
  margin-top: 5vh;
}
</style>
