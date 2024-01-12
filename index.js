var ss15 = ["Brew House", "一楼", "Jibril", "Oregi", "Boran", "Gold Chili"];
var opposite = [
  "Uncle Soon",
  "明记",
  "Pan Mee",
  "MC Curry House",
  "鸭饭",
  "明记隔壁",
  "Uncle Soon 隔壁隔壁",
  "Thong Kee",
];
var all = [...ss15, ...opposite];

var result_ss15 = () => {
  var rng = Math.floor(Math.random() * ss15.length);
  var result = ss15[rng];
  document.getElementById("result").innerHTML = result;
};

var result_opposite = () => {
  var rng = Math.floor(Math.random() * opposite.length);
  var result = opposite[rng];
  document.getElementById("result").innerHTML = result;
};

var result_all = () => {
  var rng = Math.floor(Math.random() * all.length);
  var result = all[rng];
  document.getElementById("result").innerHTML = result;
};

console.log(result_opposite);
