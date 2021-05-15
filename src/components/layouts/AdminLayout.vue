<template>
  <div class="admin-container">
    <Navbar />
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../navigation/Navbar.vue";

export default defineComponent({
  name: "AdminLayout",
  components: {
    Navbar,
  },
});
</script>

<style lang="scss" scoped>
.admin-container {
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