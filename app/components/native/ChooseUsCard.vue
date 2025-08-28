<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="border border-[#333333]  w-full p-[30px] lg:p-[80px]">
    <div class="flex flex-col lg:flex-row gap-[25px] mb-[15px] lg:mb-[40px] justify-center lg:justify-start items-center">
      <NuxtImg :src="icon" alt="Expertise Icon" class="max-w-[88px] w-full"/>
      <h3 class="text-[26px] font-medium -tracking-[0.6%]">{{ title }}</h3>
    </div>
    <p class="leading-[150%] text-[20px] -tracking-[0.6%] text-[#E6E6E6] text-center lg:text-left">
      {{ description }}
    </p>
  </div>
</template>