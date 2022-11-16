<template>
    <div class="bg-[#F7F7F7] h-screen relative">
        <div class="flex w-full bg-white h-20 justify-between items-center px-10 ">
            <div>
                <h1 class="text-xl font-bold">Welcome User 🥳</h1>
                <p>How is your day ?</p>
            </div>
            <div class="flex gap-5 ">
                <vue-feather type="bell" size="30" class="cursor-pointer animate-pulse"></vue-feather>
                <vue-feather type="more-vertical" size="30" class="cursor-pointer" @click="drop"></vue-feather>
                <div :class="dropdown" class=" absolute top-[12.5%] bg-gray-200 w-[11%]  flex flex-col rounded-md transition-all duration-300">
                    <div class="cursor-pointer hover:bg-black hover:text-white text-center p-2 transition-all duration-300" @click="drop">TR</div>
                    <div class="cursor-pointer hover:bg-black hover:text-white text-center p-2 transition-all duration-300" @click="drop">EN</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="p-16">
                <TableCom />
            </div>
            <div class="p-16">
                <div id="status" class="bg-white p-10">
                    1
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import TableCom from '@/components/TableCom.vue'
let dropdown = ref('opacity-0')

function drop() {
    if(dropdown.value === 'opacity-0') {
        dropdown.value = 'opacity-100'
    } else {
        dropdown.value = 'opacity-0'
    }
}



</script>
