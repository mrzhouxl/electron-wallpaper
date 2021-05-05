<template>
  <div class="content">
    <div class="item" v-for="(item, index) in scenery" :key="index">
      <div class="itemMenu">
        <img width="150" height="100" :src="item.image" />
        <div class="setting" @click="setting(item)">设置为壁纸</div>
      </div>
    </div>
  </div>
</template>
<script>
import { set } from 'wallpaper';
import { scenery } from './sceneryPaper';
import axios from 'axios';
const fs = require('fs');
const path = require('path');
const TEMP_IMAGES_DIR = 'tempImgDir';
export default {
  data() {
    return {
      scenery,
    };
  },
  methods: {
    async setting(item) {
      axios
        .get(item.image, {
          responseType: 'arraybuffer',
        })
        .then(function (response) {
          const dir = path.join(
            'src',
            TEMP_IMAGES_DIR,
            path.basename(item.image),
          );
          let buff = new Buffer(response.data, 'binary');
          fs.writeFile(dir, buff, 'binary', async (err) => {
            if (err) throw err;
            // let thisDir = __dirname;
            // console.log(thisDir);
            let res = await set(dir);
            console.log(res);
          });
          // fs.writeFile('hello.txt', 'helloword', function (err) {
          //   if (err) throw err;
          //   console.log('保存成功');
          // });
        });
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
  width: 100%;
}
.item {
  margin-top: 10px;
  margin-right: 10px;
}
.itemMenu {
  position: relative;
}
.itemMenu .setting {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  color: beige;
}
</style>