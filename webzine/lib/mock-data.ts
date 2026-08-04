export type TocItem = {
  label: string;
  content: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  colorType: "ivory" | "sand" | "olive" | "garnet";
  toc: TocItem[];
};

const getDummyContent = (title: string) => `이것은 '${title}'에 대한 본문 내용입니다. 

디지털 환경에서 아날로그적 감성을 전달하기 위해 우리는 여러 가지 방법을 고민합니다. 텍스트의 크기와 행간, 자간은 물론이고 화면을 가득 채우는 여백의 미학은 읽는 이로 하여금 깊은 몰입감을 선사합니다.

우리가 화면을 바라볼 때 느끼는 감정은 단순히 시각적 정보의 나열에 그치지 않습니다. 스크롤을 내릴 때의 부드러움, 링크에 마우스를 올렸을 때 나타나는 미세한 변화들, 이 모든 것들이 모여 하나의 경험을 완성합니다. 이곳에 여러분이 전하고 싶은 이야기를 담아보세요. 더 길고 깊이 있는 글이 들어갈 자리입니다.`;

export const BOOKS: Book[] = [
  {
    id: "b1",
    title: "디자인의 온도",
    author: "김 편집자",
    colorType: "ivory",
    toc: [
      { label: "서문: 종이의 질감", content: getDummyContent("서문: 종이의 질감") },
      { label: "제1장: 여백이 말하는 것", content: getDummyContent("제1장: 여백이 말하는 것") },
      { label: "제2장: 빛과 그림자", content: getDummyContent("제2장: 빛과 그림자") },
    ],
  },
  {
    id: "b2",
    title: "웹에서 아날로그를",
    author: "이 개발자",
    colorType: "sand",
    toc: [
      { label: "1. 스크린이라는 캔버스", content: getDummyContent("1. 스크린이라는 캔버스") },
      { label: "2. 부드러운 전환", content: getDummyContent("2. 부드러운 전환") },
    ],
  },
  {
    id: "b3",
    title: "타이포그래피 에세이",
    author: "박 디자이너",
    colorType: "olive",
    toc: [
      { label: "세리프의 무게감", content: getDummyContent("세리프의 무게감") },
      { label: "읽는다는 행위", content: getDummyContent("읽는다는 행위") },
      { label: "조판의 미학", content: getDummyContent("조판의 미학") },
    ],
  },
  {
    id: "b4",
    title: "감각",
    author: "최 큐레이터",
    colorType: "garnet",
    toc: [
      { label: "프롤로그", content: getDummyContent("프롤로그") },
      { label: "선반 위의 세계", content: getDummyContent("선반 위의 세계") },
      { label: "추천의 기술", content: getDummyContent("추천의 기술") },
    ],
  },
];
