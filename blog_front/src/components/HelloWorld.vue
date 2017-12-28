<template>
  <div class="hello">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <li class="item">Summer</li>
      <el-submenu index="2">
        <template slot="title">一级分类</template>
        <el-menu-item index="2-1">1选项1</el-menu-item>
        <el-menu-item index="2-2">1选项2</el-menu-item>
        <el-menu-item index="2-3">1选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">二级分类</template>
        <el-menu-item index="3-1">2选项1</el-menu-item>
        <el-menu-item index="3-2">2选项2</el-menu-item>
        <el-menu-item index="3-3">2选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <person></person>
  </div>
</template>

<script>
import person from './person'
export default {
  name: 'HelloWorld',
  data() {
      return {
        activeIndex2: '1'
      };
    },
    components:{
      person
    }
}
</script>

<style>
.item{
  display: inline-block;
  color: #fff;
  float: left;
  line-height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 50px;
}
</style>
