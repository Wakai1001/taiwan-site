'use strict'

//ローディング要素
const loading = document.querySelector('.loading');

//ページが読み込み終わったら
window.addEventListener('load', () => {
  //1秒後に
  setTimeout(function () {
    //ローディング要素にhideクラスを付与
    loading.classList.add('hide');
  }, 3000);
});

