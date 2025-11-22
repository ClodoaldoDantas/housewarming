<!-- eslint-disable no-console -->
<script setup lang="ts">
const priceFormatted = getOrderPriceFormatted()
const nameInput = ref('')

const props = defineProps<{
	selectedNumber: number
}>()

const emit = defineEmits<{
	(e: 'onSuccess'): void
}>()

function handleSubmit() {
	/* TODO: implementar lógica de envio do pedido */
	console.log('Nome do cliente:', nameInput.value)
	console.log('Número selecionado:', props.selectedNumber)
	console.log('Valor total:', priceFormatted)

	emit('onSuccess')
}
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
		@submit.prevent="handleSubmit"
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
				v-model="nameInput"
				type="text"
				class="order__form-control"
				required
			>
		</div>

		<base-button type="submit">
			Confirmar
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
  }

  &__form > button {
    width: 100%;
  }
}
</style>
