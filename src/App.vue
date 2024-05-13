<script setup>
import { RouterView } from 'vue-router'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="fixed flex w-screen justify-end md:items-center py-6 px-7">
    <div class="flex-1">
      <router-link to="/" @click="scrollToTop">
        <img class="h-12 w-12 md:w-20 md:h-20" src="./assets/logo.svg" alt="logo">
        </ router-link>

    </div>
    <div class="flex-1">
      <nav ref="navLink" class="text-right md:flex md:text-left justify-end">
        <p id="work-link" class="link py-2 md:px-10 active cursor-pointer">
          work
        </p>
        <p id="about-link" class="link py-2 md:px-10 cursor-pointer">
          about
        </p>
        <p id="contact-link" class="link py-2 md:px-10 cursor-pointer">
          contact
        </p>
      </nav>
    </div>
  </header>

  <main class="min-h-screen w-full">
    <RouterView />
  </main>

  <footer class="w-full flex justify-center items-center pb-5">
    <p class="text-xs">Copyright © 2024 Angga Asriyanto</p>
  </footer>
</template>

<style scoped>
.link {
  color: #a4a4a4;
}

.active {
  @apply text-white
}

footer {
  p {
    color: #c4c4c4;
  }
}
</style>
@/composables/toggleActiveLink