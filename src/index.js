import interpolateHusl from './husl';
import interpolateHuslp from './huslp';

if (typeof window !== 'undefined') {
  if (window.d3 !== undefined) {
    window.d3.interpolateHusl = interpolateHusl;
    window.d3.interpolateHuslp = interpolateHuslp;
  }
}    

export { interpolateHusl as interpolateHusl };
export { interpolateHuslp as interpolateHuslp };
