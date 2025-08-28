<script setup>
import { partner_companies } from '~/lib/constants'

const [container, slider] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  slides: {
    perView: 6,
    spacing: 15,
  },
  breakpoints: {
    '(max-width: 1024)': {
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    '(max-width: 768)': {
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
  },
})
</script>

<template>
    <section class="max-w-[1596px] mx-auto w-full pb-[40px] z-[9999]">
        <h3 class="font-medium text-[18px] text-white text-center border max-w-fit py-[20px] px-[35px] rounded-[100px] bg-[#1A1A1A] border-[#262626] mx-auto mb-[30px] z-[9999]" data-aos="fade-up" data-aos-duration="1000">
            Trusted by 250+ Companies
        </h3>
        <div ref="container" class="keen-slider" data-aos="fade-up" data-aos-duration="1300">
            <div v-for="company in partner_companies" :key="company.alt" class="keen-slider__slide">
                <NuxtImg :src="company.logo" :alt="company.alt" class="brand-logo"/>
            </div>
        </div>   
    </section>
</template>

<style scoped>
.brand-logo {
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: contain;
}

.keen-slider__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}
</style>