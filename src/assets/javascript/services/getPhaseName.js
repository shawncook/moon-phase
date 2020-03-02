export default function getPhaseName(phaseObj) {
  const phase = Math.round(phaseObj.phase * 4) / 4;
  if (0 == phase || 1 == phase) return 'New Moon, Waxing Crescent';
  if (0.25 == phase) return 'First Quarter, Waxing Gibbous';
  if (0.5 == phase) return 'Full Moon, Waning Gibbous';
  if (0.75 == phase) return 'Last Quarter, Waning Crescent';
};
