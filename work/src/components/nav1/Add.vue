<template>
  <div class="add">
    <div class="froms">
      <h1>增加文章</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="是否显示" prop="delivery">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否推荐" prop="delivery">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="作者" prop="desc">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="导读">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" prop="">
          <div id="editor"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Add",
    data() {
      return {
        radio: '1',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入作者', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写作者名字', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }

</script>
<style scoped>
  h1 {
    text-indent: 2rem;
    line-height: 40px;
  }

  .el-form-item is-required {
    margin-left: 30px;
  }

  .el-form-item__content {
    margin-left: 120px;
  }

  .el-form-item {
    margin-bottom: 0px;
    margin: 10px 0;
  }

  .el-form-item__label {
    width: 120px;
  }

  .ueditor {
    padding-left: 70px;
  }

  .el-input input {
    float: left;
  }

  .el-form-item__content>.el-radio-group {
    float: left;
    margin-top: 13px;
  }

  .el-input {
    width: 80%!important;
  }

  .el-textarea {
    width: 80%!important;
  }

  .upload-demo,
  .el-button--primary {
    float: left;
  }

  .el-upload__tip {
    text-align: left;
  }
</style>