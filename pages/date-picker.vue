<script setup lang="ts">
// https://stackoverflow.com/questions/35682138/html5-date-picker-doesnt-show-on-safari
// https://developer.mozilla.org/en-US/play
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#javascript
// https://developer.chrome.com/blog/show-picker/

// import { ref } from 'vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

// const date = ref();

// import DatePicker from "vuejs3-datepicker"
const date = ref()

const showPicker = () => {
  if (!datepicker.value) {
    return
  }
  datepicker.value.$el.showPicker()
  // console.log(datepicker.value.shadow);
}

const datepicker = shallowRef()
const hide = ref(false)



const show = ref(false)
</script>

<template>
  <!-- <LocalDateInput v-model="date" ref="datepicker" class="w-300px p-3 border-box" name="test" id="test"
    :hide-indicator="hide" max="2023-12-31" min="2023-12-01" v-slot="{ support, attrs }">
    <DatePicker v-if="show" v-model="date" locale="zh-TW" :enable-time-picker="false" format="yyyy-MM-dd" auto-apply>
    </DatePicker>
  </LocalDateInput> -->
  <JDatePicker />
  <button @click="show = !show">Toggle Show</button>
  <div>{{ date }}</div>
  <div>
    <button class="btn" @click="hide = !hide">Toggle</button>
    <button @click="showPicker">Open</button>
  </div>
  <!-- <div class="border w-300px shadow h-30px" @click="showPicker"></div> -->
  <!-- <input ref="datepicker" class="w-300px p-3 border-box native-datepicker" type="date" name="test" id="test"
      v-model="date" max="2023-12-31" step="2" pattern="\d{4}-\d{2}-\d{2}" min="2023-12-01" placeholder="YYYY-MM-DD"
      @focus="showPicker"> -->

  <!-- <DatePicker v-model="date" /> -->
</template>

<style >
/* .native-datepicker::-webkit-calendar-picker-indicator {
  display: none;
} */

/* .native-datepicker::-webkit-input-placeholder {

  visibility: hidden;

} */
</style>