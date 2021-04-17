<template>
  <li class="check-box" v-if="checked">
    <input type="checkbox" disabled checked />
    <span class="checked">
      {{ text }}
    </span>
  </li>
  <li class="check-box" v-else>
    <input type="checkbox" disabled />
    {{ text }}
  </li>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.check-box {
  list-style-type: none;
}
.check-box > .checked {
  color: rgb(134, 145, 148);
  text-decoration: line-through;
}
</style>
