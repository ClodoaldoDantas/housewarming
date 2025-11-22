<script setup lang="ts">
interface Props {
  tickets: {
    id: string
    number: number
    status: string | null
  }[]
}

const { tickets } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'onSelect', value: number): void
}>()
</script>

<template>
  <div class="raffle-map-grid">
    <number-selector
      v-for="ticket in tickets"
      :key="ticket.id"
      :status="ticket.status"
      @click="() => emit('onSelect', ticket.number)"
    >
      {{ ticket.number }}
    </number-selector>
  </div>

  <div class="swipe-hint">
    <phosphor-icon
      name="arrow-right"
      weight="bold"
    />
  </div>

  <ul class="raffle-map-legend">
    <li class="raffle-map-legend__item">
      Disponível
    </li>
    <li class="raffle-map-legend__item">
      Indisponível
    </li>
    <li class="raffle-map-legend__item">
      Aguardando Pagamento
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.raffle-map-grid {
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
    padding: 0 1.6rem;
  }

  @media (width >= 768px) {
    gap: 1.2rem;
    padding: 0;
  }
}

.swipe-hint {
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

@keyframes swipe {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(8px);
  }
}

.raffle-map-legend {
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (width >= 500px) {
    flex-direction: row;
    justify-content: center;
    gap: 2.4rem;
    margin-top: 2.4rem;
  }

  @media (width >= 768px) {
    margin-top: 3.2rem;
  }

  &__item {
    font-size: var(--text-sm);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    line-height: 1;

    &::before {
      content: "";
      height: 1.8rem;
      width: 1.8rem;
      border: 1px solid transparent;
      border-radius: 0.4rem;
    }

    &:nth-child(1)::before {
      border-color: var(--color-border);
    }

    &:nth-child(2)::before {
      background-color: var(--color-unavailable);
    }

    &:nth-child(3)::before {
      background-color: var(--color-pending);
    }
  }
}
</style>
