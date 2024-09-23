# 실행방법

```sh
npm install
npm run dev
```

터미널에 뜨는 "localhost:포트번호" 로 브라우저를 통해 접속하기

# 24.05.02 개발 특이사항

- 명언 데이터 요청 시 CORS 에러 발생
- 서버 측에서 CORS 허용 처리 부탁드립니다.
- -> annotation을 통해 해결한 커밋 푸쉬 예정입니다. 잠시만 기다려주세요~

# 24.05.06 개발 특이사항

- 랭킹 페이지1,2,3,4 및 메인 페이지2 구현
- 더미 데이터 바운딩을 통한 UI 구현
- 사이드바를 이용한 라우팅 구현
- 랭킹 페이지 탑 버튼을 활용한 컴포넌트 렌더링(아직 컴포넌트 단위로 분리하지는 않았음)
- CSS 입혀주실 때 따로 선호하시는 방법이 없다면 Styled Components을 통한 스타일 적용 부탁드립니다

# 24.05.13 개발 특이사항

- 인포페이지, 셋팅 페이지 구현
- 사이드바를 활용한 페이지간 라우팅 기능 구현
- 더미데이터 활용한 그래프 추가
- 차트 라이브러리 추가했으므로 npm install 필수!

# 24.06.23 개발 특이사항(yutsong)

- 명언 데이터 로드하는 코드 주석 처리(goodWords 변수가 참조되고 있어서 남겨둠)
- 42 프로젝트 데이터 로드하는 코드 작성(CORS 에러 발생)

# 24.09.23 개발 특이사항(yutsong)

## cors 에러 해결에 대한 건

- cors에러 해결을 위해 react에서 프록시를 활용해 우회하여 해결 함
- 근본적인 해결책은 아니기 때문에 서버 측에서 cors 에러 해결하면 원복 예정

## 서버 측에서 해결하는 방법

- front 프로젝트 로컬에 clone
- vite.config(cors테스트용).js 파일의 파일명을 vite.config.js로 변경(기존 vite.config.js의 파일명은 vite.config2.js 등으로 수정해서 중복 피하기)
- vite.config.js 파일이 존재하는 경로에서 아래 명령어 실행하여 프론트 서버 실행
  npm install
  npm run dev
- 개발자 도구에서 console 탭을 통해 cors 에러 확인

## 패키지 제거

- mui
