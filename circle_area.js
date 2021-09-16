const radius = process.argv.slice(2);

function area_calculator(r) {
  area = Math.PI * (2 * r);
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
}

area_calculator(radius[0] * 1);
