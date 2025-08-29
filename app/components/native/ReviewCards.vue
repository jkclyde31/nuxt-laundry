<script setup>
import Button from '../ui/button/Button.vue';
import { reviews } from '~/lib/constants';
import { ref } from 'vue';

const currentSlide = ref(0);

const [container, slider] = useKeenSlider({
  loop: false,
  mode: "free-snap",
  slides: {
    perView: 1,
    spacing: 15,
  },
  slideChanged: (s) => {
    currentSlide.value = s.track.details.rel;
  },
}, [
  // Only enable slider on mobile/tablet
  (slider) => {
    const updateSlider = () => {
      if (window.innerWidth >= 1024) {
        slider.destroy()
      }
    }
    window.addEventListener('resize', updateSlider)
    updateSlider()
    return () => {
      window.removeEventListener('resize', updateSlider)
    }
  }
]);

const prevSlide = () => {
  if (slider.value) {
    slider.value.prev();
  }
};

const nextSlide = () => {
  if (slider.value) {
    slider.value.next();
  }
};
</script>

<template>
  <!-- Desktop: CSS Grid -->
  <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
    <div v-for="review in reviews" :key="review.id || review.profile_name">
      <div class="p-[25px] md:py-[60px] lg:py-[100px] lg:px-[80px] border border-[#333333] w-full text-center lg:text-left h-full">
        <h3 class="font-medium text-[22px] lg:text-[28px] leading-[150%] text-[#D8FF99] mb-[15px] lg:mb-[28px]">
          {{ review.title }}
        </h3>
        <p class="text-[#E6E6E6] text-[18px] leading-[150%] mb-[15px] lg:mb-[40px]">
          {{ review.description }}
        </p>
        <div class="p-[20px] flex flex-col lg:flex-row gap-[10px] items-center bg-[#1B1B1B]">
          <div class="flex flex-col md:flex-row gap-[18px] justify-center lg:justify-start items-center w-full mb-[15px] lg:mb-0">
            <NuxtImg :src="review.icon" :alt="`${review.profile_name} Profile Pic`" class="max-w-[60px] w-full"/>
            <div>
              <p>{{ review.profile_name }}</p>
              <p class="text-[18px] text-[#E6E6E6]">{{ review.profile_position }}</p>
            </div>
          </div>
          <NuxtLink :to="review.href" class="w-full lg:w-auto" v-if="review.href">
            <Button class="!w-full lg:w-[149px] h-[63px] bg-[#262626] cursor-pointer">
              Open Website
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile/Tablet: Keen Slider with Navigation -->
  <div class="block md:hidden relative">
    <!-- Slider Container -->
    <div ref="container" class="keen-slider">
      <div v-for="review in reviews" :key="review.id || review.profile_name" class="keen-slider__slide">
        <div class="pb-[0px] px-[50px] pt-[25px] border border-[#333333] w-full text-center h-full">
          <h3 class="font-medium text-[22px] leading-[150%] text-[#D8FF99] mb-[15px]">
            {{ review.title }}
          </h3>
          <p class="text-[#E6E6E6] text-[18px] leading-[150%] mb-[15px]">
            {{ review.description }}
          </p>
          <div class="p-[20px] flex flex-col gap-[10px] items-center bg-[#1B1B1B]">
            <div class="flex flex-col gap-[18px] justify-center items-center w-full mb-[15px]">
              <NuxtImg :src="review.icon" :alt="`${review.profile_name} Profile Pic`" class="max-w-[60px] w-full"/>
              <div>
                <p>{{ review.profile_name }}</p>
                <p class="text-[18px] text-[#E6E6E6]">{{ review.profile_position }}</p>
              </div>
            </div>
            <NuxtLink :to="review.href" class="w-full" v-if="review.href">
              <Button class="!w-full h-[63px] bg-[#262626] cursor-pointer">
                Open Website
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button 
      @click="prevSlide"
      :disabled="currentSlide === 0"
      class="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#D8FF99] text-black flex items-center justify-center hover:bg-[#c5e687] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>

    <button 
      @click="nextSlide"
      :disabled="currentSlide === reviews.length - 1"
      class="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#D8FF99] text-black flex items-center justify-center hover:bg-[#c5e687] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>


  </div>
</template>

<style scoped>
.keen-slider__slide {
  display: flex;
  align-items: stretch;
}

/* Custom scrollbar for slider if needed */
.keen-slider {
  position: relative;
}
</style>