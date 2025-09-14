<script setup lang="ts">
import { ref } from 'vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const menuItems = [
  { name: 'Home', href: '/#' },
  { name: 'Services', href: '/#' },
  { name: 'Laundry', href: '/#' },
]
</script>

<template>
  <!-- Desktop Navigation -->
  <NavigationMenu class="hidden md:flex w-full bg-white rounded-[20px] items-center gap-4 pl-4">
    <!-- list takes remaining space -->
    <NavigationMenuList class="flex items-center flex-1">
      <NavigationMenuItem
        v-for="item in menuItems"
        :key="item.name"
      >
        <!-- wrapper gets flex-1 -->
        <div class="flex-1 text-center">
          <NavigationMenuLink
            :href="item.href"
            :class="[navigationMenuTriggerStyle()]"
            class="block w-full px-3 py-2 text-[12px] uppercase text-black hover:text-black"
          >
            {{ item.name }}
          </NavigationMenuLink>
        </div>
      </NavigationMenuItem>
    </NavigationMenuList>

    <!-- Sign in button stays at the right -->
    <Button class="rounded-[20px] bg-black text-white px-4 py-2">
      SIGN IN
    </Button>
  </NavigationMenu>

  <!-- Mobile Navigation -->
  <div class="block md:hidden">
    <!-- Mobile Menu Button -->
    <Button
      variant="ghost"
      size="icon"
      class="mobile-menu-btn relative z-50"
      @click="toggleMobileMenu"
      aria-label="Toggle mobile menu"
    >
      <!-- Simple hamburger icon -->
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <div 
          class="w-5 h-0.5 bg-current transition-all duration-300"
          :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
        ></div>
        <div 
          class="w-5 h-0.5 bg-current my-1 transition-all duration-300"
          :class="isMobileMenuOpen ? 'opacity-0' : ''"
        ></div>
        <div 
          class="w-5 h-0.5 bg-current transition-all duration-300"
          :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
        ></div>
      </div>
    </Button>

    <!-- Mobile Menu Overlay and Sidebar -->
    <div 
      v-show="isMobileMenuOpen" 
      class="fixed inset-0 z-40 bg-black/70 transition-opacity duration-300"
      @click="closeMobileMenu"
    >
      <div 
        class="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#0C0C0C] backdrop-blur-sm border-r border-white/10 transform transition-transform duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        @click.stop
      >
        <!-- Close Button -->
        <div class="flex justify-end p-6">
          <Button
            variant="ghost"
            size="icon"
            @click="closeMobileMenu"
            class="text-white hover:text-[#5BC0FF] hover:bg-white/10"
            aria-label="Close mobile menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="px-6">
          <nav class="flex flex-col space-y-4">
            <a
              v-for="item in menuItems" 
              :key="item.name"
              :href="item.href"
              @click="closeMobileMenu"
              class="text-white hover:text-[#5BC0FF] py-4 px-4 text-[18px] font-normal transition-colors duration-200 border-b border-white/10 last:border-b-0"
            >
              {{ item.name }}
            </a>
            
            <!-- Mobile Sign In Button -->
            <div class="pt-6">
              <Button 
                class="w-full rounded-[20px] bg-black text-white px-4 py-3 font-medium hover:bg-[#424242] transition-colors"
                @click="closeMobileMenu"
              >
                SIGN IN
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>