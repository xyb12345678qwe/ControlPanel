<template>
  <div>
    <header>
      <Row>
        <Col span="0">
        <van-image round width="32px" height="32px"
          src="http://web-first-demo.oss-cn-shanghai.aliyuncs.com/cc359b59-80d9-40ce-b966-3118d850814d.jpg"
          style="margin-left: 20px; margin-top: 7px" />

        </Col>
        <Col span="0">
        <h1 style="font-size: 16px; text-indent: 10px;">MzBot网页控制台</h1>
        </Col>
        <Col>
        </Col>
      </Row>
    </header>
    <Sidebar v-model="action">
      <SidebarItem title="主页&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/home')">
      </SidebarItem>
      <SidebarItem title="增加主人&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/addMaster')">
      </SidebarItem>
      <SidebarItem title="减少主人&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/subMaster')">
      </SidebarItem>
      <SidebarItem title="增加机器人配置&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/addRobot')">
      </SidebarItem>
      <SidebarItem title="修改机器人配置&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/updateRobot')">
      </SidebarItem>
      <SidebarItem title="更改server端口&nbsp;&nbsp;&nbsp;&nbsp;" @click="this.$router.push('/updatePort')">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
      <SidebarItem title="蕨主人&nbsp;&nbsp;&nbsp;&nbsp;">
      </SidebarItem>
    </Sidebar>
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Image, Row, Col } from 'vant'
import { ref } from 'vue'
export default {
  components: {
    Sidebar,
    SidebarItem,
    Image,
    Row,
    Col,
  },
  setup() {
    const action = ref(0)
    return {
      action
    }
  },
}
</script>

<style scoped>
.van-sidebar {
  width: 256px;
  height: 100%;
}
</style>