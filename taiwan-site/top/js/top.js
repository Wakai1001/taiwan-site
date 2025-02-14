'use strict';

const btn = document.querySelectorAll('.btn');

btn.forEach(function (item, index) {
  item.onclick = function () {
    document.getElementById('photo').src = this.dataset.image;
  }
});
