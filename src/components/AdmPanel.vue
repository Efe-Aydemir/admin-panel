<template>
    <div class="p-5 bg-[#1B1C1E] text-white justify-between overflow-auto flex flex-col h-screen">
        <div>
            <p class="opacity-70 text-xs font-semibold hover:opacity-100 transition-all duration-300 cursor-default">MENU</p>
        <hr class="opacity-40 my-2"/>
        <div class="flex flex-col gap-10">
            <router-link to="/about">
                <div  class="flex gap-5 items-center opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 hover:border-r-[2px]  hover:border-white hover:bg-gray-800 hover:py-3 hover:rounded-md hover:px-3">
            <vue-feather type="phone" size="20">
        </vue-feather>
        <p>Contact</p>
        </div>
            </router-link>
        <div class="flex gap-5 items-center opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 hover:border-r-[2px]  hover:border-white hover:bg-gray-800 hover:py-3 hover:rounded-md hover:px-3">
            <vue-feather type="activity" size="20"></vue-feather>
            <p>Status</p>
        </div>
        <div class="flex gap-5 items-center opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 hover:border-r-[2px]  hover:border-white hover:bg-gray-800 hover:py-3 hover:rounded-md hover:px-3">
            <vue-feather type="dollar-sign" size="20"></vue-feather>
            <p>Finances</p>
        </div>
        <div class="flex gap-5 items-center opacity-80 cursor-pointer hover:opacity-100 transition-all duration-300 hover:border-r-[2px]  hover:border-white hover:bg-gray-800 hover:py-3 hover:rounded-md hover:px-3">
            <vue-feather type="settings" size="20" animation="spin"></vue-feather>
            <p>Settings</p>
        </div>
        </div>
        </div>
        <div class="flex flex-col justify-center items-center border-t-2 border-white pt-6 border-opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="PP" width="150">
            <div class="p-2">
                <div class="p-3 bg-green-900 rounded-full cursor-default">
                    <p class="text-sm">John Wick - CEO</p>
                </div>
            </div>
            <div class="flex gap-5 p-5 ">
                <vue-feather type="instagram" size="25" class="cursor-pointer"></vue-feather>
                <vue-feather type="linkedin" size="25" class="cursor-pointer"></vue-feather>
                <vue-feather type="twitter" size="25" class="cursor-pointer"></vue-feather>
            </div>
        </div>
  </div>
</template>


<script setup>

</script>