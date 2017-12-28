<template>
  <div class="login">
    <ul>
      <li class="cur"><h3>个人博客:</h3></li>
      <li>
        <label>账号:</label><input
        type="text"
        id="user"
        placeholder="请输入用户名"
        @blur="changeState(name)"
        v-model="name.value"/>
      </li>
      <li>
        <label>密码:</label><input
        type="password" id="pwd"
        placeholder="请输入密码"
        @blur="changeState(pwd)"
        v-model="pwd.value"/>
      </li>
      <el-button
        type="success"
        @click="submit"
        >成功按钮</el-button>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        name: {
          value: '',
          reg: /^[a-zA-Z]{4,10}$/,
          msg: "您输入的用户名格式有误",
          state: false
        },
        pwd: {
          value: '',
          reg: /^[a-zA-Z0-9]\w{6,16}/,
          msg: "您输入的密码格式有误",
          state: false
        }
      }
    },
    methods: {
      changeState(item)
  {
    item.state = true

  }
  ,
  submit(){
      var nameVal=this.name.value;
      var pwdVal=this.pwd.value;
    if(nameVal!=''&&this.name.reg.test(nameVal)){
         if(pwdVal!=''&&this.pwd.reg.test(pwdVal)){
           location.href= 'http://localhost:8081/#/mange'
         }else{
           alert(this.pwd.msg)
         }
    }else{
      alert(this.name.msg)
    }
   }
  }
  }
</script>


<style scoped>
  .login {
    width: 323px;
    height: 320px;
    border: 1px solid #EF5A00;
    margin: 50px auto;
    padding: 15px;
  }

  ul li h3 {
    line-height: 40px;
    color: #EF5A00;
  }

  ul li.cur {
    border: none;
  }

  li {
    list-style: none;
    padding-left: 10px;
  }

  ul li {
    width: 240px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    margin-left: 38px;
    margin-top: 15px;
    border: 1px solid #ccc;
  }

  ul li input {
    border: none;
    padding-left: 10px;
    border: none;
  }

  button {
    width: 250px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    margin-left: 38px;
    margin-top: 15px;
    border: none;
    background: #EF5A00;
    color: #fff;
  }
</style>
