function printNumber(num: number): void {
  console.log(num);
}

function calculateArea(width: number, height: number): number {
  if (width < 0 || height < 0) {
    throw new Error('Width and height must be non-negative.');
  }
  return width * height;
}

try {
  const area = calculateArea(10, -5);
  printNumber(area);
} catch (error) {
  console.error('An error occurred:', error.message);
}

//Example with positive numbers
try {
  const area2 = calculateArea(10, 5);
  printNumber(area2);
} catch (error) {
  console.error('An error occurred:', error.message);
} 