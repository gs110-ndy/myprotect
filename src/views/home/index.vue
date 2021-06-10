<template>
  <div class="box">
    <el-button type="primary" size="mini" @click="handleEnter">
      眼睛
    </el-button>
    <el-button type="primary" size="mini" @click="handleGoBtn">
      按钮
    </el-button>
    <el-button type="primary" size="mini" @click="handleGoSaveBtn">
      save按钮
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleEnter () {
      this.$router.push({
        path: '/test'
      })
    },
    handleGoBtn () {
      this.$router.push({path: '/btn'})
    },
    handleGoSaveBtn () {
      this.$router.push({path: '/savebtn'})
    }
  }
}
</script>

<style scoped>
.box{
  width:100vh;
  height:100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
