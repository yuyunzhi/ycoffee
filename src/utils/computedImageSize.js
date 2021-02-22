export const getImageSize = (pageUrl, callback) => {
  let img = new Image();
  img.src = pageUrl;
  console.log("complete", img.complete);
  if (img.complete) {
    console.log(img.width, img.height);
    callback(img.width, img.height);
  } else {
    img.onload = function () {
      console.log(img.width, img.height);
      callback(img.width, img.height);
      img.onload = null;
    };
  }
};
