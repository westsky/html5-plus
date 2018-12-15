function plusReady(callback) {
  if (window.plus) {
    callback();
  } else {
    document.addEventListener(
      "plusready",
      function() {
        callback();
      },
      false
    );
  }
}
