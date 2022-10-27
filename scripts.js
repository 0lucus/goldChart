document.querySelector(".days").addEventListener("keyup", update);
document.querySelector(".days").addEventListener("click", update);

function update() {
  const days = document.querySelector(".days").value;
  fetch(`https://api.nbp.pl/api/cenyzlota/last/${days}`)
    .then((res) => res.json())
    .then((data) => {
      const goldData = data
        .map((element,index) => `<div style="height: ${element.cena}px; ${data[index-1]?element.cena>data[index-1].cena ? 'background-color: green;"': 'background-color: red;"':'"'} ></div>`)
        .join("");
      const goldDays = data.reverse().map((element) => element.data);
      const goldPrice = data.reverse().map((element) => element.cena);
      document.querySelector(".gold-chart").innerHTML = goldData;
      document.querySelector(".value").innerHTML = `<b>${
        goldPrice[0]
      } PLN za gram</b> <br> ${goldDays[goldDays.length - 1]}`;
    });
}
