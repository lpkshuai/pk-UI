<template>
  <button
    class="pk-btn"
    :class="[`pk-btn--${type}`, { 'plain': plain }, { 'round': round }, {'disabled': disabled}]"
    :disabled="disabled"
    @click="handleClick"
   >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'pkButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // console.log(this.type);
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style scoped="scoped">
.pk-btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
/* .pk-btn.plain:hover, .pk-btn.plain:focus {
  background: none;
} */
/* 圆角 */
.pk-btn.round {
  border-radius: 16px;
}
/* 禁用 */
.pk-btn.disabled {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .65;
}

.pk-btn--default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.pk-btn--default:hover,
.pk-btn--default:focus {
  background-color: #ccc;
}
.pk-btn--default.plain {
  color: #ccc;
  background: none;
  border-color: #ccc;
}

.pk-btn--primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.pk-btn--primary:hover,
.pk-btn--primary:focus {
  background-color: #2e6da4;
}
.pk-btn--primary.plain {
  color: #2e6da4;
  background: none;
  border-color: #2e6da4;
}

.pk-btn--success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.pk-btn--success:hover,
.pk-btn--success:focus {
  background-color: #4cae4c;
}
.pk-btn--success.plain {
  color: #4cae4c;
  background: none;
  border-color: #4cae4c;
}

.pk-btn--info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.pk-btn--info:hover,
.pk-btn--info:focus {
  background-color: #46b8da;
}
.pk-btn--info.plain {
  color: #46b8da;
  background: none;
  border-color: #46b8da;
}

.pk-btn--warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.pk-btn--warning:hover,
.pk-btn--warning:focus {
  background-color: #eea236;
}
.pk-btn--warning.plain {
  color: #eea236;
  background: none;
  border-color: #eea236;
}

.pk-btn--danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.pk-btn--danger:hover,
.pk-btn--danger:focus {
  background-color: #d43f3a;
}
.pk-btn--danger.plain {
  color: #d43f3a;
  background: none;
  border-color: #d43f3a;
}

</style>
