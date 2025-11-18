<script setup lang="ts">
interface Props {
  description: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="info-block">
    <PhosphorIcon name="info" />
    <span>{{ props.description }}</span>
  </div>
</template>

<style lang="scss" scoped>
.info-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  svg {
    font-size: 2rem;
  }

  span {
    font-size: 1.4rem;
  }
}
</style>
