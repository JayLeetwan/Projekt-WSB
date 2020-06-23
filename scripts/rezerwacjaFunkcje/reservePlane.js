const reservePlane = () => {
  const flyFromInput = document.getElementById('flyFrom');
  flyFromInput.addEventListener('input', (e) => {
    let flyFromValue = e.target.value || '';
    localStorage.setItem('flyFromValue', flyFromValue);
  });

  const flyToInput = document.getElementById('flyTo');
  flyToInput.addEventListener('input', (e) => {
    let flyToValue = e.target.value || '';
    localStorage.setItem('flyToValue', flyToValue);
  });

  const adultsInput = document.getElementById('howManyGrownups');
  adultsInput.addEventListener('input', (e) => {
    let adultsValue = '';
    if (e.target.value < 10 && e.target.value > 0) {
      adultsValue = e.target.value;
      localStorage.setItem('adultsValue', adultsValue);
    } else {
      alert('Too many passengers, choose value between 1 and 9.');
    }
  });

  const childrenInput = document.getElementById('howManyChildren');
  childrenInput.addEventListener('input', (e) => {
    let childrenValue = '';
    if (e.target.value < 10 && e.target.value >= 0) {
      childrenValue = e.target.value;
      localStorage.setItem('childrenValue', childrenValue);
    } else {
      alert('Too many passengers, choose value between 0 and 9.');
    }
  });
};

document.addEventListener('DOMContentLoaded', reservePlane);
