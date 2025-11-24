<template>
  <div
    class="container"
  >
    <div
      v-for="n in 100"
      :key="n"
      class="skeleton"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
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

.skeleton {
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #e9e9e9 25%,
    #f6f6f6 50%,
    #e9e9e9 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.2s linear infinite;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
