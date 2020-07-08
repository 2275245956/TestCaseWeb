<template>
  <div id="home">
    <div class="caption">
      <div class="Top">
        <el-container>
          <el-header>
            <LoginfoBar  v-bind="LoginInfo"/>
          </el-header>
          <el-main>
            <div class="block"> 
              <el-avatar shape="square" size="large" :src="logoSrc"></el-avatar>
             </div>
            <div class="block"> <label>テストケース管理ツール</label>   </div>
          </el-main>
        </el-container>
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
      logoSrc:require('../assets/image/logo.png'),
      LoginInfo:{},
    };
  },
  components: {
    LoginfoBar
  },
  created(){
   var logStr=storage.getItem("loginInfo");
   if(logStr==null || logStr==""){
     debugger;
      if (this.$router.currentRoute.name != "Login") {
        this.$router.replace("/");
      }
   }
   else{
     this.LoginInfo=JSON.parse(logStr);
   }

  },
  methods: {
  
    
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
  text-align: center;
  height: 25px !important;
  line-height: 25px !important;
}
.el-main {
  background-color: #455b9d;
  height: 50px;
  text-align: left;
  vertical-align: middle;;
  line-height: 50px;
  font-weight: 800;
  font-size: 20px;
  color: white;
  padding:0px !important;

  overflow: hidden;
}
.block{
  margin:5px !important;
  height: 40px !important;
  width: auto !important;
  float:left;
  line-height: 40px !important;
  padding: 0px !important;
  vertical-align: middle !important;
}
</style>
