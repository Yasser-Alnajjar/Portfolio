let controlButtonsSpan = document.querySelector(".control-buttons span");
controlButtonsSpan.onclick = () => {
  let yourName = prompt("Whats Your Name ?");
  if (yourName == null || yourName == "") {
    document.querySelector(".info-container .name span ").innerHTML = "Player";
    document.querySelector(".info h3 span ").innerHTML = "Player";
  } else {
    document.querySelector(".info-container .name span ").innerHTML = yourName;
    document.querySelector(".info h3 span ").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove();
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});

function flipBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");

  let allFlipedBlocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );
  if (allFlipedBlocks.length === 2) {
    // console.log("2 now");
    stopClicking();
    checkMatchedBlocks(allFlipedBlocks[0], allFlipedBlocks[1]);
  }
}

function stopClicking() {
  blocksContainer.classList.add("no-clicking");
  setTimeout(() => {
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}

function checkMatchedBlocks(first, seconed) {
  let triesElement = document.querySelector(".tries span");
  console.log(triesElement);

  if (first.dataset.brands === seconed.dataset.brands) {
    first.classList.remove("is-flipped");
    seconed.classList.remove("is-flipped");

    first.classList.add("has-matched");
    seconed.classList.add("has-matched");
    document.getElementById("sucsses").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      first.classList.remove("is-flipped");
      seconed.classList.remove("is-flipped");
    }, duration);
    document.getElementById("fail").play();
  }
}
function shuffle(array) {
  let current = array.length;
  let temp;
  let random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
