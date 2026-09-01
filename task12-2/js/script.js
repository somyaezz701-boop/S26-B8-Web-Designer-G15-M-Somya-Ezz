var btn = document.getElementById('changeImg');
btn.addEventListener('click', (e) => {
  console.log(e.target.previousElementSibling.src);
  console.log(btn.previousElementSibling);
  var myImg = e.target.previousElementSibling;
  if (myImg.src.includes('jared')) {
    myImg.src = 'images/katherine-hanlon-mod2s3-qFOc-unsplash 1.png';
  } else {
    myImg.src = 'images/jared-rice-xce530fBHrk-unsplash 1.png';
  }
});