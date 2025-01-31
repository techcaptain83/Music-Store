<template>
  <div class="grid gap-8 md:grid-cols-[200px_1fr]">
    <!-- User Info -->
    <div>
      <h3 class="mb-2 font-semibold">Account Info</h3>
      <p class="text-sm text-foreground-secondary">Basic account info including your name & email.</p>
    </div>

    <form class="flex flex-col gap-4 rounded-2xl bg-white p-6">
      <div class="relative mb-4 self-start">
        <img
          class="size-28 rounded-full"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid"
          alt="avatar"
        />
        <CustomButton size="xs" class="absolute -bottom-3 left-1/2 -translate-x-1/2">Update</CustomButton>
      </div>

      <div>
        <CustomInput title="FirstName" type="text" placeholder="Enter your first name" :model-value="formUser.firstName" />
      </div>
      <div>
        <CustomInput title="LastName" type="text" placeholder="Enter your last name" :model-value="formUser.lastName" />
      </div>
      <div>
        <CustomInput
          title="ProducerName"
          type="text"
          placeholder="Enter your producer name"
          :model-value="formUser.producerName"
        />
      </div>
      <div>
        <CustomInput title="Email" type="email" placeholder="Enter your email" :model-value="formUser.email" />
      </div>
      <CustomButton class="self-start" size="sm" @click.prevent="handleFormUserSubmit"> Update Account Info </CustomButton>
    </form>

    <!-- Password -->
    <div>
      <h3 class="mb-2 font-semibold">Password</h3>
      <p class="text-sm text-foreground-secondary">Use this form if you need to change or update your current password.</p>
    </div>

    <form class="flex flex-col gap-4 rounded-2xl bg-white p-6">
      <div>
        <CustomInput
          title="PasswordCurrent"
          type="password"
          placeholder="Enter your current password"
          :model-value="formPassword.current"
        />
      </div>
      <div>
        <CustomInput title="PasswordNew" type="password" placeholder="Enter your new password" :model-value="formPassword.new" />
      </div>
      <div>
        <CustomInput
          title="PasswordConfirmNew"
          type="password"
          placeholder="Repeat your new password"
          :model-value="formPassword.confirmNew"
        />
      </div>
      <CustomButton class="self-start" size="sm" @click.prevent="handleFormPasswordSubmit"> Update password </CustomButton>
    </form>

    <!-- Payment Methods -->
    <div>
      <h3 class="mb-2 font-semibold">Payment Methods</h3>
      <p class="text-sm text-foreground-secondary">All existing payment methods available to use for purchasing kits.</p>
    </div>

    <div class="flex flex-col gap-4 rounded-2xl bg-white p-6">
      <div class="flex flex-col gap-4 rounded-lg bg-gray-200 p-3">
        <p>visa1</p>
        <p>visa2</p>
      </div>

      <CustomButton class="self-center" variant="link" size="sm" @click.prevent="handleFormPasswordSubmit">
        Add Payment Method
      </CustomButton>
    </div>

    <!-- Delete Account -->
    <div>
      <h3 class="mb-2 font-semibold">Delete Account</h3>
      <p class="text-sm text-foreground-secondary">If you wish to delete your account, you can do so here.</p>
    </div>

    <div class="flex flex-col gap-4 rounded-2xl bg-white p-6">
      <p class="text-xs text-foreground-secondary">
        No longer using The Sample Stash? You may delete your account and all associated data. This cannot be undone, so please be
        certain. For any questions, please contact support at
        <a class="cursor-pointer font-medium text-primary underline hover:opacity-80">info@thesamplestash.com</a>
      </p>

      <CustomButton class="self-start" variant="destructive" size="sm" @click.prevent="console.log('Delete')">
        Delete Account
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const formUser = ref({ firstName: '', lastName: '', producerName: '', email: '' })
const formUserStatus = ref({ message: '', isError: false })
const formPassword = ref({ current: '', new: '', confirmNew: '' })
const formPasswordStatus = ref({ message: '', isError: false })

async function handleFormUserSubmit() {
  // const myForm = new FormData(event.target)
  try {
    // await useFetch("https://formspree.io/f/xgejpzoy", { method: "POST", body: myForm, headers: { Accept: "application/json" } })
    formUserStatus.value.message = 'Success'
    formUserStatus.value.isError = false
    formUser.value = { firstName: '', lastName: '', producerName: '', email: '' }
  } catch (error) {
    formUserStatus.value.isError = true
    formUserStatus.value.message = 'Error'
    console.error(error)
  }
}

async function handleFormPasswordSubmit() {
  // const myForm = new FormData(event.target)
  try {
    // await useFetch("https://formspree.io/f/xgejpzoy", { method: "POST", body: myForm, headers: { Accept: "application/json" } })
    formUserStatus.value.message = 'Success'
    formUserStatus.value.isError = false
    formPassword.value = { current: '', new: '', confirmNew: '' }
  } catch (error) {
    formUserStatus.value.isError = true
    formUserStatus.value.message = 'Error'
    console.error(error)
  }
}
</script>
