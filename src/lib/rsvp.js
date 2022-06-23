const dashRSVP = {
  playing: false,
  position: 0,
  wpm: 200,
  init: function (displayId) {
    this.frame = document.getElementById(displayId);
    if (this.frame.hasChildNodes()) this.frame.innerHTML = "";
    if (!!this.container) this.container.remove();
    this.position = 0;

    this.container = document.createElement("div");
    this.container.classList.add("RSVP-container");

    const topBorder = document.createElement("div")
    topBorder.classList.add("RSVP-border", "RSVP-border-top")

    const bottomBorder = document.createElement("div")
    bottomBorder.classList.add("RSVP-border", "RSVP-border-bottom")

    addNotchDivs(topBorder)
    addNotchDivs(bottomBorder)

    const wordContainer = document.createElement("div");
    wordContainer.classList.add("RSVP-word")

    this.substrings = {
      left: document.createElement("div"),
      mid: document.createElement("div"),
      right: document.createElement("div")
    }
    this.substrings.left.classList.add("RSVP-left");
    this.substrings.mid.classList.add("RSVP-mid");
    this.substrings.right.classList.add("RSVP-right");

    wordContainer.append(this.substrings.left, this.substrings.mid, this.substrings.right);

    this.container.append(topBorder, wordContainer, bottomBorder);
    this.frame.append(this.container);
  },
  updateWord: function() {
    const word = this.textArray[this.position];
    const pivot = Math.ceil((word.length - 1) * .25);

    this.substrings.left.innerText = word.substring(0, pivot);
    this.substrings.mid.innerText = word.substring(pivot, pivot + 1);
    this.substrings.right.innerText = word.substring(pivot + 1);
  },
  play: async function (inputText) {
    if (this.playing || (!inputText && !this.textString)) return;
    if (!!inputText && (inputText !== this.textString)) {
      this.textString = inputText;
      this.textArray = this.textString.split(/\s+/gm);
      this.position = 0;
    }
    this.playing = true

    let basePeriod = 60000 / this.wpm; // Convert words-per-minute to milliseconds-per-word

    while (this.playing && this.position < this.textArray.length) {
      // const word = this.textArray[this.position];
      // const pivot = Math.ceil((word.length - 1) * .25);

      // this.substrings.left.innerText = word.substring(0, pivot);
      // this.substrings.mid.innerText = word.substring(pivot, pivot + 1);
      // this.substrings.right.innerText = word.substring(pivot + 1);
      this.updateWord();

      await this.wait(basePeriod);
      this.position++;
    }
    if (this.position >= this.textArray.length) {
      this.playing = false;
      this.position = 0;
    }
  },
  pause: function () { this.playing = false; },
  restart: function () {
    this.position = 0;
    this.playing = false;
    this.updateWord();
    this.position++;
  },
  reset: function () {
    this.playing = false;
    this.textString = null;
    this.textArray = null;
    this.position = 0;
  },
  remove: function () { this.container.remove(); },
  wait: ms => new Promise(resolve => setTimeout(resolve, ms))
}

function addNotchDivs(parent) {
  const leftDiv = document.createElement("div")
  leftDiv.classList.add("RSVP-left")
  const notchDiv = document.createElement("div")
  notchDiv.classList.add("RSVP-notch")
  const rightDiv = document.createElement("div")
  rightDiv.classList.add("RSVP-right")

  parent.append(
    leftDiv,
    notchDiv,
    rightDiv
  )
}

export default dashRSVP

