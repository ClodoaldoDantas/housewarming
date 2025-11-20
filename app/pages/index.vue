<script setup lang="ts">
const cartModalRef = ref<HTMLDialogElement>()
const selectedNumber = ref<number | null>(null)

const currentStep = ref<'order' | 'payment'>('order')

const openCartModal = (value: number) => {
  selectedNumber.value = value
  cartModalRef.value?.showModal()
}
</script>

<template>
  <main>
    <hero-section />

    <order-section>
      <raffle-map @on-select="openCartModal" />
    </order-section>

    <dialog
      ref="cartModalRef"
      class="cart-modal"
    >
      <order-form v-if="currentStep === 'order'" />
      <payment-details v-if="currentStep === 'payment'" />
    </dialog>
  </main>
</template>

<style scoped lang="scss">
.cart-modal {
  background-color: var(--color-white);
  width: min(90%, 48rem);
  padding: 2.4rem;
  border-radius: 1.2rem;
  border: 0;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
