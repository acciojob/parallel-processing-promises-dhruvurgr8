function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
    img.src = url;
  });
}

function displayImages(images) {
  output.innerHTML = '';
  images.forEach(img => {
    output.appendChild(img);
  });
}

btn.addEventListener('click', () => {
  const downloadPromises = images.map(image => downloadImage(image.url));

  Promise.all(downloadPromises)
    .then(images => {
      displayImages(images);
    })
    .catch(error => {
      console.error(error.message);
    });
}); 