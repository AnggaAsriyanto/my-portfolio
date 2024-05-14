<script setup>
import { useToggleActiveLink } from '@/composables/toggleActiveLink';
import { useFocus } from '@/stores/focus'
import { onMounted } from 'vue';

const store = useFocus()

useToggleActiveLink()

const focus = () => {
  store.$patch({ focus: true })
}

const outFocus = () => {
  store.$reset()
}
</script>

<template>
  <!--start section work -->
  <section class="work w-full">
    <div class="header h-[80vh] md:h-[90vh] flex items-end md:items-end px-6 md:px-36" id="work">
      <h1 class="font-header text-7xl md:text-8xl">Freelance <br /> Front End Developer</h1>
    </div>
    <div class="lists w-full h-auto md:px-36">
      <div class="box bg-white w-full mt-6 mb-1  lg:my-6 h-[300px] lg:h-screen">

      </div>
      <div class="box hover:bg-white w-full my-1 lg:my-10 h-[300px] lg:h-screen">

      </div>
      <div class="box hover:bg-white w-full my-1 lg:my-10 h-[300px] lg:h-screen">

      </div>
    </div>
  </section>
  <!-- end section work -->
  <!-- start section about -->
  <section class="about w-full py-20 lg:py-0 lg:h-screen flex items-center lg:border-t-[1px] border-b-[1px]" id="about">
    <div class="me mt-10 px-6 md:px-36 flex items-start flex-col lg:flex-row">
      <div class="lg:flex-1">
        <h2 class="font-header text-6xl lg:text-8xl">
          3+ years of working experiences
        </h2>
      </div>
      <div class="flex-1">
        <p class="py-2 lg:w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been
          the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
        <p class="py-2 lg:w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been
          the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
      </div>
    </div>
  </section>
  <!-- end section about -->
  <!-- start section contact -->
  <section class="contact w-full h-screen px-6 lg:px-0 flex flex-row items-center justify-center" id="contact">
    <div class="flex justify-center items-center">
      <form action="" class="w-full flex flex-col justify-center items-center">
        <h2 class="font-header text-5xl tracking-wide pb-5">Want to discuss?</h2>
        <input @focus="focus" @blur="outFocus" class="w-full px-5 py-3 rounded-[10px] my-2" type="text"
          placeholder="Name">
        <input @focus="focus" @blur="outFocus" class="w-full px-5 py-3 rounded-[10px] my-2" type="text"
          placeholder="Email">
        <textarea @focus="focus" @blur="outFocus" class="w-full px-5 py-3 rounded-[10px] my-2" placeholder="Message"
          name="message" id="message" cols="30" rows="5"></textarea>
        <button class="w-full px-5 py-3 rounded-[10px] my-2 bg-white text-black font-semibold"
          type="submit">Submit</button>
      </form>
    </div>
  </section>
  <!-- end section contact -->
</template>

<style scoped>
section {
  border-color: #5752529f;
}

.box {
  background-color: #2b2b2b;
  cursor: pointer;
  transition: .2s ease-out;
}

hr {
  color: #575252;
}

input,
textarea {
  background-color: #2b2b2b;

  &:focus {
    outline: 1px solid #575252;
  }
}
</style>