<template>
    <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="py-5 px-12">
                    Date
                </th>
                <th scope="col" class="py-5 px-12">
                    ID
                </th>
                <th scope="col" class="py-5 px-12">
                    Value
                </th>
                <th scope="col" class="py-5 px-12">
                    Status
                </th>
                <th scope="col" class="py-5 px-12 flex gap-2 items-center">
                    Description <vue-feather type="info" size="20"></vue-feather>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b " v-for="data in datas" :key="data">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {{data.date}}
                </th>
                <td class="py-5 px-12">
                    {{data.id}}
                </td>
                <td class="py-5 px-12">
                    {{data.value}}
                </td>
                <td class="py-5 px-12">
                    {{data.status}}
                </td>
                <td class="py-5 px-12">
                    {{data.desc}}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</template>

<script setup>
import datas from '@/assets/data/TableData'
</script>