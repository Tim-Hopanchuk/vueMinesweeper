<script setup lang="ts">
const props = defineProps<{
  elapsedTime: number;
}>();

let message = `Victory! You won in ${props.elapsedTime} seconds`;
</script>

<template>
  <div class="overlay">
    <div class="notification border-out-thick">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.notification {
  background-color: #c3c3c3;
  padding: 30px 50px;
  text-align: center;

  font-family: arcadeclassic;
  font-size: 28px;
  letter-spacing: 2px;
}
</style>
