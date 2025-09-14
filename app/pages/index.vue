<template>
  <div class="lg:h-screen border overflow-hidden px-[3%]">
    <Header title="Nuxt App" />

    <div class="flex flex-col lg:flex-row max-w-[1200px] w-full justify-between items-center mx-auto text-left px-4 lg:px-0 h-full gap-[15px] mt-[50px] lg:mt-0">
      
      <div class="max-w-full lg:max-w-[600px] w-full flex flex-col justify-center h-full">
        <h2 class="animate-fade-up font-[Kristi] text-[#5E5E5E] text-[30px] sm:text-[40px] md:text-[45px] lg:text-[60px] leading-[1.2] lg:leading-[100px] font-normal text-center lg:text-left">
          Fast Fresh Flawless
        </h2>
        
        <h1 class="animate-fade-up-delay-1 mt-2 lg:-mt-[30px] text-[#3c3c3c] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-bold leading-[1] text-center lg:text-left">
          LAUNDRY
          <span class="text-[#4a4a4a] lg:block inline lg:pl-[20px]">SERVICES</span>
        </h1>

        <div class="animate-fade-up-delay-2 flex flex-col sm:flex-row justify-around lg:justify-between items-center lg:pl-[20px] pt-[25px] sm:pt-[50px] lg:pt-[192px] gap-[20px] order-1 sm:order-1 lg:order-2">
          <p class="font-extralight text-[14px] max-w-[100%] sm:max-w-[222px] text-center sm:text-start">Premium wash, dry and fold services with free pick up & delivery.</p>
          <p class="font-extralight text-[14px] max-w-[222px] text-center sm:text-start">Free Same-Day Pickup <br> Eco-Friendly Detergents</p>
        </div>

        <div class="animate-fade-up-delay-3 flex flex-col sm:flex-row justify-center lg:justify-start items-center mt-[20px] gap-[20px] lg:pl-[20px] order-2 sm:order-2 lg:order-1">
          <Button class="bg-transparent text-[16px] font-normal border-[2px] border-black rounded-[25px] h-[46px] w-[100%] sm:w-[160px] hover:text-white hover:bg-black text-black cursor-pointer transition-all duration-300">VIEW PROJECTS</Button>
          <Button class="bg-[#5BC0FF] text-[16px] font-normal h-[46px] w-[100%] sm:w-[160px] rounded-[25px] text-white cursor-pointer hover:bg-[#4AA8E6] transition-all duration-300">BOOK NOW</Button>
        </div>
      </div>

      <div class="animate-fade-left flex-1 h-full">
        <NuxtImg src="/bn.png" alt="Banner" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/button/Button.vue'
</script>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out;
}

.animate-fade-up-delay-1 {
  animation: fadeUp 0.8s ease-out 0.2s both;
}

.animate-fade-up-delay-2 {
  animation: fadeUp 0.8s ease-out 0.4s both;
}

.animate-fade-up-delay-3 {
  animation: fadeUp 0.8s ease-out 0.6s both;
}

.animate-fade-left {
  animation: fadeLeft 0.8s ease-out 0.8s both;
}
</style>