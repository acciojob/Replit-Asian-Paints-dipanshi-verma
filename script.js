document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks to transparent
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change color of the specific block
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});
