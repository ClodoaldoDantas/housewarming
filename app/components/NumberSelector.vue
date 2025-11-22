<script setup lang="ts">
interface Props {
	status?: 'available' | 'pending' | 'unavailable'
}

const { status = 'available' } = defineProps<Props>()
</script>

<template>
	<button
		type="button"
		class="number-selector"
		v-bind="$attrs"
		:data-status="status"
	>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.number-selector {
  height: 4rem;
  width: 4rem;
  appearance: none;
  border-radius: 0.4rem;
  border: 1px solid transparent;

  font-size: 1.6rem;
  font-weight: 600;

  &[data-status="available"] {
    border-color: var(--color-border);
    background-color: transparent;

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  &[data-status="pending"] {
    cursor: not-allowed;
    background-color: var(--color-pending);
    color: var(--color-white);
  }

  &[data-status="unavailable"] {
    cursor: not-allowed;
    background-color: var(--color-unavailable);
    color: var(--color-white);
  }
}
</style>
