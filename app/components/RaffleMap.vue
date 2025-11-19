<template>
  <section
    id="raffle-map"
    class="raffle-map"
  >
    <header class="raffle-map__header">
      <div class="container">
        <h2 class="raffle-map__title">
          Mapa completo dos números da rifa
        </h2>

        <p class="raffle-map__description">
          Visualize a lista completa com status: disponível, pendente e confirmado. Selecione os disponíveis para participar.
        </p>
      </div>
    </header>

    <div class="raffle-map__content">
      <div class="raffle-map__grid">
        <number-selector
          v-for="value in 100"
          :key="value"
          status="available"
        >
          {{ value }}
        </number-selector>
      </div>

      <div class="raffle-map__swipe-hint">
        <phosphor-icon
          name="arrow-right"
          weight="bold"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.raffle-map {
  padding: 4.8rem 0;

  &__header {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  &__title {
    font-size: var(--text-2xl);
    line-height: 1.2;
    margin-bottom: 1.2rem;
  }

  &__description {
    font-size: var(--text-sm);
    max-width: 29rem;
    margin: 0 auto;
  }

  &__content {
    width: 100%;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(10, 4rem);
    gap: 0.8rem;

    padding: 0 1.6rem 1.6rem;
    overflow-x: auto;
    margin: 0 auto;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (width >= 500px) {
      justify-content: center;
    }

    @media (width >= 768px) {
      gap: 1.2rem;
      padding: 0;
    }
  }

  &__swipe-hint {
    padding: 0 1.6rem;
    text-align: right;

    svg {
      font-size: 1.6rem;
      animation: swipe 0.5s ease-in 0s infinite alternate;
    }

    @media (width >= 500px) {
      display: none;
    }
  }
}

@keyframes swipe {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(8px);
  }
}
</style>
