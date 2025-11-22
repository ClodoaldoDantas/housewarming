<template>
	<div class="info-block">
		<phosphor-icon name="info" />
		<div class="info-block__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.info-block {
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 2rem;
  }

  &__content {
    font-size: 1.4rem;
  }
}
</style>
