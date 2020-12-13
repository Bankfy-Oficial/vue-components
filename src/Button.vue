<template>
  <button
      class="w-full flex justify-around px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="{
        'text-white bg-primary hover:bg-primary-800': color === 'primary',
        'border-gray-300 text-gray-700 bg-white hover:bg-gray-100 ': color === 'light',
      }"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <span v-if="label">{{ label }}</span>
    <span class="flex w-full justify-around" v-else-if="$slots.default">
      <slot/>
    </span>

  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    color: {
      type: String,
      default: () => 'primary',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'light'
        ].indexOf(value) >= 0
      }
    },
  }
}
</script>

<style scoped>

</style>