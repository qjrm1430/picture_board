<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { boardStore } from '@/store/boardStore';
import { useRoute } from 'vue-router';
const route = useRoute();
const { post } = storeToRefs(boardStore());

// onMounted(() => {
//   boardStore.getPost(route.params.id);
// });
</script>

<template>
  <v-app>
    <v-main> 1ffefds </v-main>
  </v-app>
</template>
<style scoped></style>
