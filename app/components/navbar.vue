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
  <NavigationMenu
  class="hidden md:flex w-full max-w-[350px] bg-white rounded-[20px] justify-end items-center gap-[15px]"
>
  <NavigationMenuList class="flex justify-between items-center w-full">
    <NavigationMenuItem v-for="item in menuItems" :key="item.name">
      <NavigationMenuLink
        :href="item.href"
        :class="[navigationMenuTriggerStyle()]"
        class="px-2 py-2 text-[12px] uppercase text-black hover:text-black"
      >
        {{ item.name }}
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>

  <Button class="rounded-[20px] bg-black text-white cursor-pointer">
    SIGN IN
  </Button>
</NavigationMenu>


  <!-- Mobile Navigation -->
  <div class="md:hidden">
    <!-- Mobile Menu Button -->
    <Button
      variant="ghost"
      size="icon"
      class="mobile-menu-btn"
      @click="toggleMobileMenu"
    >
      <div class="hamburger" :class="{ 'active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Button>

    <!-- Mobile Menu Overlay and Sidebar -->
    <Teleport to="body">
      <div 
        v-if="isMobileMenuOpen" 
        class="mobile-menu-backdrop fixed inset-0 z-[9999] bg-black/70"
        @click="closeMobileMenu"
      >
        <!-- Mobile Sidebar (80% width, slides from left) -->
        <div 
          class="mobile-sidebar fixed top-0 left-0 h-full w-[80%] bg-[#0C0C0C] backdrop-blur-sm border-r border-white/10 transform transition-transform duration-300 ease-in-out"
          :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
          @click.stop
        >
          <!-- Close Button -->
          <div class="flex justify-end p-6">
            <Button
              variant="ghost"
              size="icon"
              @click="closeMobileMenu"
              class="text-white hover:text-[#9EFF00] hover:bg-white/10"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </Button>
          </div>

          <!-- Mobile Menu Items -->
          <NavigationMenu class="w-full px-6">
            <NavigationMenuList class="flex flex-col space-y-4 items-stretch w-full">
              <NavigationMenuItem v-for="item in menuItems" :key="item.name" class="w-full">
                <NavigationMenuLink
                  :href="item.href"
                  @click="closeMobileMenu"
                  :class="[navigationMenuTriggerStyle()]"
                  class="mobile-menu-link w-full text-left justify-start py-4 px-4 text-lg font-medium"
                >
                  {{ item.name }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </Teleport>
  </div>
</template>

