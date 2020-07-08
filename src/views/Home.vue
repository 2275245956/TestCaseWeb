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
            <div class="navMenu" style="width:40%;float:right;height:inherit;">
              <el-menu
                :default-active="activePage"
                router
                class="el-menu-demo"
                mode="horizontal"
                background-color="#455b9d"
                text-color="#fff"
                @select="SelectChanged"
                style="height:inherit"
                active-text-color="#ffd04b">
                <el-menu-item index="/testCaseIndex" style="height:100%">TEST CASE</el-menu-item>
                <el-menu-item index="/testPlanIndex" style="height:100%">TEST PLAN</el-menu-item>
                <el-menu-item index="/testRunIndex" style="height:100%">TEST RUN</el-menu-item>
                <el-menu-item index="/settingIndex" style="height:100%">SETTING</el-menu-item>
              </el-menu>
              </div> 
          </el-main>
        </el-container>
      </div>
      <div>
       <router-view/>
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
      activePage:"/testCaseIndex"
   
    };
  },
  components: {
    LoginfoBar,
  
  },
  created(){
   
   var logStr=storage.getItem("loginInfo");
   if(logStr==null || logStr==""){
      if (this.$router.currentRoute.name != "Login") {
        this.$router.replace("/");

      }
   }
   else{
     this.LoginInfo=JSON.parse(logStr);
   }

  },
  methods: {
    SelectChanged(index){
     
    }
    
  },
};
</script>
<style scoped>
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
