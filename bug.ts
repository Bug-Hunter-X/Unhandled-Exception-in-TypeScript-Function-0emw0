function printNumber(num: number): void {
  console.log(num);
}

function calculateArea(width: number, height: number): number {
  if (width < 0 || height < 0) {
    throw new Error('Width and height must be non-negative.');
  }
  return width * height;
}

const area = calculateArea(10, -5); //Error case
printNumber(area);