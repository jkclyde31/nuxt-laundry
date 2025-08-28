<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  type: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'green'].includes(value)
  },
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: null
  }
})

const buttonClasses = computed(() => {
  const baseClasses = 'text-[18px] rounded-[10px] py-[18px] px-[24px] cursor-pointer font-family-barlow'
  
  const typeClasses = {
    white: 'bg-[#242424] text-white hover:bg-[#242424]',
    green: 'bg-[#9EFF00] text-[#262626] hover:bg-[#9EFF00]'
  }
  
  // Add link-specific classes only when it's a link
  const linkClasses = props.href ? 'inline-block text-center no-underline' : ''
  
  return `${baseClasses} ${typeClasses[props.type]} ${linkClasses}`.trim()
})
</script>


<template>
  <component 
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClasses" 
    @click="$emit('click', $event)"
  >
    {{ text }}
  </component>
</template>



<style scoped>
.font-family-barlow {
  font-family: 'Barlow', sans-serif;
}
</style>