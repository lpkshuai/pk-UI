<template>
  <div class="pk-input">
    <input
      class="pk-input__inner"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :class="{disabled: disabled}"
      :value="value"
      @input="inputHandle"
    >
  </div>
</template>

<script>
  export default {
    name: 'pkInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      inputHandle(e) {
        this.$emit('input', e.target.value);
      }
    }
  }
</script>

<style scoped="scoped">
  .pk-input {
    position: relative;
    width: 100%;
    display: inline-block;
  }
  .pk-input__inner {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 40px;
    box-sizing: border-box;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .disabled {
    cursor: not-allowed;
    color: #c0c4cc;
    border-color: #e4e7ed;
    background-color: #f5f7fa;
  }
</style>
