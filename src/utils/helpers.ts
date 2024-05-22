export const getTypeDetails = (type: string) => {
  const lowerType = type.toLowerCase();

  if (lowerType.includes('electric')) {
    return {borderColor: '#FFD700', emoji: '⚡️'};
  } else if (lowerType.includes('water')) {
    return {borderColor: '#6493EA', emoji: '💧'};
  } else if (lowerType.includes('fire')) {
    return {borderColor: '#FF5733', emoji: '🔥'};
  } else if (lowerType.includes('grass')) {
    return {borderColor: '#66CC66', emoji: '🌿'};
  } else {
    return {borderColor: '#A0A0A0', emoji: '❓'};
  }
};
