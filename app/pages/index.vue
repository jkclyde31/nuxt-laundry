<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50">
      <Header title="Nuxt App" />
    </div>

    <div id="fullpage">
      <!-- Hero Section -->
      <div class="section" data-bg="#ffffff" data-text-color="#3c3c3c">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-2 max-w-[1200px] w-full justify-between items-center mx-auto text-left px-4 lg:px-0 h-[100%]">
          <div class="max-w-full lg:max-w-[600px] w-full ">
            <h2 class="font-[Kristi] text-[#5E5E5E] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] lg:leading-[100px] font-normal text-center lg:text-left"> 
              Fast Fresh Flawless
            </h2>
            <h1 class="mt-2 lg:-mt-[30px] text-[#3c3c3c] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-bold leading-[1] text-center lg:text-left">
              LAUNDRY 
              <span class="text-[#4a4a4a] block lg:inline lg:pl-[20px]">SERVICES</span>
            </h1>
          </div>

            <NuxtImg
              src="/bn.png"
              alt="Banner"
              class="w-full h-auto lg:w-[100%] lg:h-[100%] max-w-full"
            />
        </div>
      </div>

      <!-- Services Section -->
      <div class="section" data-bg="#f8f9fa" data-text-color="#3c3c3c">
        <div class="max-w-[1200px] w-full mx-auto px-4 text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 lg:mb-8 text-[#3c3c3c]">
            SERVICES
          </h1>
         
        </div>
      </div>

      <!-- Laundry Section -->
      <div class="section" data-bg="#e8f4fd" data-text-color="#3c3c3c">
        <div class="max-w-[1200px] w-full mx-auto px-4 text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 lg:mb-8 text-[#3c3c3c]">
            LAUNDRY
          </h1>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let fullpageInstance = null

onMounted(() => {
  const fullpageCss = document.createElement('link')
  fullpageCss.rel = 'stylesheet'
  fullpageCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css'
  document.head.appendChild(fullpageCss)

  const gsapScript = document.createElement('script')
  gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'
  gsapScript.onload = () => {
    const scrollTriggerScript = document.createElement('script')
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js'
    document.head.appendChild(scrollTriggerScript)
  }
  document.head.appendChild(gsapScript)

  const fullpageScript = document.createElement('script')
  fullpageScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js'
  fullpageScript.onload = () => {
    if (window.fullpage) {
      // Check if mobile device
      const isMobile = window.innerWidth <= 768
      
      fullpageInstance = new window.fullpage('#fullpage', {
        scrollingSpeed: 1000,
        autoScrolling: !isMobile, // Disable auto-scrolling on mobile
        scrollHorizontally: true,
        navigation: false,
        fitToSection: !isMobile,
        scrollBar: isMobile, // Enable scroll bar on mobile
        responsiveWidth: 768, // Switch to normal scrolling below this width
        onLeave: function (origin, destination, direction) {
          const leavingText = origin.item.querySelector("h1")
          const enteringText = destination.item.querySelector("h1")

          if (window.gsap && !isMobile) {
            window.gsap.to(leavingText, {
              opacity: 0,
              y: -100,
              duration: 1.5,
              ease: "power2.out",
            })

            window.gsap.fromTo(
              enteringText,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                color: destination.item.getAttribute("data-text-color"),
                duration: 1.5,
                ease: "power2.out",
                delay: 0.5,
              }
            )

            const newBgColor = destination.item.getAttribute("data-bg")
            destination.item.style.backgroundColor = newBgColor
          }
        },
      })
    }
  }
  document.head.appendChild(fullpageScript)
})

onUnmounted(() => {
  if (fullpageInstance && window.fullpage) {
    fullpageInstance.destroy('all')
  }
})
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding: 1rem 0;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
  .section {
    min-height: 100vh;
    padding: 2rem 0;
  }
  
  /* Ensure proper spacing on mobile */
  .section:first-child {
    padding-top: 4rem; /* Account for fixed header */
  }
}

:global(.fp-tableCell) {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

:global(.fp-slidesNav) {
  display: none;
}

:global(.fp-controlArrow) {
  display: none;
}

:global(html.fp-enabled) {
  overflow: hidden;
}

/* Mobile responsive overrides */
@media (max-width: 768px) {
  :global(html.fp-enabled) {
    overflow: auto !important;
  }
  
  :global(.fp-section) {
    height: auto !important;
    min-height: 100vh;
  }
  
  :global(.fp-tableCell) {
    display: block !important;
    height: auto !important;
    vertical-align: top;
    padding: 2rem 0;
  }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 1024px) {
  .section {
    padding: 1.5rem 0;
  }
}
</style>