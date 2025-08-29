<script setup>
import Button from '../ui/button/Button.vue';
import { reviews } from '~/lib/constants'

const [container, slider] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
        perView: 1,
        spacing: 15,
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
])
</script>

<template>
    <!-- Desktop: CSS Grid -->
    <div class="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
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

    <!-- Mobile/Tablet: Keen Slider -->
    <div ref="container" class="keen-slider block lg:hidden">
        <div v-for="review in reviews" :key="review.id || review.profile_name" class="keen-slider__slide">
            <div class="pb-[0px] p-[25px] md:py-[60px] lg:py-[100px] lg:px-[80px] border border-[#333333] w-full text-center lg:text-left h-full">
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
</template>

<style scoped>
.keen-slider__slide {
    display: flex;
    align-items: stretch;
}
</style>