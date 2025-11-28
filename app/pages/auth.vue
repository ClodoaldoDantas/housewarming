<script setup lang="ts">
import type { FetchError } from 'ofetch'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import z from 'zod'

const { fetch: refreshSession } = useUserSession()

const { errors, handleSubmit, defineField, isSubmitting, setFieldError } = useForm({
  initialValues: {
    password: '',
  },
  validationSchema: toTypedSchema(
    z.object({
      password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    }),
  ),
})

const [password, passwordAttrs] = defineField('password')

const inputType = ref<'password' | 'text'>('password')
const inputIcon = computed(() =>
  inputType.value === 'password' ? 'eye' : 'eye-closed',
)

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: {
        password: values.password,
      },
    })

    await refreshSession()
    await navigateTo('/admin')
  }
  catch (err) {
    const error = err as FetchError

    if (error.statusCode === 401) {
      setFieldError('password', 'Credenciais inválidas.')
      return
    }

    setFieldError('password', 'Ocorreu um erro. Tente novamente mais tarde.')
  }
})
</script>

<template>
  <section class="auth">
    <div class="auth__container">
      <header class="auth__header">
        <div class="auth__icon">
          <phosphor-icon
            name="lock"
            weight="bold"
          />
        </div>

        <h1 class="auth__title">
          Login Administrativo
        </h1>
      </header>

      <form
        class="auth__form"
        @submit="onSubmit"
      >
        <div class="auth__form-group">
          <label for="password">Digite sua senha</label>

          <div
            class="auth__form-input"
            :class="{ 'auth__form-input--error': !!errors.password }"
          >
            <input
              id="password"
              v-model="password"
              :type="inputType"
              v-bind="passwordAttrs"
            >

            <button
              type="button"
              aria-label="Mostrar senha"
              @click="togglePasswordVisibility"
            >
              <phosphor-icon
                :name="inputIcon"
                weight="bold"
              />
            </button>
          </div>

          <span
            v-show="!!errors.password"
            class="field-error"
          >
            {{ errors.password }}
          </span>
        </div>

        <base-button
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Processando...' : 'Entrar' }}
        </base-button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;

  &__container {
    width: min(100%, 40rem);
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 3.2rem;
  }

  &__title {
    margin-top: 1.6rem;
    font-size: var(--text-xl);
  }

  &__icon {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    display: grid;
    place-items: center;
    border: 0.8rem solid #D5EFFF;

    svg {
      font-size: 2rem;
      color: var(--color-white);
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    label {
      font-size: var(--text-sm);
      line-height: 2rem;
      color: var(--color-text-primary);
    }
  }

  &__form-input {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 4.2rem;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.8rem;
    padding-inline: 1.4rem;

    &--error {
      outline: 2px solid var(--color-error);
    }

    & > input {
      height: 100%;
      flex: 1;
      border: 0;
      outline: 0;
      font-size: 1.6rem;
    }

    & > button {
      border: 0;
      background: transparent;
      display: grid;
      place-items: center;

      svg {
        font-size: 2rem;
        color: var(--color-unavailable);
      }
    }
  }
}
</style>
