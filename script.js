//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks first
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change color of selected block if ID is valid (1-9)
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", () => {
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});
