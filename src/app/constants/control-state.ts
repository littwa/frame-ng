import { EHandler, IStateControl } from 'src/app/interfaces/common.interfaces';

export const ControlState: { [key: string]: IStateControl[] } = {
  initial: [
    { icon: 'home', handler: EHandler.HandlerHome },
    { icon: 'code', handler: EHandler.HandlerHome },
    {
      icon: 'apps',
      handler: EHandler.HandlerOpenNavMenu,
    },
    { icon: 'code', handler: EHandler.HandlerHome },
    { icon: 'arrow_back', handler: EHandler.HandlerBack },
  ],
  screenshotsLists: [
    { icon: 'home', handler: EHandler.HandlerHome },
    { icon: 'code', handler: EHandler.HandlerHome },
    {
      icon: 'apps',
      handler: EHandler.HandlerOpenNavMenu,
    },
    { icon: 'add_box', handler: EHandler.HandlerCreateScreenshotsList },
    { icon: 'arrow_back', handler: EHandler.HandlerBackToScreenshotsMenu },
  ],
};
