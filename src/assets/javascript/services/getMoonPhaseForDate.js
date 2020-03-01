// Original Snippet: https://gist.github.com/endel/dfe6bb2fbe679781948c
export default function getMoonPhaseForDate(year, month, day) {
  let c = 0;
  let e = 0;
  let jd = 0;
  let b = 0;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; // jd is total days elapsed
  jd /= 29.5305882; // divide by the moon cycle
  b = parseInt(jd); // int(jd) -> b, take integer part of jd
  jd -= b; // subtract integer part to leave fractional part of original jd
  b = Math.round(jd * 8); // scale fraction from 0-8 and round
  if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

  const phaseRaw = jd.toFixed(2);

  switch (b) {
    case 0:
      return {
        label: 'New Moon',
        value: phaseRaw,
      };
      break;
    case 1:
      return {
        label: 'Waxing Crescent',
        value: phaseRaw,
      };
      break;
    case 2:
      return {
        label: 'Quarter Moon',
        value: phaseRaw,
      };
      break;
    case 3:
      return {
        label: 'Waxing Gibbous',
        value: phaseRaw,
      };
      break;
    case 4:
      return {
        label: 'Full Moon',
        value: phaseRaw,
      };
      break;
    case 5:
      return {
        label: 'Waning Gibbous',
        value: phaseRaw,
      };
      break;
    case 6:
      return {
        label: 'Last Quarter Moon',
        value: phaseRaw,
      };
      break;
    case 7:
      return {
        label: 'Waning Crescent',
        value: phaseRaw,
      };
      break;
  }
};
