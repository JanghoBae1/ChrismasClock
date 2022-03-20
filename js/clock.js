const mas = document.querySelector("h1#mas");

function masDay() {
  const masTime = new Date("2022-12-25");
  const todayTime = new Date();
  const chrismas = masTime - todayTime;

  const masDay = Math.floor(chrismas / (1000 * 60 * 60 * 24));
  const masHour = Math.floor((chrismas / (1000 * 60 * 60)) % 24);
  const masMin = Math.floor((chrismas / (1000 * 60)) % 60);
  const masSec = Math.floor((chrismas / 1000) % 60);

  mas.innerText = `${masDay}d ${masHour}h ${masMin}m ${masSec}s`;
}
masDay();
setInterval(masDay, 1000);
