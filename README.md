# user service

## 프로젝트 실행 방법

```
npm install
npm start
```

## 주 사용 라이브러리와 사용 의도

### tailwind

styled component를 사용할 때 레이아웃(marin, padding, flex 등)만 필요한 엘리먼트를 만들기가 애매한 부분이 있어서 이번 과제에는 tailwind를 사용하였습니다.  
className이 길어지는 단점도 있지만 작은 단위의 css를 적용하는 부분에서는 styled component보다 강점이 있었습니다.

## 프로젝트 폴더 구조와 설계 의도 & 컴포넌트 구조와 설계 의도

### pages

페이지에 대한 컴포넌트

### components

기능을 기준으로 관심사를 분리하여 폴더를 생성하였습니다. container 컴포넌트를 우선적으로 생성하고, container 컴포넌트에 하위 컴포넌트는 여러 곳에 사용하면 common 폴더에 분리하고, 해당 컴포넌트에만 사용되면 폴더로 묶는 방식을 사용했습니다.

### hooks

custom hooks에 대한 폴더

### api

api 요청함수와 타입들에 대한 폴더

## (상태 관리를 사용한 경우) 상태 관리의 구조와 설계 의도

페이지 간에 공유되는 state가 많지 않을 것으로 예상되어 redux를 사용하지 않고, 비밀 번호 변경 로직에 전역으로 필요한 state가 있어서 contextAPI를 사용하여 구현하였습니다.

## 리뷰어에게 강조하고 싶은 부분 또는 그 외 기타 내용

페이지에 진입시 바로 요청을 보내야 하는 경우 페이지 컴포넌트에서 useEffect를 통해 api 요청을 하고, 유저의 액션에 대한 요청을 해당하는 컴포넌트에서 하는 방법으로 개발하였습니다.

## (테스트를 작성한 경우) 테스트 시나리오 작성 의도와 목적

- `src/components/setting/common/TimeCounter.test/tsx` : setInterval 동작에 대한 렌더링 테스트
  Login 컴포넌트부터 user의 행동(click 등)에 대한 테스트 케이스를 작성하려고 했지만 아직 테스트 케이스에 대한 공부가 부족하여 시간 관계상 제출합니다.
