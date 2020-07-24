<template>
  <div id="app">
    <!-- 按钮测试 -->
    <div class="row">
      <pk-button>default</pk-button>
      <pk-button type="primary">primary</pk-button>
      <pk-button type="success">success</pk-button>
      <pk-button type="info">info</pk-button>
      <pk-button type="warning">warning</pk-button>
      <pk-button type="danger">danger</pk-button>
    </div>
    <div class="row">
      <pk-button plain>default</pk-button>
      <pk-button plain type="primary">primary</pk-button>
      <pk-button plain type="success">success</pk-button>
      <pk-button plain type="info">info</pk-button>
      <pk-button plain type="warning">warning</pk-button>
      <pk-button plain type="danger">danger</pk-button>
    </div>
    <div class="row">
      <pk-button round plain @click="fn">default</pk-button>
      <pk-button round plain type="primary">primary</pk-button>
      <pk-button round plain type="success">success</pk-button>
      <pk-button round plain type="info">info</pk-button>
      <pk-button round plain type="warning">warning</pk-button>
      <pk-button round plain type="danger">danger</pk-button>
    </div>
    <div class="row">
      <pk-button disabled round plain @click="fn">default</pk-button>
      <pk-button disabled round plain type="primary">primary</pk-button>
      <pk-button disabled round plain type="success">success</pk-button>
      <pk-button disabled round plain type="info">info</pk-button>
      <pk-button disabled round plain type="warning">warning</pk-button>
      <pk-button disabled round plain type="danger">danger</pk-button>
    </div>
    <!-- dialog测试 -->
    <pk-button round plain @click="fn">显示dialog</pk-button>
    <pk-dialog title="自定义" width="20%" top="200px" :visible="visible" @close="closeDialog">
      hahaahh
      <template v-slot:footer>
        <pk-button type="primary" @click="hideDialogHandle">确定</pk-button>
        <pk-button @click="hideDialogHandle">取消</pk-button>
      </template>
    </pk-dialog>
    <!-- <pk-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </pk-dialog> -->
    <!-- input测试 -->
    <div class="row">
      <pk-input placeholder="123" type="password" name="password" disabled></pk-input>
      <pk-input placeholder="123" v-model="username"></pk-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      username: 'haha'
    }
  },
  methods: {
    fn() {
      // console.log(this.$slots);
      this.visible = true;
    },
    hideDialogHandle() {
      this.visible = false;
    },
    closeDialog(val) {
      this.visible = val;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
</style>
