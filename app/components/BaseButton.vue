<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'success'
}

const { variant = 'primary' } = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    class="base-button"
    :data-variant="variant"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style>
.base-button {
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  font-weight: 600;
  transition: all 0.2s;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &[data-variant="primary"] {
    background-color: var(--color-primary);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  &[data-variant="success"] {
    background-color: var(--color-success);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-success-dark);
    }
  }
}
</style>
