<template>
  <div class="container" >
    <div class="left">
      <Bar/>
    </div>
    <div class="right">
      <Row style="background-color: white;height: 32px;" justify="space-between">
        <Col>
          <van-icon name="bars" size="32px"/>
          <van-icon name="cart-o" color="#1989fa" size="32px"/>
         <van-icon name="fire-o" color="#ee0a24" size="32px"/>
        </Col>
        <Col>
          <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
            <template #reference>
              <van-button type="info">
                <template #icon>
                  <van-icon name="user" />
                </template>
                <span style="font-size: 16px">root</span>
              </van-button>
            </template>
          </van-popover>
        </Col>
      </Row>
      <div class="main" style="height: 1024px;">
        <router-view></router-view>
      </div>
      <footer>
        <span style="text-align: center" >abc</span>
      </footer>
    </div>
  </div>
</template>

<script>
import Bar from "@/App/home/Bar.vue";
import {Row, Col, showToast} from 'vant'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {ref} from "vue";
export default {
  components : {
    Bar,
    Row,
    Col
  },
  setup(){
    const showPopover = ref(false);
    const router = useRouter()
    const store = useStore()
    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: '重置密码' },
      { text: '注销' },
      { text: '登出' },
    ];
    const onSelect = (action) => {
      if (action.text === actions[0].text) {
        router.push('/updatePassword')
      }else if (action.text === actions[1].text) {
        //TODO
      }else if (action.text === actions[2].text) {
        localStorage.removeItem("token")
        store.commit('setToken' , '')
        router.push('/')
      }
    }

    return {
      actions,
      onSelect,
      showPopover,
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.left {
  width: 256px;
}

.right {
  flex: 1;
}
</style>