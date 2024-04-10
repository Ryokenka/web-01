import template from "../score/score.component.html";
import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";
import "./score.component.css";

export class ScoreComponent extends Component {
  constructor() {
    const params = parseUrl();
    super(template);
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  async init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
    await this.postScore(this.name, this.size, this.time);
    let scores = await this.fetchScores();

    let highscore = document.getElementById("highscore");
    scores.sort((a, b) => {
      if (a.size !== b.size) {
        return b.size - a.size;
      } else {
        return a.time - b.time;
      }
    });
    let cols = Object.keys(scores[0]);
    let head = document.createElement("tr");
    cols.forEach((item) => {
      let td = document.createElement("th");
      td.innerText = item;
      head.appendChild(td);
    });
    highscore.appendChild(head); // Append the header to the table
    let filter = document.getElementById("filter-select");

    filter.addEventListener("change", (event) => {
      let valfilter = parseInt(filter.value);
      let filteredScores = valfilter !== 0 ? scores.filter((score) => score.size === valfilter) : scores;
      highscore.innerHTML = ""; // Clear
      highscore.appendChild(head); // Re-append the header
      filteredScores.forEach((score) => {
        const row = document.createElement("tr");
        row.id = "score";
        row.innerHTML = `
            <td>${score.name}</td>
            <td>${score.size}</td>
            <td>${score.time}</td>
          `;
        highscore.appendChild(row);
      });
    });
    scores.forEach((score) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${score.name}</td>
            <td>${score.size}</td>
            <td>${score.time}</td>
          `;
      highscore.appendChild(row);
    });
  }

  async fetchScores() {
    const response = await fetch("http://localhost:8081/scores", {
      method: "GET",
    });
    const scores = await response.json();
    return scores;
  }

  async postScore(name, size, time) {
    await fetch("http://localhost:8081/scores", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, time: time, size: size }),
    });
  }
}

