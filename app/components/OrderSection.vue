<script setup lang="ts">
import { RAFFLE_NUMBER_PRICE_IN_CENTS } from '~/config/constants'

const priceFormatted = (RAFFLE_NUMBER_PRICE_IN_CENTS / 100).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
</script>

<template>
  <section
    id="order-section"
    class="order-section"
  >
    <header class="order-section__header">
      <div class="container">
        <h2 class="order-section__title">
          Mapa completo dos números da rifa
        </h2>

        <p class="order-section__description">
          Visualize a lista completa com status: disponível, pendente e confirmado. Selecione os disponíveis para participar.
        </p>
      </div>
    </header>

    <div class="order-section__content">
      <slot />
    </div>

    <div class="order-section__info">
      <info-block>
        O valor de cada número custa <b>{{ priceFormatted }}</b>
      </info-block>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.order-section {
  padding: 4.8rem 0;

  @media(width >= 1024px) {
    padding: 6.4rem 0;
  }

  &__header {
    text-align: center;
    margin-bottom: 3.2rem;

    @media (width >= 1024px) {
      margin-bottom: 3.6rem;
    }
  }

  &__title {
    font-size: var(--text-2xl);
    line-height: 1.2;
    margin-bottom: 1.2rem;

    @media (width >= 1024px) {
      font-size: var(--text-3xl);
      margin-bottom: 1.6rem;
    }
  }

  &__description {
    font-size: var(--text-sm);
    max-width: 29rem;
    margin: 0 auto;

    @media (width >= 768px) {
      max-width: 50rem;
    }

    @media (width >= 1024px) {
      font-size: var(--text-base);
    }
  }

  &__content {
    width: 100%;
  }

  &__info {
    margin-top: 2.4rem;
    padding: 0 1.6rem;

    & > div {
      justify-content: flex-start;

       @media (width >= 500px) {
        justify-content: center;
       }
    }
  }
}
</style>
