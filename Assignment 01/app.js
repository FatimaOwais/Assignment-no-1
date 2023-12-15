function getData() {
  var get = localStorage.getItem("cartData");
  console.log(JSON.parse(get));
}

getData();
