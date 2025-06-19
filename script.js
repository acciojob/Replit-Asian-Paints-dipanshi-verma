document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change color of selected block
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
