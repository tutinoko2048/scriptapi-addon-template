const x = { x: 9, y: 1, z: 0 };

const z = Object.values(x).map((y) => y * 2);
console.log(x, z);
