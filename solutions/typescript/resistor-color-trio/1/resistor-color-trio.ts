export function decodedResistorValue(values: string[]) : string {
  const zeroQty = COLORS.indexOf(values[2]);
  
  const rawNumber = Number(`${COLORS.indexOf(values[0])}${COLORS.indexOf(values[1])}`) * Math.pow(10, zeroQty);
  
  let formattedNumber = rawNumber;
  let ohmsText = 'ohms';

  if(rawNumber >= METRIC_PREFIX_THRESHOLDS.kilo){
    if(rawNumber % METRIC_PREFIX_THRESHOLDS.giga === 0) {
      formattedNumber = rawNumber / METRIC_PREFIX_THRESHOLDS.giga;
      ohmsText = 'gigaohms';
    } else if(rawNumber % METRIC_PREFIX_THRESHOLDS.mega === 0){
      formattedNumber = rawNumber / METRIC_PREFIX_THRESHOLDS.mega;
      ohmsText = 'megaohms';
    } else if(rawNumber % METRIC_PREFIX_THRESHOLDS.kilo === 0) {
      formattedNumber = rawNumber / METRIC_PREFIX_THRESHOLDS.kilo;
      ohmsText = 'kiloohms';
    }
  }

  return `${formattedNumber} ${ohmsText}`;
}

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const METRIC_PREFIX_THRESHOLDS = {kilo: Math.pow(10, 3), mega: Math.pow(10, 6), giga: Math.pow(10, 9)};