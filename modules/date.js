import { DateTime } from "./luxon.js";

const dateTime = () => {
  const currentTime = DateTime.now().toFormat("DD tt z (ZZZZ)");
  document.getElementById("date").innerHTML = `${currentTime}`;
};

export default dateTime;
