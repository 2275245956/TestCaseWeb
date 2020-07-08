<template>
  <div id="loginInfoBar">
    <div v-if="logStatus == 0" class="login">
      <div class="username">
        <el-link @click="login" icon="el-icon-video-play">ログイン</el-link>
      </div>
    </div>
    <div v-else class="logout">
      <div class="username">
        <div style="float:left">
          <label style="color:#ccc">ログイン中:</label>
          <label style="margin-left:5px;font-weight:800">{{ LoginInfo.nickName }}</label>
        </div>

        <div class="operateBtn" style="float:left;margin-left:15px">
          <el-link @click="logOut" icon="el-icon-video-pause"
            >ログアウト</el-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storage from "../assets/localstorage";
import route from "../router/index";

export default {
  name: "loginInfoBar",
  props: {},
  data() {
    return {
      LoginInfo: {
        nickname: "",
        loginId: "",
        userId: 0,
        role: 0,
        token: "",
      },
      logStatus:0
    };
  },
  created() {
    var logStr = storage.getItem("loginInfo");
    if (logStr == null || logStr == "") {
      if (this.$router.currentRoute.name != "Login") {
        this.logStatus=0;
        this.$router.replace("/");
      }
    } else {
      this.logStatus=1;
      this.LoginInfo = JSON.parse(logStr);
    }
  },
  methods: {
    logOut() {
      storage.setItem("loginInfo", "");
      if (this.$router.currentRoute.name != "Login") {
        this.$router.replace("/");
      }
    },
    login() {
      if (this.$router.currentRoute.name != "Login") {
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style scoped>
#loginInfoBar {
  float: right;
}
.logout,
.login,
a {
  font-size: 10px !important;
  float: left !important;
  color: white !important;
  cursor: pointer !important;
}
</style>
