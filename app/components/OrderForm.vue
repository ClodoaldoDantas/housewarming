<script setup lang="ts">
import type { FetchError } from 'ofetch'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import z from 'zod'

const props = defineProps<{
  selectedNumber: number
}>()

const emit = defineEmits<{
  (e: 'onSuccess'): void
}>()

const { errors, handleSubmit, defineField, isSubmitting, resetForm, setFieldError } = useForm({
  initialValues: {
    name: '',
  },
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    }),
  ),
})

const [name, nameAttrs] = defineField('name')
const priceFormatted = getOrderPriceFormatted()

watch(() => props.selectedNumber, () => {
  resetForm()
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/tickets', {
      method: 'PATCH',
      body: {
        ownerName: values.name,
        number: props.selectedNumber,
      },
    })

    emit('onSuccess')
  }
  catch (err) {
    const error = err as FetchError

    if (error.statusCode === 409) {
      setFieldError('name', 'O número selecionado já foi reservado. Por favor, escolha outro número.')
      return
    }

    setFieldError('name', 'Ocorreu um erro. Tente novamente mais tarde.')
  }
})
</script>

<template>
  <div class="order__icon">
    <phosphor-icon
      name="currency-circle-dollar"
      weight="bold"
    />
  </div>

  <div class="order__details">
    <h3 class="order__title">
      Realizar pedido
    </h3>

    <p class="order__description">
      Você selecionou o número: <b>{{ props.selectedNumber }}</b>
    </p>

    <p class="order__total">
      Valor total: <b>{{ priceFormatted }}</b>
    </p>
  </div>

  <form
    class="order__form"
    @submit="onSubmit"
  >
    <div class="order__form-group">
      <label
        class="order__form-label"
        for="name"
      >
        Digite seu nome
      </label>

      <input
        id="name"
        v-model="name"
        type="text"
        class="order__form-control"
        :class="{ 'order__form-control--error': !!errors.name }"
        v-bind="nameAttrs"
      >

      <span
        v-show="!!errors.name"
        class="field-error"
      >
        {{ errors.name }}
      </span>
    </div>

    <base-button
      type="submit"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Processando...' : 'Finalizar pedido' }}
    </base-button>
  </form>
</template>

<style lang="scss" scoped>
.order {
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

  &__details {
    margin-block: 2rem;
  }

  &__title {
    font-size: var(--text-lg);
    margin-bottom: 0.8rem;
  }

  &__description,
  &__total {
    color: var(--color-text-secondary);
  }

  &__form-group {
    margin-bottom: 2.4rem;
  }

  &__form-label {
    display: block;
    font-size: var(--text-sm);
    line-height: 2rem;
    margin-bottom: 0.6rem;
    color: var(--text-primary);
  }

  &__form-control {
    width: 100%;
    padding: 1rem 1.4rem;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.8rem;

    &--error {
      outline: 2px solid var(--color-error);
    }
  }

  &__form > button {
    width: 100%;
  }
}
</style>
