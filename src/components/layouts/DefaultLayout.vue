<template>
  <div class="default-container">
    <Navbar />
    <section class="content">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../navigation/Navbar.vue";
import Footer from "../navigation/Footer.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style lang="scss">
.default-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  font-size: 100%;

  // To display content just after navbar
  padding-top: var(--navbar-height);

  > .content {
    flex-grow: 1;
  }
}
</style>