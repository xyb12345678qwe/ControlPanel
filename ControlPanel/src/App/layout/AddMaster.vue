<template>
  <div class="addMaster">
    <van-cell-group inset>
      <van-field
          v-model="masterQQ"
          label="主人QQ号"
          left-icon="smile-o"
          right-icon="warning-o"
          placeholder="请输入主人QQ号"
          @keyup.enter="addMaster"
      />
    </van-cell-group>
  </div>
</template>

<script>
import {addMaster} from "@/api/home";
import { showSuccessToast, showFailToast } from 'vant';
export default {
  name: "AddMaster",
  data() {
    return {
      masterQQ : ''
    }
  },
  methods : {
    addMaster () {
      const {code} = addMaster(this.masterQQ)
      if (code === 200) {
        // 修改成功
        showSuccessToast('添加成功')
      }else {
        showFailToast('添加失败')
      }
    }
  }
}
</script>

<style scoped>
.addMaster {
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