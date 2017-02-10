"use strict"

var alert_message = function () {
  
  function attention(message, coord = {top: 10, left: 1400, type: "px"}) {

    var del = document.getElementsByClassName('alert')[0];

    del.children[0].innerText = message;

    del.classList.remove('devisible');

    del.style.top = coord.top+coord.type;
    del.style.left = coord.left+coord.type;

    setTimeout(function () {
      del.classList.add('devisible');
      del.children[0].innerText = '';
    }, 1600);

  }

  return {
    attention: attention
  }

}();