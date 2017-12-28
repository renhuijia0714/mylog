<template>
  <div class="mange">
    <el-container>
      <el-header>
        <span>个人博客</span>
        <span>
      当前登陆账户:
    </span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path" :router="true">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>文章管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/mange/addArtcle">添加文章</el-menu-item>
                    <el-menu-item index="/mange/artList">文章列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path" :router="true">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>分类管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/mange/one">添加一级分类</el-menu-item>
                    <el-menu-item index="/mange/two">添加二级分类</el-menu-item>
                    <el-menu-item index="/mange/listClass">列表分类</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path" :router="true">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>接口管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/mange/addApi">添加接口文档</el-menu-item>
                    <el-menu-item index="/mange/frontApi">前台接口列表</el-menu-item>
                    <el-menu-item index="/mange/backApi">后台接口列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>留言板管理</span>
                  </template>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>
  export default {
    name: "Mange",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style scoped>
  .el-header {
    line-height: 50px;
    color: #fff;
    background: #5E9FA1;
  }

  .el-header span:nth-child(2) {
    float: right;
  }
</style>