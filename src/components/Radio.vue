<template>
  <label class="pk-radio" :class="{ checked: label == value }">
    <span class="pk-radio__outer">
      <input type="radio" class="pk-radio__input" :value="label" :name="name" v-model="model" @click="chooseHandle" />
      <span class="pk-radio__inner"></span>
    </span>
    <label for="" class="pk-radio__label">
      <slot>
        <template v-if="!$slots.default">
          {{ label }}
        </template>
      </slot>
    </label>
  </label>
</template>

<script>
export default {
  name: 'pkRadio',
  data() {
    return {
      
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    chooseHandle() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style scoped="scoped">
.pk-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.pk-radio__outer {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.pk-radio__input {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.pk-radio__inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.pk-radio__inner:after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}
.pk-radio__label {
  font-size: 14px;
  padding-left: 10px;
}
.pk-radio.checked .pk-radio__inner {
  border-color: #409eff;
  background: #409eff;
}
.pk-radio.checked .pk-radio__inner::after {
  transform: translate(-50%, -50%) scale(1);
}
.pk-radio.checked .pk-radio__label {
  color: #409eff;
}
</style>
