<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('点击了按钮');
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
  margin-bottom: 10px;
}
</style>
