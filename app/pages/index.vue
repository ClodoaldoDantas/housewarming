<script setup lang="ts">
type Step = 'order' | 'payment'

const { data: tickets, error, refresh, pending } = await useLazyFetch('/api/tickets')

const cartModalRef = ref()
const selectedNumber = ref<number | null>(null)
const currentStep = ref<Step>('order')

const onNextStep = (step: Step) => {
  refresh().then(() => {
    currentStep.value = step
  })
}

const openCartModal = (value: number) => {
  currentStep.value = 'order'
  selectedNumber.value = value
  cartModalRef.value.openModal()
}
</script>

<template>
  <main>
    <hero-section />

    <order-section>
      <raffle-map-skeleton v-if="pending" />

      <p
        v-else-if="error"
        class="error-message"
      >
        Não foi possível carregar o mapa de números. Tente recarregar a página.
      </p>

      <raffle-map
        v-else
        :tickets="tickets || []"
        @on-select="openCartModal"
      />
    </order-section>

    <CartModal ref="cartModalRef">
      <order-form
        v-if="currentStep === 'order' && selectedNumber !== null"
        :selected-number="selectedNumber"
        @on-success="() => onNextStep('payment')"
      />
      <payment-details v-else />
    </CartModal>
  </main>
</template>

<style lang="scss" scoped>
.error-message {
  font-weight: 500;
  text-align: center;
  color: var(--color-error);
}
</style>
