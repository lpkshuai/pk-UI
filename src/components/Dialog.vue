<template>
  <transition name="dialog-trans">
    <div class="pk-dialog__wrap" v-if="visible" @click.self="handleClose">
      <div class="pk-dialog" :style="{ width: width, top: top }">
        <div class="pk-dialog__header">
          <slot name="title">
            <span class="pk-dialog__title">{{ title }}</span>
          </slot>
        </div>
        <div class="pk-dialog__body"><slot></slot></div>
        <div class="pk-dialog__footer" v-if="$slots.footer"><slot name="footer"></slot></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'pkDialog',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '20rem'
    },
    top: {
      type: String,
      default: '20vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close', false);
    }
  }
};
</script>

<style scoped="scoped">
.pk-dialog__wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.pk-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* width: 20rem; */
  margin: 0 auto;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.pk-dialog__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.pk-dialog__body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.pk-dialog__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
/* 深度选择器 让样式穿透组件影响到外面写法：  1.传统  >>> 2.sass  ::v-deep  3.less  /deep/ */
>>> .pk-dialog__footer button {
  margin: 0 5px;
}

/* 动画 name-enter/leave-active*/
.dialog-trans-enter-active {
  animation: fade .3s;
}
.dialog-trans-leave-active {
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
