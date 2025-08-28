<script setup>
import Accordion from '~/components/ui/accordion/Accordion.vue';
import AccordionContent from '~/components/ui/accordion/AccordionContent.vue';
import AccordionItem from '~/components/ui/accordion/AccordionItem.vue';
import AccordionTrigger from '~/components/ui/accordion/AccordionTrigger.vue';

import { faqs } from '~/lib/constants';
</script>

<template>
    <Section class="max-w-[1596px] mx-auto w-full" data-aos="fade-up" data-aos-duration="1000">
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <Accordion type="single" collapsible>
                <div 
                    v-for="(faq, index) in faqs.slice(0, Math.ceil(faqs.length / 2))" 
                    :key="index" 
                    class="flex flex-col lg:flex-row items-center gap-[20px]  border border-[#333333] py-[15px] lg:py-[30px] px-[25px] lg:px-[50px] "
                >
                    <span class="font-semibold text-[28px] p-[20px] bg-gradient-to-r from-[#242424] to-[#242424] rounded-[12px] hidden lg:block">
                        {{ faq.number }}
                    </span>
                    <AccordionItem :value="`item-${index + 1}`" class="w-full max-w-full" >
                        <AccordionTrigger class="text-[#C5FF66] font-medium text-[18px] md:text-[22px] flex items-center">
                            {{ faq.question }}
                        </AccordionTrigger>        
                        <AccordionContent class="text-[#E6E6E6] text-[18px] leading-[150%]">
                            {{ faq.answer }}
                        </AccordionContent>
                    </AccordionItem>
                </div>
            </Accordion>

            <Accordion type="single" collapsible>
                <div 
                    v-for="(faq, index) in faqs.slice(Math.ceil(faqs.length / 2))" 
                    :key="index + Math.ceil(faqs.length / 2)" 
                    class="flex  flex-col lg:flex-row items-center gap-[20px]   border border-[#333333] py-[15px] lg:py-[30px]  px-[15px] lg:px-[50px] "
                >
                    <span class="font-semibold text-[28px] p-[20px] bg-gradient-to-r from-[#242424] to-[#242424] rounded-[12px] hidden lg:block">
                        {{ faq.number }}
                    </span>
                       <AccordionItem :value="`item-${index + 1}`" class="w-full max-w-full" >
                        <AccordionTrigger class="text-[#C5FF66] font-medium text-[18px] md:text-[22px] flex items-center">
                            {{ faq.question }}
                        </AccordionTrigger>        
                        <AccordionContent class="text-[#E6E6E6] text-[18px] leading-[150%]">
                            {{ faq.answer }}
                        </AccordionContent>
                    </AccordionItem>
                </div>
            </Accordion>
        </div>
    </Section>  
</template>