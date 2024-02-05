<script lang="ts" setup>
import { ref } from 'vue';
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="게시판"></v-app-bar>
      <router-view />
    </v-layout>
  </v-app>
</template>
<style scoped></style>
