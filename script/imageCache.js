let totalImageCache = {};
let cacheLoadingCounterMax = 0;
let cacheLoadingCounter = 0; //count of currently loaded imagearrays in imagepatharrays



let allImagesPaths = [
  pufferImagePaths,
  staticLevelObjectImagePaths,
  jellyImagePaths,
  bossImagePaths,
  collectablesImagePaths,
  characterImagePaths
]


determineCacheLoadingMaxCount();

function determineCacheLoadingMaxCount() {
  allImagesPaths.forEach(singleList => {
    cacheLoadingCounterMax += singleList.length;
  });
}

const loadSingleImage = path => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
    img.src = path
    img.onload = () => {
      resolve(img)
    }
    img.onerror = e => {
      reject(e)
    }
  })
}

async function loadAllImagesToCache() {
  for (let i = 0; i < allImagesPaths.length; i++) {
    await loadImagesListToCache(allImagesPaths[i]);
  }
}

async function loadImagesListToCache(listList) {

  for (let i = 0; i < listList.length; i++) {
    const singleList = listList[i];
    for (let j = 0; j < singleList.length; j++) {
      const path = singleList[j];
      try {
        const img = await loadSingleImage(path);
        totalImageCache[path] = img;
      } catch (e) {
        console.log(path)
        console.log(e)
      }
    }
    increaseCacheLoadingCounter();
  }
}

function increaseCacheLoadingCounter() {
  cacheLoadingCounter++; 
  let percent = (cacheLoadingCounter / cacheLoadingCounterMax).toFixed(2) * 100;
  document.getElementById('loading_bar').style.left = `-${100 - percent}%`;
  if (percent == 100) {
    document.getElementById('start_screen').innerHTML = startBtn;
  }
}
