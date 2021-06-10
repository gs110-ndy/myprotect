<!--眼睛-->
<template>
<div class="body">
  <div class="btn"></div>
</div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style scoped>
.body{
  background: radial-gradient(circle at center,#fff,#fff 50%,#aaa);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: auto;
}
.btn{
  border-bottom: 1.5em solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%,-40%);
}
.btn::before{
  background: linear-gradient(to bottom,#efefef,#efefef 50%,#000 50%,#000);
  background-position: 0 -100%;
  background-size: 200% 200%;
  border-radius: 50%;
  content: '';
  position: absolute;
  width: 12em;
  height: 12em;
  left: -9em;
  top: -6em;
  transform: skewX(-4deg);
  animation: blink 6s 1s infinite;
}
.btn::after{
  background: linear-gradient(to bottom,#efefef,#efefef 50%,#000 50%,#000);
  background-position: 0 -100%;
  background-size: 200% 200%;
  border-radius: 50%;
  content: '';
  position: absolute;
  width: 12em;
  height: 12em;
  right: -9em;
  top: -6em;
  transform: skewX(4deg);
  animation: blink 6s 1s infinite;
}
@keyframes blink {
  0%,50%{
    background-position: 0 100%;
  }
  85%,95%{
    background-position: 0 60%;
  }
  100%{
    background-position: 0 100%;
  }
}
</style>
