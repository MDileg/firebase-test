<template>
  <button
    class="hamburger hamburger--collapse"
    :class="{ 'is-active': active }"
    type="button"
    @click="$emit('clicked')"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean,
      },
    },
  };
</script>
