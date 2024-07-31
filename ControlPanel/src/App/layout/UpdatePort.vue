<template>
  <div class="updatePort">
    <van-cell-group inset>
      <van-field
          v-model="port"
          label="端口号"
          left-icon="smile-o"
          right-icon="warning-o"
          placeholder="请输入新的端口号"
          @keyup.enter="updatePort"
      />
    </van-cell-group>
  </div>
</template>

<script>
import {updatePort} from "@/api/home";
import { showSuccessToast, showFailToast } from 'vant';
export default {
  name: "UpdatePort",
  data(){
    return {
      port : ''
    }
  },
  methods : {
    updatePort () {
      const {code} = updatePort(this.port)
      if (code === 200) {
        // 修改成功
        showSuccessToast('修改成功')
      }else {
        showFailToast('修改失败')
      }
    }
  }
}
</script>

<style scoped>
.updatePort {
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
</style>