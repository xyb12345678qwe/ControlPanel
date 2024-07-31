<template>
  <div class="login-container">
    <div class="form-container">
      <Row>
        <h1 class="login-font">MzBot控制台</h1>
      </Row>
      <Row>
        <Field v-model="username" label="用户名" required right-icon="delete-o" @click-right-icon="resetUsername">
        </Field>
      </Row>
      <hr>
      <Row>
        <Field v-model="password" label="密码" type="password" required right-icon="delete-o" @click-right-icon="resetPassword">
        </Field>
      </Row>
      <br>
      <Row type="flex" justify="space-between">
        <Col>
          <Checkbox v-model="checked" shape="square">&nbsp;记住我</Checkbox>
        </Col>
        <Col>
          <a href="#" style="text-decoration: none;">忘记密码?</a>
        </Col>
      </Row>
      <Row>
        <Button @click="Login" type="info" icon="sign" hairline
                color="linear-gradient(to right, #ff6034, #ee0a24)" size="large">登录</Button>
      </Row>
    </div>
  </div>
</template>

<script>
import {Row  ,Field ,Col ,Button ,Checkbox, } from 'vant'
import { login } from "@/api/login";
export default {
  components : {
    Row,
    Field,
    Button,
    Col,
    Checkbox,
  },
  data() {
    return {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
      checked : false
    };
  },
  methods: {
    Login() {
      // 登录
      const {code , token} = login(this.username , this.password)
      if (code === 200) {
        // 此时登陆成功
        this.$store.commit('setToken' , token)
        if (this.checked) {
          localStorage.setItem("username" , this.username)
          localStorage.setItem("password" , this.password)
        }

        this.$router.push('/home')
      }else {
        // 登录失败
        this.username = ''
        this.password = ''
      }
    },
    resetUsername () {
      this.username = ''
    },
    resetPassword () {
      this.password = ''
    }
  },
};
</script>

<style scoped>
.login-font {
  font-size: 52px;
}
.login-container {
  top: 200px;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 255, 0.5));
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-container {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid;
  border-image-source: linear-gradient(to right, blue, white);
  border-image-slice: 1;
  padding: 10px;
  margin: 10px;
}
</style>