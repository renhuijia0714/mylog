<template>
  <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">推荐</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">推荐</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">推荐</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>
<script>
export default{
    name:"navigation"
}
</script>
<style>
.nav{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: url("../assets/images/nav_bg.jpg");
    height: 50px;
    margin-top: 20px;
    padding-left: 30px;
    border-radius: 5px;
    box-sizing: border-box;
}
.el-breadcrumb{
    height: 50px;
    line-height: 50px;
}
</style>

