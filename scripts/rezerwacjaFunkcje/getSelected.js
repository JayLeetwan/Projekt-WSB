const getSelected = (classId) => {
  const selected = document.getElementById(classId).value;
  localStorage.setItem(classId, selected);
  console.log(localStorage.getItem(classId));
};
