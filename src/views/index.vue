<template>
  <div>
    <div class="content">
      <div class="menu">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <el-menu-item index="1" route="scenery">
            <i class="el-icon-menu"></i>
            <span slot="title">风景壁纸</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">动漫壁纸</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
}
.content .menu {
  width: 150px;
  height: 100vh;
}
</style>