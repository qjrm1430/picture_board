<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { boardStore } from '@/store/boardStore';
import { storeToRefs } from 'pinia';
const router = useRouter();
const headers = [
  {
    align: 'start',
    sortable: false,
    title: 'ID',
  },
  { title: 'Name' },
  { title: 'Title' },
  { title: 'Date' },
];

const search = ref('');
const { board } = storeToRefs(boardStore());
// 글쓰기 페이지로 이동
const moveWritePage = () => {
  router.push({ path: '/write' });
};
// 테이블 제목셀 클릭 이벤트
const movePost = (id: number) => {
  router.push({ path: `/post/${id}` });
};
</script>

<template>
  <v-main class="align-center justify-center" style="min-height: 300px">
    <div class="ma-8">검색</div>
    <div align="right" class="mr-8">
      <v-btn @click="moveWritePage"> 글쓰기 </v-btn>
    </div>
    <v-card class="ma-8">
      <v-data-table :items="board" :headers="(headers as any)" :search="search">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td @click="movePost(item.id)" style="cursor: pointer">
              {{ item.title }}
            </td>
            <td>{{ item.date }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-main>
</template>
<style scoped></style>
