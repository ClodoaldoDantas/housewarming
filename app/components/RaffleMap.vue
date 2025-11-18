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
}
</style>
