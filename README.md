# 💳 오픈 마켓 바리바리 💳
* 🔗 [배포 URL](https://open-market-baribari.netlify.app/)
* 🔒 서비스 이용 계정
  - ID: seller
  - PW : seller123
  
![baribari-new](https://github.com/konveloper/open-market-baribari/assets/109451148/6d1ca4e3-f434-4218-b85f-4ef974fa9866)

* **목차**
1. [프로젝트 소개](#1-프로젝트-소개)
2. [개발 환경](#2-개발-환경)
3. [구현 기능](#3-구현-기능)
4. [특징](#4-특징)
5. [폴더 구조](#5-폴더-구조)

## 1. 프로젝트 소개
* 오픈 마켓 '바리바리'는 React를 사용하여 상품 등록, 결제, 상품에 대한 CRUD를 직접 구현해보는 개인 프로젝트입니다.
* '바리바리'에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣고, 상품을 구매할 수 있습니다.

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 2. 개발 환경

| 제목             | 내용                                               | 
| ---------------- | -------------------------------------------------- |
| Front-End        | `React` <br> `Styled Components` |
| Back-End         | 제공되는 API 사용                                  |
| 버전 및 이슈관리 | `Git`<br>`GitHub`                      |
| 상태관리 | `Zustand`|
|배포           |`Netlify`|

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 3. 구현 기능

| 🔗[스플래쉬](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Splash) | 
| ------------------------------------------------------------------------------------------|
| ![splash](https://github.com/konveloper/open-market-baribari/assets/109451148/e4245301-5fd2-4c4b-a14e-3600a2382844) |

| 🔗[회원가입](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Signup)  | 
| ------------------------------------------------------------------------------------------|
|![signup](https://github.com/konveloper/open-market-baribari/assets/109451148/093dee92-2627-44a7-bb6c-da7e1a783549)|

 🔗[로그인](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Login)   |
| ------------------------------------------------------------------------------------------|
|![login](https://github.com/konveloper/open-market-baribari/assets/109451148/2ffaf531-cc2a-4b34-83b4-1b5abb0c2b3b)|

| 🔗[홈](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Home) |
| ------------------------------------------------------------------------------------------|
|![home](https://github.com/konveloper/open-market-baribari/assets/109451148/208b121c-fdd4-4d77-859e-ecb8e2760ef2)|


| 🔗[제품 상세](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Product) |
| ------------------------------------------------------------------------------------------|
|![home_product](https://github.com/konveloper/open-market-baribari/assets/109451148/3c59fbff-3352-4f01-9607-8e032d01e587)|

| 🔗[장바구니](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Cart)  |
| ------------------------------------------------------------------------------------------|
|![cart](https://github.com/konveloper/open-market-baribari/assets/109451148/b6410468-f424-4f22-a06a-e217a752e97a)|

| 🔗[제품 상세에서 주문하기](https://github.com/konveloper/open-market-baribari/blob/main/src/pages/Order/Order.jsx) |
| ------------------------------------------------------------------------------------------|
|![order_product](https://github.com/konveloper/open-market-baribari/assets/109451148/f2f97fd0-39d0-4aed-be29-be86babee724)|

|  🔗[장바구니에서 주문하기](https://github.com/konveloper/open-market-baribari/blob/main/src/pages/Order/Order.jsx) | 
| ------------------------------------------------------------------------------------------|
|![order_cart](https://github.com/konveloper/open-market-baribari/assets/109451148/ab1647cd-dd04-478c-a5d5-5b2c3ae7649b)|

| 🔗[로그아웃](https://github.com/konveloper/open-market-baribari/blob/main/src/components/Modal/ModalLogout.jsx) |
| ------------------------------------------------------------------------------------------|
|![logout](https://github.com/konveloper/open-market-baribari/assets/109451148/b7b3bcd1-854c-44e0-91df-7d2e8a7e0400)|

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 4. 특징

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 5. 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜allDeleteCart.js
 ┃ ┃ ┣ 📜deleteCart.js
 ┃ ┃ ┣ 📜getCart.js
 ┃ ┃ ┣ 📜postCart.js
 ┃ ┃ ┗ 📜putCart.js
 ┃ ┣ 📂Product
 ┃ ┃ ┗ 📜getProducts.js
 ┃ ┣ 📂Signup
 ┃ ┃ ┣ 📜postSignup.js
 ┃ ┃ ┗ 📜postUsernameIsValid.js
 ┃ ┣ 📂User
 ┃ ┃ ┣ 📜postLogin.js
 ┃ ┃ ┗ 📜postLogout.js
 ┃ ┗ 📜api.js
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┗ 📂img
 ┣ 📂components
 ┃ ┣ 📂CartCard
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┗ 📂NavBar
 ┃ ┣ 📂Counter
 ┃ ┣ 📂Modal
 ┃ ┣ 📂OrderCard
 ┃ ┣ 📂ProductCard
 ┃ ┗ 📂ProductCardLi
 ┣ 📂pages
 ┃ ┣ 📂Cart
 ┃ ┣ 📂Home
 ┃ ┣ 📂Login
 ┃ ┣ 📂NotFound
 ┃ ┣ 📂Order
 ┃ ┣ 📂Product
 ┃ ┣ 📂Signup
 ┃ ┣ 📂Splash
 ┃ ┗ 📜Root.jsx
 ┣ 📂store
 ┃ ┣ 📜authStore.js
 ┃ ┗ 📜useCartStore.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.jsx
 ┃ ┗ 📜font.css
 ┣ 📜App.js
 ┗ 📜index.js
```
 
<p align="right"><a href="#top">(🔼 Top)</a></p>

