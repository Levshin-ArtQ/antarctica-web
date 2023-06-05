
function elementFromHtml(html){
  const template = document.createElement("tariff-card");

  template.innerText = html.trim();
  return template.content
}

const cardBuilder = function cardBuilder(type, tariff) {
  let color = "red";
  let card_pic;
  let card_logo;
  let slogan;
  let options = [];
  switch (tariff) {
    case "PRO" :
      color = "red";
      card_pic = "img/pro_image.jpg";
      card_logo = "img/pro_logo_image.svg";
      slogan = "All in one";
      options = ["kayaking", "hiking with instructors", "camping"];
      break;
    case "ADV":
      color = "#F9A54D";
      card_pic = "img/Antarctica highest point.jpg";
      card_logo = "img/adv_logo_image.svg";
      slogan = "Hiking";
      options = ["station excursion", "meeting with animals", "camping"];
      break;
    case "START":
      color = "#FFD177";
      card_pic = "img/antarctic_station_close.jpg";
      card_logo = "img/start_logo_image.svg";
      slogan = "Sightseeing"
      options = ["hiking training", "glacier landing", "meeting with animals"];
      break;
    case "BEGIN":
      color = "#00B529";
      card_pic = "img/beginner_pic.jpg";
      card_logo = "img/begin_logo_image.svg";
      slogan = "Ship Voyage";
      options = ["ship attractions", "antarctic photoshoot", "glacier landing"];
      break;
  }

  return `
            <div class="card-top d-flex justify-content-between">
              <img src="${card_pic}" alt="" class="card-pic${type} square">
              <div class="tariff-sign d-flex flex-column text-center justify-content-between">
                <img src="${card_logo}" alt="" class="tariff-logo${type}">
                <h4 class="tariff-stext header-${type}" style="color: ${color}">${tariff}</h4>
              </div>
            </div>
            <div class="tariff-card__header d-flex justify-content-between">
              <h4 class="slogan header-${type}">${slogan}</h4>
              <h4 style="color: ${color}" class="cost header-${type}">1999 $</h4>
            </div>
            <div style="background-color: ${color}" class="tariff delimiter-card"></div>
            <div class="tariff-content">
              <span>
                This tour includes:
              </span>
              <ul style="margin-bottom: 0">
                <li>${options[0]}</li>
                <li>${options[1]}</li>
                <li>${options[2]}</li>
              </ul>
              <span>
              * book in advance
              </span>
            </div>
            <button class="details-button">More details</button>

            `;
}

const types = ["PRO", "ADV", "START", "BEGIN"];
const costs = ["1999$", "1699$", "1599$", "1399$"];
const cardHoldersCarousel = document.querySelectorAll(".tariff-card_carousel");
for (let i = 0; i < cardHoldersCarousel.length; ++i) {
  cardHoldersCarousel[i].innerHTML += cardBuilder("", types[i%4]);
}
const cardHolder = document.querySelectorAll(".tariff-card__flat");
for (let i = 0; i < cardHoldersCarousel.length; ++i) {
  cardHolder[i].innerHTML += cardBuilder("flat", types[i%4]);
}

