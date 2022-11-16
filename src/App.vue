<template>
  <div class="flex overflow-hidden">
    <div class=" w-[20%]">
      <AdmPanel />
    </div>
    <div class="w-[80%]">
      <MainPage />
    </div>
  </div>
</template>

<script setup>
import AdmPanel from './components/AdmPanel.vue';
import MainPage from './components/MainPage.vue';
</script>