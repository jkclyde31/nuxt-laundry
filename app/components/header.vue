<script setup lang="ts">
defineProps<{
  title?: string
}>()

import Button from './ui/button/Button.vue';


</script>



<template>
  <header class="max-w-[1596px] mx-auto flex items-center justify-between gap-[15px] py-[29px] " data-aos="fade-down" data-aos-duration="1000">
    <!-- Logo / Title -->
    <NuxtImg src="/logo.png" alt="Logo" class="max-w-[177px] w-full"/>
    <!-- Navigation -->
     <Navbar />
     <!-- Button -->
    <Button class="text-[18px] bg-[#9EFF00] text-[#262626] rounded-[10px] p-[24px]  cursor-pointer hover:bg-[#9EFF00] font-family-barlow ">Contact Us</Button>
  </header>
</template>


