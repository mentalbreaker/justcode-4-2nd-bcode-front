<img width="950" alt="로고" src="https://raw.githubusercontent.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-front/f3c5bb2422af30bc015ad352686fe2983c99f024/public/image/logo.svg">

## ARUITAUM

<br />
![시연영상 썸네일](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-front/blob/develop/public/image/movieCapture.png?raw=true)
🎬 [ARUITAUM 구현영상 보러 가기](https://youtu.be/An_Ny27okSk)

<br/>

## Introduction

<br/>

- 아름다운 사람들이 가꾸는 아름다운 공간이라는 뜻의 아리따움 클론 프로젝트
- 개발에 집중하기 위해서 디자인 / 기획 부분을 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백엔드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
- 진행 기간 : 2022.04.18 ~ 2022.04.29 (12일)
- [Back-end GitHub 바로가기](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-back)!

<br/>

## DB Modeling

<br/>

<img width="882" alt="DB 스크린샷" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26b065b4-3fa7-427c-8f62-f01cd97b5088/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-05-03_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.29.27.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220503T023037Z&X-Amz-Expires=86400&X-Amz-Signature=e413b7eb479cebd520465cf0e4fea68fbf0a059c02ae059afa461f86f83c13e4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-05-03%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%252011.29.27.png%22&x-id=GetObject">

<br/>

## 담당자 별 구현 기능

<br/>

**[Front]**

<br/>

🧑‍💻 김영서

1. Nav 바 구현

- 검색기능 구현 (최근검색어, 검색어 자동완성)
- 최근본 상품 모달 구현 (상품 상세페이지 들어가면 자동으로 모달 리스트)
- 장바구니 모달 구현 (장바구니에 담겨 있는 상품 보여줌)
- 카테고리 모달 구현

2. Footer 구현

- 페이지 상단으로 이동하는 버튼 구현
- 채팅 모달 구현 (유저간 실시간 채팅)

3. 메인 캐러셀 구현

- 이미지 3장을 이용해 무한 슬라이드 구현
- 3초에 한 번씩 자동으로 슬라이드
- 양 옆으로 이동하는 버튼 클릭시 자동 슬라이드 멈춤

🧑‍💻 이경원

1. 카드 컴포넌트 제작

- 캐러셀, 카테고리 및 검색 결과 페이지 공통 사용

2. 카테고리 페이지

- 카테고리 버튼 클릭하여 해당 카테고리 상품 호출
- 리뷰 순, 가격 순 함수 구현

3. 검색 결과 페이지

- 검색어에 대한 상품 호출

4. 메인 페이지 카테고리 상품 캐러셀

- 이미지 1x4 캐러셀 제작
- 좌, 우 버튼 클릭하면 이미지 2장씩 이동

🧑‍💻 이슬아

1. 로그인 페이지

- 로그인 유효성 검사 기능
- 로그인 회원 데이터 검증 후 서버에 요청

2. 회원가입 페이지

- 회원가입 유효성 검사 기능
- 전체 체크박스 기능
- 회원가입 데이터 검증 후 서버에 요청

3. 장바구니 페이지

- 수량에 따른 상품 가격 계산 기능

🧑‍💻 최정환

1. 상세 페이지 (제품 정보)

- 통신
  - 제품의 정보 GET
  - 제품의 개수와 id를 장바구니DB에 POST
- 제품의 id들을 localStorage에 저장
- 제품의 갯수에 따라 총 가격을 계산해 표현

2. 상세 페이지 (리뷰)

- 리뷰 CURD
  - POST를 통해 리뷰 생성 (사진, 내용, 별점)
  - PUT을 통해 리뷰 내용 update
  - DELETE를 통해 리뷰 삭제
  - GET을 통해 제품에 해당하는 리뷰들을 불러옴
- 리뷰 정렬
  - 날자순, 별점의 높낮이순을 정렬한다.

3. 메인 추천 carousel

- 더보기 버튼을 통해 5개씩 다른 제품을 2번 나오게 함

<br/>

**[Back]**

<br/>

🧑‍💻 김연주

1. 제품 API

- 상세 페이지에 전달할 정보를 제품 정보와 함께 총 리뷰 갯수, 평점, 리뷰의 좋아요 수를 같이 반환
- 최근 본 상품의 정보 제공하는 기능 구현

2. 장바구니 API

- 장바구니 추가, 수량 수정시 같은 함수에서 동작하도록 구현
- 장바구니에서 제품 삭제, 전체 삭제, 조회 기능 구현

3. 후기 API

- multer, fs, path 라이브러리를 이용하여 서버로 이미지를 업로드받고
  프론트에서 요청시 express의 기본 제공 미들웨어 함수인 static을 이용하여
  바로 접근할 수 있도록 제공하는 기능 구현
- 리뷰마다 좋아요, 좋아요 취소 기능 구현

4. 채팅 API

- WebSocket 프로토콜을 이용하여 간단한 채팅 기능 구현

🧑‍💻 송정석

1. 회원가입 API

- 유저네임, 이메일, 패스워드를 입력 받아 회원 가입을 진행
  해서 유저의 정보를 저장

2. 로그인 API

- 이메일과 비밀번호를 받아서 DB의 일치하는 메일이 있는지 확인후 로그인

3. Validate Token

- 토큰 유무 확인과 암호화후 DB의 비밀번호화 비교하여 인가 진행

4. Category API

- 상품 정보를 조건에 맞게 쿼리옴

<br/>

## Members

<br/>

- 김영서 : [기술 블로그](https://youngseokim-kr.github.io/)
- 이경원 : [기술 블로그](https://velog.io/@kwleee91)
- 이슬아 : [기술 블로그](https://velog.io/@pingu944)
- 최정환 : [기술 블로그](https://velog.io/@wjdghks963)
- 김연주: [기술 블로그](https://velog.io/@yeonjoo7)
- 송정석: [기술 블로그](https://velog.io/@silversjs)

<br/>

## Reference

<br/>

- 이 프로젝트는 [아리따움](https://www.aritaum.com/-KR/) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 모든 이미지들은 무료 이미지 및 자가제작 이미지들입니다.
