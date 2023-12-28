<script setup lang="ts">
const options = ref([
  { name: "400 元", value: "400" },
  { name: "450 元", value: "450" },
  { name: "500 元", value: "500" },
  { name: "550 元", value: "550" },
  { name: "600 元", value: "600" },
  { name: "650 元", value: "650" },
  { name: "700 元", value: "700" },
  { name: "750 元", value: "750" },
  { name: "800 元", value: "800" },
])
const value = ref()

const counties = ref([
  { name: "台北市", value: "台北市" },
  { name: "台中市", value: "台中市" },
  { name: "新竹市", value: "新竹市" },
  { name: "宜蘭縣", value: "宜蘭縣" },
  { name: "台南市", value: "台南市" },
  { name: "高雄市", value: "高雄市" },
])

const districts = ref([
  { name: "中正區", value: "中正區" },
  { name: "大安區", value: "大安區" },
  { name: "中山區", value: "中山區" },
  { name: "大同區", value: "大同區" },
  { name: "南港區", value: "南港區" },
  { name: "文山區", value: "文山區" },
  { name: "北投區", value: "北投區" },
])
const form = reactive({
  county: "",
  district: "",
  address: "",
  save: [],
})
</script>
<template>
  <div class="px-4 max-w-600px mx-auto">
    <section class="my-20px">
      <PSelectField
        v-model="value"
        :options="options"
        placeholder="請選擇潔客價位"
        label="潔客價位"
        name="price"
      />
    </section>
    <section class="my-20px grid gap-24px">
      <PInputField name="name" label="姓名" />
      <div class="flex gap-16px">
        <PInputField
          class="flex-1"
          name="name"
          label="姓名"
          placeholder="真實姓名"
          required
        />
        <PInputField
          class="flex-1"
          name="name"
          label="手機號碼"
          placeholder="手機號碼"
          required
        />
      </div>
      <PInputField
        class="flex-1"
        name="name"
        label="手機號碼"
        placeholder="手機號碼"
        error="請輸入正確的手機號碼"
        required
      />
      <div class="flex gap-16px">
        <PInputField
          class="flex-1"
          name="name"
          label="備註"
          placeholder="請輸入備註"
          prefix-icon="chat-outline"
        />
        <PInputField
          class="flex-1"
          name="name"
          label="備註"
          placeholder="請輸入備註"
          suffix-icon="chat-outline"
        />
      </div>
    </section>
    <section>
      <PField name="addressinfo" label="清潔地址" required>
        <div class="flex gap-16px mb-8px">
          <PSelectField
            name="county"
            :options="counties"
            placeholder="請輸入縣市"
            v-model="form.county"
          ></PSelectField>
          <PSelectField
            name="district"
            :options="districts"
            placeholder="請輸入區域"
            v-model="form.district"
          ></PSelectField>
        </div>
        <PInputField
          name="address"
          placeholder="請輸入地址"
          v-model="form.address"
        ></PInputField>
      </PField>
    </section>
    <section class="my-20px">
      <PCheckbox v-model="form.save" value="yes"></PCheckbox>
      <!-- {{ form.save }} -->
    </section>
    <section class="my-20px">
      <div class="flex gap-8px">
        <PButton class="flex-1" label="確認送出"></PButton>
        <PButton
          class="flex-1"
          label="確認送出"
          icon="add-circle-filled"
        ></PButton>
        <PButton class="flex-1" label="確認送出" loading></PButton>
      </div>
    </section>
    <section class="my-20px">
      <div class="flex gap-8px">
        <PButton
          class="flex-1"
          label="確認送出"
          theme="primary-outline"
        ></PButton>
        <PButton
          class="flex-1"
          label="確認送出"
          theme="primary-outline"
          icon="add-circle-filled"
        ></PButton>
        <PButton
          class="flex-1"
          label="確認送出"
          theme="primary-outline"
          loading
        ></PButton>
      </div>
    </section>
    <section class="my-20px">
      <PrimeCalendar></PrimeCalendar>
    </section>

    <!-- <p class="bg-brand-primary">123</p> -->
    <div class="h-1200px"></div>
    <!-- <div class="transition-transform,opacity grid-cols-[20px_20px]"></div> -->

    <!-- <div class="border-[1px,solid,black] w-200px h-20px bg-red"></div> -->
  </div>
</template>
<style></style>
