<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})

const { clear: clearSession } = useUserSession()

const logout = async () => {
  await clearSession()
  await navigateTo('/auth')
}
</script>

<template>
  <div>
    <p>admin page</p>
    <button
      type="button"
      @click="logout"
    >
      Sair do painel
    </button>
  </div>
</template>
