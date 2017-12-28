<template>
  <div class="one">
    <el-form ref="form" :model="form" label-width="120px">
      <h3>一级分类列表</h3>
      <el-form-item label="一级中文类名">
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="一级英文标识">
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "One",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: ''
      }
    },
    created() {
     axios({
       method:'POST',
       url:'/insert'
     }).then((res)=>{
       console.log(res)
     })
    }
  }

</script>
<style scoped>
  h3 {
    line-height: 80px;
    text-indent: 1.5rem;
  }
</style>