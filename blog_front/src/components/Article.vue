<template>
  <div class="aritcle">
    <router-view></router-view>
    <right></right>
  </div>
</template>
<script>
import right from "./article/article_right";
export default {
  name: "Artivle",
  components: {
    right
  }
};
</script>
<style>
.aritcle {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  margin-top: 20px;
}

</style>

