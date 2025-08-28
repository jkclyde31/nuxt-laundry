<template>
  <section 
    class="max-w-[1596px] mx-auto w-full relative px-[3%] flex flex-col items-center py-[60px] md:py-[100px] lg:py-[120px]"
    data-aos="fade-up" 
    :data-aos-duration="aosDuration"
  >
    <div 
      v-if="backgroundImage"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat saturate-0 brightness-30 -z-10"
      :style="`background-image: url('${backgroundImage}')`"
    ></div>
    <NuxtImg v-if="hasLogo" src="/logo-big.png" alt="Logo Image" class=" mb-[50px] w-full max-w-[80px]" />
    <h3 class="font-semibold text-[28px] md:text-[35px] lg:text-[48px] text-white text-center pb-[14px]">
      {{ title }}
    </h3>
    <p class="text-[18px] leading-[160%] lg:leading-[24px] -tracking-[0.6%] text-[#EDEDED] text-center max-w-[970px] ">
      {{ description }}
    </p>

    <NuxtLink href="/contact">
      <Button v-if="hasButton" class="bg-[#9EFF00] rounded-[0px] w-[170px] h-[63px] text-[#1A1A1A] font-medium text-[18px] mt-[50px] cursor-pointer
                    transition-all duration-300 hover:bg-[#8BFF00] hover:scale-105 hover:shadow-lg">
        Start Project
      </Button>
    </NuxtLink>
  </section>
</template>

<script setup>
import Button from '../ui/button/Button.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: null
  },
  aosDuration: {
    type: [String, Number],
    default: '1000'
  },

  hasLogo: {
    type: Boolean,
    default: false
  },
  hasButton:{
    type: Boolean,
    default: false
  }
})
</script>