<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <Form
          class="form"
          v-slot="{ meta, errors }"
          :validation-schema="schema"
          validate-on-mount
          @submit="onSubmit"
        >
          <div class="field">
            <label for="email">
              {{ t("navigation.form.email") }}
            </label>
            <Field name="email" type="email" />
            <small v-if="errors.email">
              {{ t(errors.email) }}
            </small>
            <!-- Just use ErrorMessage if no translation -->
          </div>
          <div class="field">
            <label for="password">
              {{ t("navigation.form.password") }}
            </label>
            <Field name="password" type="password" />
            <small v-if="errors.password">
              {{ t(errors.password) }}
            </small>
          </div>
          <button type="submit" :disabled="!meta.valid">
            {{ t("navigation.login") }}
          </button>
        </Form>
        <div class="back">
          <router-link :to="{ name: 'home' }">
            {{ t("navigation.home") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Login",
  components: {
    Form,
    Field,
  },

  setup() {
    const { t } = useI18n();

    const schema = yup.object({
      email: yup
        .string()
        .required('navigation.form.emailRequired')
        .email('navigation.form.emailInvalid'),
      password: yup.string().required('navigation.form.passwordRequired'),
    });

    function onSubmit(values: Record<string, string>) {
      alert(JSON.stringify(values, null, 2));
    }

    return {
      onSubmit,
      schema,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  @include m.card;
  width: 350px;

  &-body {
    @include m.card-body;

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .field {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
    }

    .back {
      margin-top: 1rem;
      text-align: center;
      font-size: 80%;
    }
  }
}
</style>
