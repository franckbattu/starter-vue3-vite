<template>
  <nav>
    <ul>
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="link"
          active-class="link-active"
        >
          {{ t("navigation.home") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'login' }"
          class="link"
          active-class="link-active"
        >
          {{ t("navigation.login") }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Navbar",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
nav {
  overflow: hidden;
  background-color: var(--navbar-bg);
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.04) 0px 1px 1px 0px;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0 15px;
    gap: 1rem;
    height: var(--navbar-height);

    li {
      display: inline;
      font-family: var(--navbar-font);

      .link {
        text-decoration: none;
        color: var(--navbar-link-color);
        font-size: 0.9rem;
        font-weight: 00;
      }
    }
  }
}
</style>