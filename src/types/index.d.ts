// 게시판
declare namespace Board {
  // 게시글 인터페이스 - id, 이름, 제목, 날짜, 내용, 사진
  interface Post {
    id: number;
    name: string;
    title: string;
    date: string;
    content: string;
    photo?: string[];
  }
}
export default Board;
