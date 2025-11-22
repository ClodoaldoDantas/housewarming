<script setup lang="ts">
const cartModalRef = ref()
const selectedNumber = ref<number | null>(null)

const currentStep = ref<'order' | 'payment'>('order')
const onNextStep = () => currentStep.value = 'payment'

const openCartModal = (value: number) => {
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
				@on-success="onNextStep"
			/>
			<payment-details v-else />
		</CartModal>
	</main>
</template>
