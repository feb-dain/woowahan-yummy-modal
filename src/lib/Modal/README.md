# Woowahan Yummy Modal Library (TS)

This is a reusable react modal library. You can change the direction of the modal animation(slide) and design the modal.

<br>
<br>

## Getting started

### ✅ 1. Install this library.

**npm**

```
npm i woowahan-yummy-modal
```

**yarn**

```
yarn add woowahan-yummy-modal
```

### ✅ 2. Import this library into your file.

```tsx
import Modal from 'woowahan-yummy-modal/dist/Modal';

import useModal from 'woowahan-yummy-modal/dist/useModal';

import ModalStateProvider from 'woowahan-yummy-modal/dist/ModalStateProvider';
```

### ✅ 3. Use it like this!

```tsx
// Example.tsx
const Example = () => {
  const { handleModalOpen, isModalOpen } = useModal();

  return (
    <>
      <button onClick={handleModalOpen}>Trigger</button>;
      {
        isModalOpen ? <p>Modal is open</p> : <p>Modal is close</p>;
      }
      <Modal
        modalStyle={modalStyle}
        buttonStyle={closeButtonStyle}
        closeButtonName="닫기"
        direction="bottom"
      >
        {/* Modal Contents (ReactNode) */}
      </Modal>
    </>
  );
};

// Parent.tsx
const Parent = () => {
  return (
    // You can change the initial state of the modal.
    // initialState={true} (Modal is Open. You can see the modal without the trigger button click).
    // initialState={false} (Modal is Close. You need to click the trigger button to see the modal).
    <ModalStateProvider initialState>
      <Example />
    </ModalStateProvider>
    // You need to set the component using the modal between ModalStateProvider.
  );
};
```

## ⭐ Props

### modalStyle (CSSProp)

You can design the modal.

> Example

```ts
const modalStyle = css`
  position: fixed;
  bottom: 0; // ❗ the modal will come here
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  max-width: 480px;
  width: 100%;
  height: 320px;
  padding: 42px 22px 98px;
  border-radius: 5px 5px 0 0;
  background: #fdfdfd;
  overflow: hidden;
`;
```

<br>

### buttonStyle (CSSProp)

You can design a close button.

> Example

```ts
const buttonStyle = css`
  width: 100%;
  position: fixed;
  bottom: 32px; // ❗ the position of the close button
  padding: 12px 0;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: #fefefe;
    color: #333;
    border: 1px solid #333;
    transform: scale(1.014);
  }

  &:active {
    bottom: 26px;
  }
`;
```

<br>

### closeButtonName (string)

You can specify the name of the close button.

<br>

### direction ("top" | "right" | "center" | "left" | "bottom" | "none")

You can change the direction of the modal animation (slide).<br>
⚠️ [Caution] mind the modal's location (modalStyle).

---

<br>
<br>

## Development Environment

- `React(create-react-app)`
- `TypeScript`
- `Styled-components`
- `Context-api`

## Browser Support

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome icon" />
    </td>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png" alt="Safari icon" />
    </td>
  </tr>
  <tr>
    <td align="center">
      Latest ✓
    </td>
    <td align="center">
      Latest ✓
    </td>
  </tr>
</table>
