const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  const targetDate = typeof date === 'string' ? new Date(date) : date;

  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(targetDate);
  }

  // Fallback for offline or test environments
  const result = [];
  const random = seededRandom(targetDate.getDate ? targetDate.getDate() : 1);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }

  if (result.length === 0) {
    result.push('17:00', '18:00', '19:00', '20:00', '21:00');
  }

  return result;
};

export const submitAPI = function (formData) {
  if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  }
  return Boolean(formData);
};
