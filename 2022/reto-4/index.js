const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => {
      return a.l - b.l;
    })
    .every((box, index) => {
      if (index === 0) return true;
      const lastBox = boxes[index - 1];

      return box.l > lastBox.l && box.w > lastBox.w && box.h > lastBox.h;
    });
}

console.log(fitsInOneBox(boxes));
