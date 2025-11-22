<script setup lang="ts">
const cartModalRef = ref<HTMLDialogElement>()

const openModal = () => {
	cartModalRef.value?.showModal()
}

const closeModal = () => {
	cartModalRef.value?.close()
}

defineExpose({
	openModal,
	closeModal,
})
</script>

<template>
	<dialog
		ref="cartModalRef"
		class="cart-modal"
	>
		<slot />
	</dialog>
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
