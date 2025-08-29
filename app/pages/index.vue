<script setup>
import HeroSection from '~/components/native/HeroSection.vue';
import ServicesCard from '~/components/native/ServicesCard.vue';
import BrandSlider from '~/components/native/BrandSlider.vue';
import SectionHeader from '~/components/native/SectionHeader.vue';
import ChooseUsCard from '~/components/native/ChooseUsCard.vue';
import ReviewCards from '~/components/native/ReviewCards.vue';
import FaqsAccordion from '~/components/native/FaqsAccordion.vue';

import { services,  why_choose_us_items, reviews} from '~/lib/constants';



</script>

<template>
    <Header title="Nuxt App" />
    
    <!-- Banner -->
    <HeroSection />
    
    <!-- Partners -->
    <BrandSlider/>

    <!-- Services Header -->
     <SectionHeader 
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        background-image="/bg-services.png"
    /> 
    
    <!-- Cards -->
    <section class="max-w-[1596px] mx-auto w-full grid  lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
        <ServicesCard
            v-for="service in services"
            :key="service.id"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :has-extra-padding="service.hasExtraPadding"
            :slug="service.slug"
        />
    </section>
    
    <!-- Why Choose Us -->
    <SectionHeader 
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        background-image="/bg-why.png"
        :aos-duration="1200"
    />
    
    <Section class="max-w-[1596px] mx-auto w-full grid md:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
        <ChooseUsCard
            v-for="items in why_choose_us_items"
            :title="items.title"
            :description="items.description"
            :icon="items.icon"
        />
    </Section>

    <!-- Reviews -->
    <SectionHeader 
        title="What Our Clients Say"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        background-image="/bg-testimonials.png"
        :aos-duration="1200"
    />

    <Section class="max-w-[1596px] mx-auto w-full">
        <ReviewCards 
         
        />
    </Section>  

    <!-- FAQS -->
     <SectionHeader 
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        background-image="/bg-faqs.png"
        :aos-duration="1200"
    /> 
    <FaqsAccordion />

    <!-- Contact Section -->
    <SectionHeader
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        background-image="/bg-ctc.png"
        hasLogo = true
        hasButton = true
    />
    
    <div class="h-[500px]"></div>
</template>