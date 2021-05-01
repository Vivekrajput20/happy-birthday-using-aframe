export const getFlameEntity = (flame) => {
  const flameEl = document.createElement('a-entity');
  flameEl.setAttribute('obj-model', {
    mtl: '#flame-mtl',
    obj: '#flame-obj',
  });
  flameEl.setAttribute('position', flame.position);
  flameEl.setAttribute('material', '');
  flameEl.setAttribute('animation__flame', {
    dir: 'alternate',
    from: flame.from,
    to: flame.to,
    property: 'rotation',
    loop: 1000,
    duration: 800,
  });
  flameEl.setAttribute('scale', { x: 1, y: 1, z: 1 });
  return flameEl;
};
export const getVideoEntity = (video, id) => {
  const parentEl = document.createElement('a-entity');
  parentEl.setAttribute('position', video.position);
  parentEl.setAttribute('rotation', video.rotation);

  const televisionEl = document.createElement('a-entity');
  televisionEl.setAttribute('material', '');
  televisionEl.setAttribute('scale', { x: 3, y: 3, z: 1 });
  televisionEl.setAttribute('obj-model', { mtl: '#tv-mtl', obj: '#tv-obj' });

  const assetContainer = document.querySelector('#asset-container');
  const assetEl = document.createElement('video');
  assetEl.setAttribute('id', id);
  assetEl.setAttribute('src', video.src);
  assetContainer.appendChild(assetEl);

  const videoEl = document.createElement('a-video');
  videoEl.setAttribute('src', `#${id}`);
  videoEl.setAttribute('geometry', { width: '5.8', height: '3.4' });
  videoEl.setAttribute('position', '-0.004 2.19069 -0.285');
  videoEl.addEventListener('click', (event) => {
    const videoInstance = document.querySelector(event.target.getAttribute('src'));
    if (videoInstance.paused) videoInstance.play();
    else videoInstance.pause();
  });
  parentEl.appendChild(televisionEl);
  parentEl.appendChild(videoEl);
  return parentEl;
};

export const getTextEntity = (text) => {
  const textEl = document.createElement('a-text');
  textEl.setAttribute('value', text);
  textEl.setAttribute('color', '#fff');
  textEl.setAttribute('width', '20');
  textEl.setAttribute('align', 'center');
  textEl.setAttribute('position', '0 3.8 -10');
  return textEl;
};
