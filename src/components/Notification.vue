<script setup lang="ts">
const props = defineProps<{
  elapsedTime: number;
}>();

const message = `Victory! You won in ${props.elapsedTime} seconds`;
</script>

<template>
  <div class="overlay">
    <div class="notification">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.overlay {
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.notification {
  padding: 30px 50px;
  background-color: #c3c3c3;
  border-left: 7px solid #ffffff;
  border-top: 7px solid #ffffff;
  border-right: 7px solid #828282;
  border-bottom: 7px solid #828282;
  font-family: arcadeclassic;
  font-size: 28px;
  letter-spacing: 2px;
  text-align: center;
}
</style>
