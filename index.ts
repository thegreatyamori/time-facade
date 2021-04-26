// Import stylesheets
import "./style.css";
import { Time } from "./facades";
import { DateTime } from "luxon";

const date1 = new Time("12-25-1995", "MM-DD-YYYY");
const date2 = new Time();
const fd = [
  {
    lib: date1.libName(),
    date: date1.format("MM-DD-YYYY"),
    year: date1.format("YYYY"),
    add: {
      day: 2,
      unit: "days",
      res: date1.add(2, "days").format("MM-DD-YYYY")
    },
    substract: {
      day: 2,
      unit: "months",
      res: date1.substract(2, "days").format("MM-DD-YYYY")
    }
  },
  {
    lib: date2.libName(),
    date: date2.format("MM-DD-YYYY"),
    year: date2.format("YYYY"),
    add: {
      day: 8,
      unit: "months",
      res: date1.add(8, "months").format("MM-DD-YYYY")
    },
    substract: {
      day: 2,
      unit: "years",
      res: date1.substract(2, "years").format("MM-DD-YYYY")
    }
  }
];

const printRes = fd
  .map(item => {
    return `<div>
    <p><b>Libreria:</b> ${item.lib}</p>
    <p><b>Fecha:</b> ${item.date}</p>
    <p><b>Año:</b> ${item.year}</p>
    <p><b>Sumar Fecha:</b> (${item.add.day} ${item.add.unit}) ${
      item.add.res
    }</p>
    <p><b>Restar Fecha:</b> (${item.substract.day} ${item.substract.unit}) ${
      item.substract.res
    }</p>
    <br>
  </div>`;
  })
  .join("");

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `
  <h1>TypeScript Time Facade</h1>
  ${printRes}
  ${DateTime.now()}
`;
