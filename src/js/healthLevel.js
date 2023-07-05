const healthLevel = (data) => {
  if (data.health > 50) {
    return 'healthy';
  } if (data.health <= 50 && data.health >= 15) {
    return 'wounded';
  }
  return 'critical';
};

export default healthLevel;
