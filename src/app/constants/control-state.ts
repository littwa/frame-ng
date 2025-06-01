import { EHandler, IStateControl, IStateNavControl, IStateNavControlList } from 'src/app/interfaces/common.interfaces';

// export const ControlStateD: { [key: string]: IStateControl[] } = {
//   initial: [
//     { icon: 'home', handler: EHandler.HandlerHome },
//     { icon: 'code', handler: EHandler.HandlerHome },
//     {
//       icon: 'apps',
//       handler: EHandler.HandlerOpenNavMenu,
//     },
//     { icon: 'code', handler: EHandler.HandlerHome },
//     { icon: 'arrow_back', handler: EHandler.HandlerBack },
//   ],
//   screenshotsLists: [
//     { icon: 'home', handler: EHandler.HandlerHome },
//     { icon: 'code', handler: EHandler.HandlerHome },
//     {
//       icon: 'apps',
//       handler: EHandler.HandlerOpenNavMenu,
//     },
//     { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
//     { icon: 'arrow_back', handler: EHandler.HandlerBackToScreenshotsMenu },
//   ],
// };

export const initNavState: IStateNavControl = {
  btn1: { icon: 'home', handler: EHandler.HandlerHome },
  btn2: { icon: 'code', handler: EHandler.HandlerHome },
  btn3: { icon: 'apps', handler: EHandler.HandlerOpenNavMenu },
  btn4: { icon: 'code', handler: EHandler.HandlerHome },
  btn5: { icon: 'arrow_back', handler: EHandler.HandlerBack },
};

// export const navScreenshotsLists = initNavState.toSpliced(1, 0, {
//   icon: 'add_box',
//   handler: EHandler.HandlerCreateScreenshotsList,
// });

//   [
//
//   { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
//   { icon: 'arrow_back', handler: EHandler.HandlerBackToScreenshotsMenu },
// ]

export const ControlState: IStateNavControlList = {
  initial: initNavState,
  screenshotsMenu: {
    ...initNavState,
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToMainMenu },
  },
  screenshotsLists: {
    ...initNavState,
    btn4: { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToScreenshotsMenu },
  },
  screenshotsList: {
    ...(({ btn2, btn4, ...rest }) => rest)(initNavState), // del btn2,4 and add rest initNavState
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToScreenshotsLists },
  },
  // screenshotsList222: (({ btn5, ...rest }) => ({
  //   ...rest,
  //   btn4: { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
  // }))(initNavState), // del btn5 and add rest values
};
