<script setup lang="ts">
type Step = 'order' | 'payment'

const cartModalRef = ref()
const selectedNumber = ref<number | null>(null)
const currentStep = ref<Step>('order')

const onNextStep = (step: Step) => {
  currentStep.value = step
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
      <raffle-map @on-select="openCartModal" />
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
