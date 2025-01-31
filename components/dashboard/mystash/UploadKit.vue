<template>
  <!-- upload kit header -->
  <div class="mb-10 flex items-center justify-between md:-mt-1">
    <h3 class="font-inter text-xl font-bold">Upload Kit</h3>
    <div class="flex gap-3">
      <CustomButton class="hover:bg-destructive" variant="ghost">Cancel</CustomButton>
      <CustomButton variant="default" class="w-24"> Publish </CustomButton>
      <Icon class="my-2" name="pepicons-pop:dots-x" />
    </div>
  </div>
  <!-- upload kit content -->
  <div class="flex flex-row justify-between gap-8">
    <!-- upload img -->
    <div class="flex w-1/3 flex-col items-center gap-9">
      <div class="flex h-80 w-full flex-col items-center gap-32 rounded-xl bg-[#EFF1F5]">
        <img class="pt-32" :src="`/img/dashboard/svg/img.svg`" />
        <CustomButton class="" variant="default">Add Cover</CustomButton>
      </div>
      <CustomButton class="border" variant="ghost">
        <Icon name="icon-park-solid:play" />How to upload & publish kit?</CustomButton
      >
    </div>
    <!-- upload input detail -->
    <div class="kitName flex w-2/3 flex-col gap-8">
      <!-- kit name -->
      <div class="flex flex-col gap-3">
        <CustomLabel>Kit Name</CustomLabel>
        <CustomInput placeholder="Kit Name" v-model="kitName" />
      </div>
      <!-- kit description -->
      <div class="kitDesc flex flex-col gap-3">
        <CustomLabel>Kit Description</CustomLabel>
        <Textarea class="bg-transparent" placeholder="Write kit description here..." v-model="kitDesc"></Textarea>
      </div>
      <!-- kit Price -->
      <div class="kitPrice flex flex-col gap-3">
        <CustomLabel>Kit Price</CustomLabel>
        <CustomInput placeholder="$19.99" v-model="kitPrice" />
        <p class="font-inter text-xs font-normal text-secondary">Enter the price a user pays for purchasing the complete kit.</p>
      </div>
      <!-- add co-producer -->
      <div class="coProducer flex flex-col gap-3">
        <CustomLabel>Add co-producer</CustomLabel>
        <TagsInput class="bg-transparent" v-model="coProducer">
          <TagsInputItem class="bg-[#D9D9D9]" v-for="item in coProducer" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete />
          </TagsInputItem>

          <TagsInputInput placeholder="Add co-producers..." />
        </TagsInput>
        <p class="font-inter text-xs font-normal text-secondary">
          Co-producers must already have a Sample Stash Producer account to select them. View
          <span to="" class="text-primary underline">Payout Policy</span>.
        </p>
      </div>
      <!-- upload main sample -->
      <div class="upload flex flex-col gap-3">
        <CustomLabel>Upload Main Sample</CustomLabel>
        <p class="font-inter text-xs font-normal text-secondary">
          Provide an audio demo so customers can preview the kit (.mp3 file)
        </p>
        <CustomInput class="h-32 border-dashed border-primary text-primary" placeholder="Upload Main Sample" type="file" />
      </div>
      <!-- kit genre-->
      <div class="kitGenre flex flex-col gap-3">
        <CustomLabel>Kit Genre</CustomLabel>
        <Select>
          <SelectTrigger class="w-full bg-transparent">
            <SelectValue class="text-secondary" placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent class="bg-white">
            <SelectGroup>
              <SelectLabel>Soul/R&B</SelectLabel>
              <SelectItem value="Soul/R&B1"> Soul/R&B1 </SelectItem>
              <SelectItem value="Soul/R&B2"> Soul/R&B2 </SelectItem>
              <SelectItem value="Soul/R&B3"> Soul/R&B3 </SelectItem>
              <SelectItem value="Soul/R&B4"> Soul/R&B4 </SelectItem>
              <SelectItem value="Soul/R&B5"> Soul/R&B5 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <!-- instruments-->
      <div class="instruments flex flex-col gap-3">
        <CustomLabel>Instruments</CustomLabel>
        <p class="font-inter text-xs font-normal text-secondary">Select any instruments the kit is focused on.</p>
        <TagsInput class="bg-transparent" v-model="instruments">
          <TagsInputItem class="bg-[#D9D9D9]" v-for="item in instruments" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete />
          </TagsInputItem>

          <TagsInputInput placeholder="Add instruments..." />
        </TagsInput>
      </div>
      <!-- kit type-->
      <div class="kitType flex flex-col gap-3">
        <CustomLabel>Kit Type?</CustomLabel>
        <Select>
          <SelectTrigger class="w-full bg-transparent">
            <SelectValue class="text-secondary" placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent class="bg-white">
            <SelectGroup>
              <SelectLabel>One Shots</SelectLabel>
              <SelectItem value="One Shots1"> One Shots1 </SelectItem>
              <SelectItem value="One Shots2"> One Shots2 </SelectItem>
              <SelectItem value="One Shots3"> One Shots3 </SelectItem>
              <SelectItem value="One Shots4"> One Shots4 </SelectItem>
              <SelectItem value="One Shots5"> One Shots5 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <!-- upload kit files -->
      <div class="upload flex flex-col gap-3">
        <CustomLabel>Upload Kit Files</CustomLabel>
        <p class="font-inter text-xs font-normal text-secondary">Must be a .zip file with all the kit samples.</p>
        <Input class="bg-white" placeholder="Upload Kit Files" type="file" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import { ref } from 'vue'

const kitName = ref('')
const kitDesc = ref('')
const kitPrice = ref('')
const coProducer = ref(['Apple', 'Banana'])
const instruments = ref(['Drums', 'Percussion'])

// watch(
//   () => [kitName.value, kitDesc.value, kitPrice.value],
//   () => {
//     console.log('Name', kitName.value)
//     console.log('Desc', kitDesc.value)
//     console.log('Price', kitPrice.value)
//   },
// )
</script>
