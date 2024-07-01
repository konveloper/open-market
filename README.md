# 💳 오픈 마켓 바리바리 💳
* 🔗 [배포 URL](https://open-market-baribari.netlify.app/)
* 🔒 서비스 이용 계정
  - ID: seller
  - PW : seller123
  
![baribari-new](https://github.com/konveloper/open-market-baribari/assets/109451148/6d1ca4e3-f434-4218-b85f-4ef974fa9866)

**📍 목차**
1. [프로젝트 소개](#프로젝트-소개)
2. [개발 환경](#개발-환경)
3. [구현 기능](#구현-기능)
4. [트러블 슈팅](#트러블-슈팅)
5. [폴더 구조](#폴더-구조)

## 프로젝트 소개
* 오픈 마켓 '바리바리'는 React를 사용하여 상품 등록, 결제, 상품에 대한 CRUD를 직접 구현해보는 개인 프로젝트입니다.
* '바리바리'에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣고, 상품을 구매할 수 있습니다.

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 개발 환경

| 제목             | 내용                                               | 
| ---------------- | -------------------------------------------------- |
| Front-End        | `React` <br> `Styled Components` |
| Back-End         | 제공되는 API 사용                                  |
| 버전 및 이슈관리 | `Git`<br>`GitHub`                      |
| 상태관리 | `Zustand`|
|배포           |`Netlify`|

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 구현 기능

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

| 🔗[검색 기능](https://github.com/konveloper/open-market-baribari/tree/main/src/components/Common/NavBar) |
| ------------------------------------------------------------------------------------------|
|![search](https://github.com/konveloper/open-market-baribari/assets/109451148/4d96215d-6350-47b9-92b5-ec009e22ca62)|


| 🔗[제품 상세](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Product) |
| ------------------------------------------------------------------------------------------|
|![home_product](https://github.com/konveloper/open-market-baribari/assets/109451148/3c59fbff-3352-4f01-9607-8e032d01e587)|

| 🔗[장바구니](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Cart)  |
| ------------------------------------------------------------------------------------------|
|![cart](https://github.com/konveloper/open-market-baribari/assets/109451148/b6410468-f424-4f22-a06a-e217a752e97a)|

| 🔗[상품 삭제](https://github.com/konveloper/open-market-baribari/tree/main/src/pages/Cart)  |
| ------------------------------------------------------------------------------------------|
|![deleteItems](https://github.com/konveloper/open-market-baribari/assets/109451148/158bb2d1-fb6b-493c-a396-f7ecc4f96ba6)|

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

## 트러블 슈팅
### 1. 장바구니 아이템 상태 관리하기 
[🔗 블로깅](https://velog.io/@konveloper/Zustand-%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)
<br>
장바구니 아이템을 개별/전체 삭제하는 기능을 구현하면서 상태 관리의 중요성을 알게되었다. <br>
수시로 변동하는 장바구니 아이템의 상태 관리가 필요해진 것이다. <br>
아이템 상태를 관리하는 커스텀 훅(hook)인 useCartStore 코드를 다음과 같이 작성하여 사용하였다. <br>
장바구니 컴포넌트가 렌더링될 때 최신 장바구니 데이터를 보여줄 수 있고, 언제든지 cartItems를 불러와서 작업할 수 있어 간편하다. <br>
```jsx
import create from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  addCartItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));
  removeCartItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.cart_item_id !== itemId),
    })),

export default useCartStore;
```


### 2. 여러 페이지에서 넘어온 값 한 페이지에서 관리하기
[🔗 블로깅](https://velog.io/@konveloper/React-useNavigate-useLocation%EC%9C%BC%EB%A1%9C-%EC%97%AC%EB%9F%AC-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-%EB%84%98%EC%96%B4%EC%98%A4%EB%8A%94-%EB%8B%A4%EB%A5%B8-%EA%B0%92%EB%93%A4-%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)
<br>
useNavigate, useLocation를 이용하면 다른 페이지로 이동할 때 값을 넘겨줄 수 있다. <br>
장바구니 페이지에서 주문 페이지로 이동할 때 사용하고 있었다. <br>
그런데 상품을 주문할 때 두 가지 경우가 있었다. <br>
(1)장바구니 페이지에서 아이템을 선택해 주문하기. (2)제품 페이지에서 '바로 구매' 버튼을 통해 주문하기. <br>
장바구니 페이지와 제품 페이지에서 넘겨주는 값의 형태가 다른데, 주문은 주문 페이지 한 곳에서 이루어진다. <br>
각기 다른 데이터를 주문 페이지로 가져와서 상품을 렌더링해주어야 했다. <br>
이럴 땐 type을 설정하여 데이터를 구분할 수 있다. state안에 type을 설정하고 넘겨줄 데이터를 담으면 된다. <br>
```jsx
//src/pages/Cart/Cart.jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const orderHandler = () => {
    navigate('/order', { state: { type: 'cart', items: checkedItems } });
  };

... 

//src/pages/Product/Product.jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const orderHandler = () => {
    navigate('/order', { state: { type: 'product', product } });
  };

...
//src/pages/Order/Order.jsx
import { useLocation } from 'react-router-dom';

const state = location.state;
   
useEffect(() => {
    async function fetchOrderItems() {
      if (state.type === 'product') {
      // 코드
      } else if (state.type === 'cart') {
        const cartItemIds = state.items;
       // 코드
    }
    fetchOrderItems();
  }, [cartItems, state]);
  
```
`const state = location.state`으로 두 페이지에서 넘어온 모든 값을 가져오고, type으로 구분한 각 데이터를 필요에 따라 수정해 주문 상품을 렌더링 해주었다. <br>

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 폴더 구조
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

