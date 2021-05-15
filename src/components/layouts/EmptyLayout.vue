<template>
  <div class="empty-container">
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyLayout",
});
</script>

<style lang="scss">
.empty-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  font-size: 100%;

  > .content {
    flex-grow: 1;
  }
}
</style>