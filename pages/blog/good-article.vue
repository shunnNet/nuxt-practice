<script setup lang="ts">
const { data } = await useAsyncData('time', async () => {
  console.log("get Time");
  return await getTime()
})
</script>
<template>
  <h1>Good Article</h1>
  <section>
    <h2>Section1</h2>
    <nav>Time: {{ data }}</nav>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit autem in dolores, corporis ex
      numquam rem ipsum ipsam soluta aut distinctio voluptatibus. Maxime, optio. Aliquam nobis ducimus illo asperiores?
    </p>
  </section>
</template>
<style></style>