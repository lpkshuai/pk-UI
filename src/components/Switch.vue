<template>
  <div class="pk-switch" @click="switchChangeHandle">
    <input type="checkbox" class="pk-switch__input" :name="name">
    <span class="pk-switch__core" :class="{'switchOn' : value}">
      <span class="pk-switch__btn" :class="{'btnOn' : !value}"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'pkSwitch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    methods: {
      switchChangeHandle() {
        this.$emit('input', !this.value);
      }
    }
  }
</script>

<style scoped="scoped">
  .pk-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .pk-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .pk-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    border-color: rgb(255, 73, 73);
    background-color: rgb(255, 73, 73);
  }
  .pk-switch__btn {
    position: absolute;
    top: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
  .switchOn {
    border-color: rgb(19, 206, 102);
    background-color: rgb(19, 206, 102);
  }
  .btnOn {
    left: 1px;
  }
  /* .switchOff {
    border-color: rgb(255, 73, 73);
    background-color: rgb(255, 73, 73);
  } */
</style>
