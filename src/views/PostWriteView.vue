<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { boardStore } from '@/store/boardStore';
const router = useRouter();
const route = useRoute();
const board = boardStore();
const imageList = ref<string[]>([]); // vue ref- 반응형 값을 저장

const post = ref({
  name: '',
  title: '',
  content: '',
  photo: imageList,
});

const submitForm = () => {
  board.addPost(
    post.value.name,
    post.value.title,
    post.value.content,
    post.value.photo
  );
  console.log(1);
};
const eraseForm = () => {
  post.value.name = '';
  post.value.title = '';
  post.value.content = '';
  post.value.photo = [];
};

const changeImage = (event: Event) => {
  const files = (event.target as HTMLInputElement)?.files;
  if (files && files.length > 0) {
    console.log(files);
    // 쌓아야함
    for (const file of files) {
      // 컨텐츠를 특정 file에서 읽어옴. 읽는 행위가 종료되면 loadend 이벤트 트리거함
      // & base64 인코딩된 스트링 데이터가 result 속성에 담김
      const reader = new FileReader();

      // load 이벤트 핸들러. 리소스 로딩이 완료되면 실행됨.
      reader.onload = (e) => {
        imageList.value.push(String(e.target?.result));
      }; // ref previewImage 값 변경
      reader.readAsDataURL(file);
    }
  }
};
</script>

<template>
  <v-main style="min-height: 300px">
    <v-card class="ma-8">
      <v-form class="ma-4" @submit.prevent="submitForm">
        <v-text-field label="이름" v-model.trim="post.name" />
        <v-text-field label="제목" v-model.trim="post.title" />
        <v-textarea label="내용" v-model.trim="post.content" />
        <input type="file" accept="image/*" @change="changeImage" multiple />

        <div class="preview" v-for="(image, i) in imageList" :key="i">
          <img :src="image" />
        </div>
        <v-btn type="submit">저장</v-btn>
        <v-btn @click="eraseForm">취소</v-btn>
      </v-form>
    </v-card>
  </v-main>
</template>
<style scoped></style>
