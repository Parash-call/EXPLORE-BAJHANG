export const formatCurrency = (amount) => {
  return `NPR ${amount?.toLocaleString()}`;
};

export const truncateText = (text, maxLength = 120) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const getDifficultyColor = (difficulty) => {
  const colors = { easy: '#27ae60', moderate: '#f39c12', hard: '#e74c3c', very_hard: '#922b21' };
  return colors[difficulty] || '#888';
};

export const getSeasonEmoji = (season) => {
  const emojis = { Spring: '🌸', Summer: '☀️', Autumn: '🍂', Winter: '❄️', 'Year-round': '🌍', Monsoon: '🌧️' };
  return emojis[season] || '🗓️';
};

export const getTypeEmoji = (type) => {
  const emojis = {
    national_park: '🏔️', valley: '⛰️', meadow: '🌿', religious: '🙏',
    base_camp: '⛺', cave: '🕳️', temple: '🛕', lake: '🏞️',
    viewpoint: '🔭', church: '⛪', waterfall: '💧', village: '🏘️',
    bridge: '🌉', trek_start: '🥾'
  };
  return emojis[type] || '📍';
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
