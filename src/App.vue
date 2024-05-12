<script setup>
import { computed, ref } from 'vue';
import { RouterView } from 'vue-router'

const navLink = ref()

const toggleActive = (e) => {
  const childrens = computed(() => navLink.value.children)

  for (let i = 0; i < childrens.value.length; i++) {
    childrens.value[i].classList.remove('active')
  }

  e.target.classList.toggle('active')
}
</script>

<template>
  <header class="fixed flex w-screen justify-end md:items-center py-6 px-7">
    <div class="flex-1">
      <img class="h-12 w-12 md:w-20 md:h-20" src="./assets/logo.svg" alt="logo">
    </div>
    <div class="flex-1">
      <nav ref="navLink" class="text-right md:flex md:text-left justify-end">
        <p @click="toggleActive($event)" id="work" class="link py-2 md:px-10 active cursor-pointer">
          work
        </p>
        <p @click="toggleActive($event)" id="about" class="link py-2 md:px-10 cursor-pointer">
          about
        </p>
        <p @click="toggleActive($event)" id="contact" class="link py-2 md:px-10 cursor-pointer">
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
