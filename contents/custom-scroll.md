---
date: '2022-04-03'
title: '커스텀 스크롤 만들어보기'
categories: ['Web']
summary: '커스텀 스크롤을 만들어 보았던 경험을 남긴다. scroll에 transition이 적용되지 않던 현상을 해결했다.'
thumbnail: './assets/custom-scroll.png'
---

회사에서 커스텀 스크롤을 만들 일이 있었다. 다른 라이브러리를 사용해서 구현해보고자 했지만, 내가 원하는 대로 되지 않아 직접 만들기로 하였다. (예를 들어 스크롤 위아래로 마진을 주는 기능이 없다던가...)

직접 만든 스크롤은 -webkit- 전용 css 속성이 많아서 모든 브라우저에 동작하는 것이 아니고, 크롬 기반 브라우저와 Safari 위주로 돌아가게 하였다. firefox에서는 다른 css 속성으로 scroll을 변경할 수 있었는데 똑같이 하는게 힘들어서 그냥 기본 스크롤로 나오게 만들었다.
회사에서는 Svelte로 코드를 작성했지만, 해당 포스트에서는 알아보기 쉽게 html, css, js로 작성하였다.

### 간단한 html

간단한 실습을 위해 만든 html은 아래와 같다.

html

```html
<div class="content-container">
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</div>
```

### css 속성 살펴보기

css

```css
* {
  margin: 0;
  padding: 0;
}
.content-container {
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: overlay;
  overscroll-behavior-y: contain;

  background-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-color 300ms linear;
}

.content-wrapper {
  background-color: white;
  color: #000008;
}

.content-container.on-scrollbar {
  background-color: #e0e0e1;
}

.content-container::-webkit-scrollbar {
  width: 16px;
}

.content-container::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
  margin: 10px 0px;
}

.content-container::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: inherit;
  border: 6px solid transparent;
  background-clip: content-box;
}

.box {
  width: 300px;
  height: 300px;
}
.box:nth-child(1) {
  background: blue;
}
.box:nth-child(2) {
  background: yellow;
}
.box:nth-child(3) {
  background: green;
}
.box:nth-child(4) {
  background: red;
}
.box:nth-child(5) {
  background: orange;
}
```

`overflow-y: overlay;` 를 사용하면 scroll이 화면을 차지하지 않게 된다.
하지만, firefox에서는 overlay 속성이 먹히지 않아서 `overflow: scroll;` 속성을 위에 두었다.
https://caniuse.com/?search=overlay 에 의하면 safari에서는 overlay 를 인식하지만, auto로 동작한다고 한다.

<br/>

`overscroll-behavior-y: contain;` 은 스크롤 체이닝이 일어나지 않게 하는 것이다. 스크롤체이닝이란 안의 요소가 스크롤이 끝나게 되면 바깥 요소로 넘어가서 스크롤이 이어지게 되는 현상을 말하는데, 해당 속성을 주게 되면 스크롤 체이닝이 일어나지 않게되어 안의 자식 요소가 스크롤이 끝나도 바깥 부모요소가 스크롤 되지 않는다.

<br/>

`-webkit-scrollbar`속성의 width는 scrollbar의 전체 넓이를 의미한다.
`-webkit-scrollbar-track` 속성은 scrollbar의 뒷 배경 부분을 의미하는데, background-color 값을 투명으로 설정하고, margin을 주어 위 아래로 공백이 생기게 하였다.
`-webkit-scrollbar-thumb` 속성은 scrollbar를 의미하는데, background-color 가 scrollbar의 색인데, 이걸로 transition을 주려고 하니깐 먹히지 않았다. 그래서 상위 부모요소의 색을 inherit로 상속 받게 하여,
부모요소의 색을 바꿔주고, transition을 주었다. `background-clip: content-box;`를 주어 content 부분에만 background 색이 적용되게 하였다.

<br/>

그래서 부모요소인 container에 `background-color: transparent;`를 주어 투명색을 주게 하고, `.on-scrollbar` 클래스명이 추가되면, `background-color: #e0e0e1;`을 주게 하였다.
`background-clip: text;` 을 주어 text에 background가 채워지게 함으로써 container의 background 색이 변경되지 않게 하였다.

Wrapper에는 혹시나 모를 container의 색을 대비해서 background-color 값을 주었고 하위의 글자 색이 container background-clip에 영향 받지 않도록, color 값을 주었다.

### js 살펴보기

js

```js
const containerElement = document.querySelector('.content-container');
let timer = null;
const handleScroll = () => {
  if (timer !== null) {
    clearTimeout(timer);
  }

  if (containerElement.classList.contains('on-scrollbar') === false) {
    containerElement.classList.add('on-scrollbar');
  }

  timer = setTimeout(() => {
    containerElement.classList.remove('on-scrollbar');
  }, 800);
};
containerElement.addEventListener('scroll', handleScroll);
```

container 를 selector로 가지고 온 후, scroll 이벤트를 달아주었다. scroll 이벤트에 throttle을 달아주면 좋지만, 현 코드에서는 생략하였다.
그 후, on-scrollbar class가 없으면 on-scrollbar class를 추가하고, 0.8초 뒤에 on-scrollbar class가 사라지게 만들었다.
그러면 css에 의해서 transition이 일어나 자연스럽게 나타났다 사라지는 것을 볼 수 있다.

<br/>

작성한 코드는 https://codesandbox.io/s/elegant-williams-d48eg0?file=/index.html 에서 확인할 수 있다.
