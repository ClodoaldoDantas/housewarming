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

		<button
			type="button"
			class="close-modal-button"
			aria-label="Fechar modal"
			@click="closeModal"
		>
			<phosphor-icon
				name="x"
				weight="bold"
			/>
		</button>
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

.close-modal-button {
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--color-text-secondary);
  transition: color 0.2s;

  &:hover {
    color: var(--color-text-primary);
  }
}
</style>
