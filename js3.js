//key1
let mykey = document.createElement("ion-icon");
mykey.classList.add("mykey");
mykey.name = "key";
//////
//key2
let mykey2 = document.createElement("ion-icon");
mykey2.classList.add("mykey2");
mykey2.name = "key";
//////
//key3
let mykey3 = document.createElement("ion-icon");
mykey3.classList.add("mykey3");
mykey3.name = "key";
//////
addEventListener("load", () => {
  let way = [...document.querySelectorAll(".maze div")];
  way.map((e) => {
    if (!e.classList.contains("wall")) {
      e.classList.add("way");
    }
  });
  function setKey(key) {
    let wayDivs = document.querySelectorAll(".way");
    let rand = Math.floor(Math.random() * wayDivs.length);
    let randDiv = wayDivs[rand];
    randDiv.appendChild(key);
  }
  setKey(mykey);
  setKey(mykey2);
  setKey(mykey3);
});
