<template>
  <div class="tab1-container">
    <h5>Tab1 组件</h5>
    一切换到 /about 路由，就先显示 Tab1 组件，所以需要使用重定向
  </div>
</template>

<script>
export default {
  name: "Tab1",
};
</script>

<style lang="less" scoped>
.tab1-container {
  min-height: 150px;
  background-color: greenyellow;
}
</style>
