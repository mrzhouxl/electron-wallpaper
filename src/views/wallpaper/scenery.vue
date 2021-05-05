<template>
  <div class="content">
    <div class="item">
      <div class="itemMenu">
        <img width="150" height="100" src="../../assets/png/wallpaper.jpeg">
        <div class="setting" @click="setting">
          设置为壁纸
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {set} from 'wallpaper'
export default {
  data(){
    return {

    }
  },
  methods:{
    async setting(){
      let res=await set('../../assets/png/wallpaper.jpeg')
      console.log(res)
    }
  }
}
</script>
<style scoped>
.item{
  margin-top: 10px;
}
.itemMenu{
  position: relative;
}
.itemMenu .setting{
  position: absolute;
  bottom: 0;
  width:100%;
  background-color:rgba(255, 255, 255, 0.4);
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>