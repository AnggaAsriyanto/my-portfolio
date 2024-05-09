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
  <header class="flex w-screen justify-end items-center py-10 px-7">
    <div class="flex-1">
      <img src="./assets/logo.svg" alt="logo">
    </div>
    <div class="flex-1">
      <nav ref="navLink" class="flex justify-end">
        <p @click="toggleActive($event)" id="work" class="link px-10 active cursor-pointer">
          work
        </p>
        <p @click="toggleActive($event)" id="about" class="link px-10 cursor-pointer">
          about
        </p>
        <p @click="toggleActive($event)" id="contact" class="link px-10 cursor-pointer">
          contact
        </p>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.link {
  color: #a4a4a4;
}

.active {
  @apply text-white
}
</style>
