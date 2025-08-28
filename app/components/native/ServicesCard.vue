
<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  hasExtraPadding: {
    type: Boolean,
    default: false
  },
  slug: {
    type: String,
    required: true
  }
})
</script>


<template>
  <div class=" w-full p-[30px] lg:p-[49px] border border-[#333333] flex items-center lg:items-start flex-col service-card">
    <NuxtImg 
      :src="icon" 
      :alt="`${title} Icon`" 
      class="mb-[25px] lg:mb-[40px] max-w-[88px] w-full"
    />
    <h3 class="mb-[20px] font-semibold text-[30px] -tracking-[0.6%] text-white text-center mx-auto lg:mx-0">
      {{ title }}
    </h3>
    <p 
      class="leading-[160%] lg:leading-[24px] text-[18px] text-center lg:text-left -tracking-[0.6%] text-[#E6E6E6] pb-[25px] lg:pb-[104px]"  
    
    >
      {{ description }}
    </p>
    <NuxtLink 
      :to="`/services/${slug}`"
      class="font-medium text-[18px] bg-[#262626] text-white h-[60px] w-full rounded-[0px] mt-auto hover:bg-[#363636] transition-colors duration-300 flex items-center justify-center text-center no-underline"
    >
      Learn More
    </NuxtLink>
  </div>
</template>

<style scoped>
.service-card {
  transition: background-color 0.3s ease;
}
</style>