<script setup>

import Button from '../ui/button/Button.vue';

    const props = defineProps({
        title:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        href: {
            type:String,
        },
        icon: {
            type: String,
            required: true
        },
        profile_name: {
            type:String,
            required:true
        },
        profile_position: {
            type: String,
            required: true
        }
    })
</script>

<template>
     <div class="p-[25px] lg:py-[100px] lg:px-[80px] border border-[#333333]  w-full text-center lg:text-left">

            <h3 class="font-medium text-[22px] lg:text-[28px] leading-[150%] text-[#D8FF99] mb-[15px] lg:mb-[28px] ">
                {{title}}
            </h3>
            <p class="text-[#E6E6E6] text-[18px] leading-[150%] mb-[15px] lg:mb-[40px]">
                {{ description }}
            </p>
            <div class="p-[20px] flex flex-col lg:flex-row gap-[10px] items-center bg-[#1B1B1B]">
                <div class="flex flex-col md:flex-row gap-[18px] justify-center lg:justify-start items-center w-full mb-[15px] lg:mb-0">
                    <NuxtImg :src="icon"  alt="Johns Profile Pic" class="max-w-[60px] w-full"/>
                    <div>
                        <p>{{ profile_name }}</p>
                        <p class="text-[18px] text-[#E6E6E6]">{{ profile_position }}</p>
                    </div>
                </div>
                <NuxtLink :to="href" class="w-full lg:w-auto">
                    <Button class=" !w-full lg:w-[149px] h-[63px] bg-[#262626] cursor-pointer">
                        Open Website
                    </Button>
                </NuxtLink>
           
            </div>

        </div>    
</template>