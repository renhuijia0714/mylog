<template>
  <div class="person">
      <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="head_portrait">
                    <img :src="href">
                </div>
            </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  name: "person",
  data() {
    return {
      href: require("../assets/images/Summer.jpg")
    };
  }
};
</script>
<style>
.person {
  margin-top: 40px;
  height: 200px;
  border-radius: 10px;
  background: url("../assets/images/bg.jpg");
  background-size: 100% 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.head_portrait {
  width: 120px;
  height: 160px;
  padding-top: 40px;
  margin: 0 auto;
}
.head_portrait img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 200px;
  
}
</style>
