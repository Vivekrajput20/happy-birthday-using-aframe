import './index.css';

import config from './config.json';
import { flamesArray, videosObj } from './constants';
import { getFlameEntity, getTextEntity, getVideoEntity } from './utils';

// eslint-disable-next-line no-undef
AFRAME.registerComponent('birthday-party', {
  init() {
    const sceneEl = document.querySelector('a-scene');
    const cakeEl = sceneEl.querySelector('#cake-parent');
    flamesArray.forEach((flame) => {
      const flameEntity = getFlameEntity(flame);
      cakeEl.appendChild(flameEntity);
      return flame;
    });

    const tvContainerEl = sceneEl.querySelector('#tv-container');

    Object.keys(videosObj).forEach((key) => {
      videosObj[key] = { ...videosObj[key], ...config.videosObj[key] };
    });

    Object.keys(videosObj).forEach((key) => {
      const videoEntity = getVideoEntity(videosObj[key], `video-${key}`);
      tvContainerEl.appendChild(videoEntity);
    });

    const textEl = getTextEntity(config.name);
    sceneEl.appendChild(textEl);
  },
});
