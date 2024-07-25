<template>
  <div class="login-container">
    <div class="form-container">
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
      username: '',
      password: '',
      checked : false
    };
  },
  methods: {
    async Login() {
      // 登录
      const res = await login(this.username , this.password)
      if (res.data === '登陆成功') {

      }
      if (this.checked) {
        localStorage.setItem("username" , this.username)
        localStorage.setItem("password" , this.password)
      }
    },
    forgotPassword() {
      // 忘记密码
    },
    guestLogin() {
      // 游客登录
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
.login-container {
  top: 200px;
  width: auto;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("@/assets/8d8d10a0cc69149d7af460b727a8165d.jpg");
}
.form-container {
  display: flex;
  flex-direction: column;
  top: 20%;
  left: 50%;
  border-radius: 5px;
}
</style>
