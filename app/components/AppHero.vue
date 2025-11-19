<script setup lang="ts">
import { DRAW_DATE } from '~/config/constants'

const scrollToId = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="container hero__container">
      <picture class="hero__image">
        <source
          srcset="/assets/images/hero-desktop.png"
          media="(min-width: 1200px)"
        >
        <img
          src="/assets/images/hero-mobile.png"
          alt=""
        >
      </picture>

      <div class="hero__content">
        <h1 class="hero__title">
          Ganhe uma Airfryer novinha no nosso Chá de Casa Nova
        </h1>

        <div class="hero__steps">
          <div class="hero__step">
            <div class="hero__icon">
              <phosphor-icon
                name="number-circle-three"
                weight="bold"
              />
            </div>
            <span>Escolha seu número da sorte</span>
          </div>

          <div class="hero__step">
            <div class="hero__icon">
              <phosphor-icon
                name="money"
                weight="bold"
              />
            </div>
            <span>Faça um Pix e envie o comprovante</span>
          </div>

          <div class="hero__step">
            <div class="hero__icon">
              <phosphor-icon
                name="gift"
                weight="bold"
              />
            </div>
            <span>Pronto! você já está participando</span>
          </div>
        </div>

        <div class="hero__actions">
          <base-button @click="scrollToId('raffle-map')">
            Quero Participar
          </base-button>

          <info-block :description="`o sorteio será realizado em ${DRAW_DATE}`" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-color: var(--color-white);
  padding: 4.8rem 0;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  &__content {
    text-align: center;
  }

  &__title {
    font-size: var(--text-2xl);
    margin-bottom: 3.2rem;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.8rem;
    max-width: 15rem;

    & > span {
      font-weight: 500;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #D5EFFF;

    svg {
      font-size: var(--text-2xl);
      color: var(--color-primary-dark);
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
}
</style>
