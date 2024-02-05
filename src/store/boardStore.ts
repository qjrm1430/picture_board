import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';
import Board from '@/types/index';
export const boardStore = defineStore(
  'boardStore',
  () => {
    const router = useRouter();
    const board = ref<Board.Post[]>([]);
    const post = ref<Board.Post>();
    //게시판을 가져오는
    const getBoard = () => {
      // 로컬스토리지에서 가져오기
      board.value = JSON.parse(localStorage.getItem('board') || '');
    };
    //게시글을 가져오는
    const getPost = () => {
      // 게시글이 있을 때 목록 불러오기
      if (board.value.length > 0) {
        // id와 일치하는 게시글 가져오기
        const Post = board.value.find(() => {
          //
        });
      }
      // 없을 때
    };
    //포스트 추가
    const addPost = (
      Name: string,
      Title: string,
      Content: string,
      Photo: string[]
    ) => {
      // 마지막 인덱스 찾기
      const lastPost = board.value[board.value.length - 1];
      // 마지막 인덱스 + 1를 저장
      const newId = lastPost ? lastPost.id + 1 : 1;
      // 새로운 포스트를 추가할 곳에 포스트 삽입
      const newPost = {
        id: newId,
        name: Name,
        title: Title,
        content: Content,
        photo: Photo,
        date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      };
      board.value.push(newPost);
      router.push({ path: '/' });
    };
    return {
      board,
      post,
      getBoard,
      getPost,
      addPost,
    };
  },
  { persist: true }
);
