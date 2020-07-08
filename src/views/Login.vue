<template>
  <div id="Login">
    <div class="caption">
      <div class="Top">
        <el-container>
          <el-header>
            <LoginfoBar />
          </el-header>
          <el-main>テストケース管理ツール</el-main>
        </el-container>
      </div>
      <div class="Bottom">
        <el-form :model="User" class="demo-dynamic UserForm">
          <div class="package">
            <!-- ProjectID -->
            <label>プロジェクト</label>
            <el-form-item size="mini">
              <el-select v-model="User.ProjectId">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <!-- LoginID -->
            <label>ログインID</label>
            <el-form-item
              size="mini"
              prop="LoginId"
              :rules="{
                required: true,
                message: 'ログインIDは空にできません。',
                trigger: 'blur',
              }"
            >
              <el-input v-model="User.LoginId" class="inputText"></el-input>
            </el-form-item>

            <!-- password -->
            <label>パスワード</label>
            <el-form-item
              size="mini"
              prop="Password"
              :rules="{
                required: true,
                message: 'パスワードは空にできません。',
                trigger: 'blur',
              }"
            >
              <el-input
                type="Password"
                v-model="User.Password"
                class="inputText"
              ></el-input>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
              <el-button class="Subbtn" @click="onSubmit">ログイン</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

import api from "../assets/apiData";
import storage from "../assets/localstorage"
import LoginfoBar from "../components/LoginfoBar"

export default {
  data() {
    return {
      User: {
        LoginId: "pasys",
        Password: "fish",
        ProjectId: 0,
      },
      LoginInfo:{
        NickName:"",
        LoginId:"",
        UserId:0,
        Role:0,
        Token:""
      },
      options: [
        {
          value: 0,
          label: "Mail1",
        },
        {
          value: 1,
          label: "Mail2",
        },
        {
          value: 2,
          label: "JavaScript",
        },
      ],
    };
  },
  components: {
    LoginfoBar
  },
  created(){
     storage.setItem("loginInfo","");
  },
  methods: {
    CheckInput() {
      if (this.User.LoginId == "") {
        this.$message({
          type: "error",
          message: "ログインIDを入力して下さい。",
        });
        return false;
      }

      if (this.User.Password == "") {
        this.$message({
          type: "error",
          message: "パスワードを入力して下さい。",
        });
        return false;
      }
      return true;
    },
    onSubmit() {
      var $this=this;//暂存对象
      if (this.CheckInput()) {
         api
        .Login(this.User)
        .then(function(data) {
          if(data!=undefined && data.result){
            var _rpData=data.messageValue;
             $this.LoginInfo=_rpData;
             storage.setItem("token",_rpData.token);
             storage.setItem("loginInfo",JSON.stringify(_rpData));
             $this.$router.replace("/home");
          }else{
               $this.$message({
                  type: "error",
                  message:storage.getItem("errorMsg"),
             });
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.Title {
  font-size: 35px;
  color: aliceblue;
  opacity: 0.75;
  line-height: 170px;
  margin: 0;
}
.UserForm {
  border: 1px solid #fdcd64;
  background-color: #ffebc1;
  width: 400px;
  margin: auto;
  position: relative;
  top: 100px;
  border-radius: 5px;
}
.package {
  width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 25px;
}
.inputText {
  width: 50%;
}
.Subbtn {
  width: 100%;
}
.el-select {
  display: block;
}
.el-header {
  background-color: #2c3957;
  height: 25px !important;
  line-height: 25px !important;
}
.el-main {
  background-color: #455b9d;
  height: 100px;
  line-height: 100px;
  font-weight: 800;
  font-size: 20px;
  color: white;
  padding: 0px 0px 0px 50px !important;
}
</style>
