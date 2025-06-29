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
  regardHome: {
    btn1: { icon: 'table_chart', handler: EHandler.HandlerHomeRegard, inactive: true },
    btn2: { icon: 'flash_on', handler: EHandler.HandlerListRegard },
    btn3: { icon: 'grade', handler: EHandler.HandlerFavoriteRegard },
    btn4: { icon: 'insert_chart_outlined', handler: EHandler.HandlerStatisticsRegard },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToMainMenu },
  },
  regardList: {
    btn1: { icon: 'table_chart', handler: EHandler.HandlerHomeRegard },
    btn2: { icon: 'flash_on', handler: EHandler.HandlerListRegard, inactive: true },
    btn3: { icon: 'grade', handler: EHandler.HandlerFavoriteRegard },
    btn4: { icon: 'insert_chart_outlined', handler: EHandler.HandlerStatisticsRegard },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToMainMenu },
  },
  regardFavorite: {
    btn1: { icon: 'table_chart', handler: EHandler.HandlerHomeRegard },
    btn2: { icon: 'flash_on', handler: EHandler.HandlerListRegard },
    btn3: { icon: 'grade', handler: EHandler.HandlerFavoriteRegard, inactive: true },
    btn4: { icon: 'insert_chart_outlined', handler: EHandler.HandlerStatisticsRegard },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToMainMenu },
  },
  regardStatistics: {
    btn1: { icon: 'table_chart', handler: EHandler.HandlerHomeRegard },
    btn2: { icon: 'flash_on', handler: EHandler.HandlerListRegard },
    btn3: { icon: 'grade', handler: EHandler.HandlerFavoriteRegard },
    btn4: { icon: 'insert_chart_outlined', handler: EHandler.HandlerStatisticsRegard, inactive: true },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToMainMenu },
  },
  regardItemized: {
    ...initNavState,
    btn2: { icon: 'sort', handler: EHandler.HandlerSortTextsList },
    btn3: { icon: 'add_to_photos', handler: EHandler.HandlerAddTextToRegard },
    btn4: { icon: 'play_arrow', handler: EHandler.HandlerPlayQualify },
    btn5: { icon: 'arrow_back', handler: EHandler.HandlerBackToRegardList },
  },
  // screenshotsList222: (({ btn5, ...rest }) => ({
  //   ...rest,
  //   btn4: { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
  // }))(initNavState), // del btn5 and add rest values
};
// assessment

//  table_chart

// flash_on

// casino

// star_border
// stars
// grade play_circle_outline ondemand_video play_arrow
// playlist_add queue queue_play_next add add_box add_circle add_circle_outline create add_to_photos
// control_point_duplicate control_point
// swap_vert sort import_export
