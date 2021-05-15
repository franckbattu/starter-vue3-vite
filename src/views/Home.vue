<template>
  <div class="container">
    <div class="home">
      <h1 class="title">
        POC Vue 3 with ViteJS
      </h1>
      <button @click="toggleTheme">
        {{
          isDarkMode
            ? t('navigation.theme.switchLightMode')
            : t('navigation.theme.switchDarkMode')
        }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { usePreferencesStore } from "@app/store";
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useTitle } from '@vueuse/core';

export default defineComponent({
  name: "Home",
  setup() {
    const { t } = useI18n();
    const title = computed(() => t('navigation.home'));
    useTitle(title);

    const preferencesStore = usePreferencesStore();
    const isDarkMode = computed(() => preferencesStore.isDarkTheme);

    function toggleTheme() {
      preferencesStore.toggleTheme();
    }

  return {
      t,
      isDarkMode,
      toggleTheme,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  @include m.container;

  .home {
    display: flex;
    flex-direction: column;

    > .title {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
}
</style>