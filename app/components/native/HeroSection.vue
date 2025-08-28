<script setup>
import CustomButton from './CustomButton.vue';
</script>

<template>
    <Section class="max-w-[1596px] mx-auto w-full flex flex-col items-center py-[100px] lg:pt-[112px] lg:pb-[243px] bg-[url('/bg-banner.png')] bg-cover bg-center bg-no-repeat -mb-[31px] relative  "  >
    <NuxtImg src="/ad.png" class="w-full absolute bottom-0 -z-10"/>
    <h1 class="font-semibold text-[35px] lg:text-[68px] text-white max-w-[865px] text-center leading-[120%] mb-[15px] lg:mb-[40px]" >
      A Digital Product Studio that will Work
    </h1>

    <!-- Middle -->
    <div class="min-h-[98px] max-w-[865px] w-full bg-[#1B1B1B] rounded-[10px] mb-[15px] lg:mb-[50px] flex justify-center items-center p-2">
      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center items-center text-center">
        <span class="text-[20px] lg:text-[22px] text-[#98989A] leading-[150%]">For</span>

        <Button class="!px-[12px] !py-[14px] text-[20px] lg:!text-[22px] bg-[#262626] rounded-md text-white">Startups</Button>

        <Button class="!px-[12px] !py-[14px] text-[20px] lg:!text-[22px] bg-[#262626] rounded-md text-white">Enterprise leaders</Button>

        <Button class="!px-[12px] !py-[14px] text-[20px] lg:!text-[22px] bg-[#262626] rounded-md text-white">Media & Publishers</Button>

        <span class="text-[20px] lg:text-[22px] text-[#98989A] leading-[150%]">and</span>

        <Button class="!px-[12px] !py-[14px] text-[20px] lg:!text-[22px] bg-[#262626] rounded-md text-white">Social Good</Button>
      </div>
    </div>


     <!-- Buttons -->
     <div class="flex justify-between items-center gap-[15px] max-w-fit w-full" >
          <CustomButton  type="white" text="Our Works" />
          <CustomButton type="green" text="Contact Us" href="/contact"/>
     </div>
  </Section>
</template>