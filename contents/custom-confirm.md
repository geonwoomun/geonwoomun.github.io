---
date: '2022-04-19'
title: 'Next js에서 커스텀 confirm 만들기'
categories: ['Web']
summary: '커스텀 confirm을 만들어 보았던 경험을 남긴다. 뒤로가기 시에 custom한 confirm을 띄우고 확인시에 뒤로가게 구현하였다.'
thumbnail: './assets/custom-confirm.png'
---

Custom Confirm을 구현할 일이 있었다. 기존에는 `window.confirm`을 사용하고 있었는데, 해당 부분에 style을 주길 원했다.
기존 window.confirm에 style이 적용될리 만무했고, custom 한 confirm 기능을 구현해야했다.

기능을 구현하기 위해서, `useConfirm.ts` 와 `Confirm.tsx` 를 구현했다. Confirm을 보이게 하고 말고의 값은 모든 영역에서 사용할 수 있게 redux를 활용하였는데 코드가 기니 생략한다. 알아서 다들 잘 사용할 것이라 생각한다.

**_useConfirm.ts_**

```ts
import { useDispatch, useSelector } from 'react-redux';

import { actions, RootState } from '~/modules';

let resolveCallback: (value: boolean) => void; //useConfirm을 confirm을 쓴 곳과 다른 곳에서 사용해도 resolve 할 수 있다.

export const useConfirm = () => {
  const confirmState = useSelector((state: RootState) => state.confirm);
  const dispatch = useDispatch();

  const confirm = (text: string) => {
    // 여기서 text 활용하여 confirm 창이 열리게 코드 작성
    dispatch(actions.confirm.showConfirm(text));

    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  const closeConfirm = () => {
    // Confirm 창이 닫히게 작성
    dispatch(actions.confirm.hideConfirm());
  };

  const onConfirm = () => {
    closeConfirm();
    resolveCallback?.(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback?.(false);
  };

  return { confirm, onConfirm, onCancel, confirmState };
};
```

**_Confirm.tsx_**

```tsx
import { Dialog } from '~/components'; // 2개의 버튼이 나오는 모달 컴포넌트
import React from 'react';

import { useConfirm } from '~/shared/hooks/useConfirm';

export const ConfirmDialog: React.VFC = () => {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  return (
    <Dialog
      isShown={confirmState.isShow}
      description={confirmState.text}
      descriptionPosition="center"
      onClose={onCancel}
      onSuccess={onConfirm}
      cancelText="취소"
      successText="확인"
    />
  );
};
```

사용하는 곳에서는 이런 느낌으로 적어주었다.

**_Test.tsx_**

```tsx
// ~~
// form이 바뀌었는지 안 바뀌었는지 확인하는 isDirty 변수 존재
const router = useRouter();
const { confirm } = useConfirm();
const routeValidateCheck = useRef(false);

//~~~

useEffect(() => {
  const changeRouteAfterConfirm = async (url: string) => {
    const confirmationMessage =
      '저장되지 않은 내용이 있습니다. 페이지를 이탈 하시겠습니까?';

    const isConfirm = await confirm(confirmationMessage);

    if (!isConfirm) {
      return;
    }

    routeValidateCheck.current = true;
    router.push(url);
  };

  const beforeRouteHandler = (url: string) => {
    if (!isDirty || routeValidateCheck.current) {
      return;
    }

    router.events.emit('routeChangeError');
    changeRouteAfterConfirm(url);
    throw `Route Abort`;
  };

  router.events.on('routeChangeStart', beforeRouteHandler);

  return () => {
    router.events.off('routeChangeStart', beforeRouteHandler);
  };
}, [isDirty]);
```

Nextjs 에는 route에 events를 등록할 수 있다. https://nextjs.org/docs/api-reference/next/router
routeChangeStart 를 할 때, `beforeRouteHandler` 함수를 실행 시킨다. `isDirty`는 해당 form의 내용을 수정했는지 안 했는지의 여부이며, 수정을 하지 않았을 경우에는 그냥 router가 이동하게된다.
beforeRouteHandler의 callback 함수는 async 일 경우 제대로 동작하지 않았다. 그래서 `async changeRouteAfterConfirm` 함수를 만들어 실행시켜주었다. `routeChangeError` 이벤트 와 throw 를 던져주면 routeChange가 취소 된다.

`changeRouteAfterConfirm` 함수 안에서 confirm으로 확인 여부를 물은 후, true 일경우에 가고자 했던 곳으로 router.push를 한다. `routeValidateCheck.current = true` 를 하는 이유는
하지 않을 경우 `router.push` 에서 또 걸려서 무한 반복하게 되기 때문이다.

이렇게 해서 route가 변화하는 것을 막고, 유저가 확인을 눌렀을 경우 제대로 route하고, 취소일 경우에는 그대로 유지할 수 있게 하였다.
