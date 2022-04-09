const body = document.querySelector("body");
const main = document.createElement("main");
const sectionOne = document.createElement("section");
sectionOne.classList.add("one");
const sectionTwo = document.createElement("section");
sectionTwo.classList.add("two");
const sectionThree = document.createElement("section");
sectionThree.classList.add("three");

body.appendChild(main);
main.append(sectionOne, sectionTwo, sectionThree);

const coin = {
    state: 0,

    flip: function (min, max) {
        if (this.state = Math.floor(Math.random() * (min - max) + max) % 2 !== 0) {
            this.state = 1;
        } else {
            this.state = 0;
        }

        return this.state;
    },

    toString: function () {
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
    },

    toHTML: function () {
        const image = document.createElement("img");

        if (this.state === 0) {
            image.setAttribute("src", "./images/heads.png");
            image.setAttribute("alt", "Heads");
        } else {
            image.setAttribute("src", "./images/tails.png");
            image.setAttribute("alt", "Tails");
        }

        return image;
    }
}
const arrCoin = [];

let count = 0;
let maxValue = 20;

for (let index = 0; index < maxValue; index++) {
    arrCoin.push({
        viewFlip: coin.flip(0, 99),
        viewText: coin.toString(),
        viewImage: coin.toHTML()
    });
}

const myInterval = setInterval(() => {
    let zero = 0;
    let um = 0;

    if (count === arrCoin.length) {
        clearInterval(myInterval);
        sectionOne.innerText = "";

        const paragraphHeads = document.createElement("p");
        const paragraphTails = document.createElement("p");

        arrCoin.filter(({
            viewFlip
        }) => viewFlip === 0 ? zero++ : um++)

        paragraphHeads.innerText = `Heads : ${zero}`;
        paragraphTails.innerText = `Tails : ${um}`;

        sectionOne.append(paragraphHeads, paragraphTails);
    } else {
        setTimeout(() => {
            sectionOne.innerText = "";

            const paragraphCoin = document.createElement("p");
            paragraphCoin.innerText = `${arrCoin[count].viewText}`;

            sectionOne.append(arrCoin[count].viewImage, paragraphCoin);
        }, 750);

        sectionOne.innerText = "";
    }

    count++;
}, 1000);

function display20Flips() {
    let zero = 0;
    let um = 0;
    const results = [];

    for (let index = 0; index < 20; index++) {
        if (coin.flip(0, 99) === 1) {
            results.push(coin.toString());
        } else {
            results.push(coin.toString());
        }
    }

    const displayFlips = setInterval(() => {
        if (count < results.length) {
            const paragraph = document.createElement("p");
            paragraph.innerText = results[count];
            setTimeout(() => {
                sectionTwo.innerText = "";
                sectionTwo.append(paragraph);
            }, 1000);
        } else {
            clearInterval(displayFlips);
            sectionTwo.innerText = "";

            const paragraphHeads = document.createElement("p");
            const paragraphTails = document.createElement("p");
            results.filter((element) => element === "Heads" ? zero++ : um++)

            paragraphHeads.innerText = `Heads : ${zero}`;
            paragraphTails.innerText = `Tails : ${um}`;

            sectionTwo.append(paragraphHeads, paragraphTails);
        }

        count++;
    }, 1500);

    return results;
}
// display20Flips();

function display20Images() {
    let zero = 0;
    let um = 0;
    const results = [];

    for (let index = 0; index < 20; index++) {
        if (coin.flip(0, 99) === 1) {
            results.push(coin.toHTML());
        } else {
            results.push(coin.toHTML());
        }
    }

    const myInterval = setInterval(() => {
        if (count < results.length) {
            setTimeout(() => {
                sectionThree.innerText = "";

                const paragraph = document.createElement("p");
                paragraph.innerText = results[count];

                sectionThree.append(paragraph);
            }, 1000);
        } else {
            clearInterval(myInterval);
            sectionThree.innerText = "";

            const paragraphHeads = document.createElement("p");
            const paragraphTails = document.createElement("p");
            results.filter((element) => element.alt === "Heads" ? zero++ : um++)

            paragraphHeads.innerText = `Heads : ${zero}`;
            paragraphTails.innerText = `Tails : ${um}`;

            sectionThree.append(paragraphHeads, paragraphTails);
        }

        count++;
    }, 1500);

    return results;
}
// display20Images();