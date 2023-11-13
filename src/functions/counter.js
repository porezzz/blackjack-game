const counter = (array) => {
  let value = 0;

  for (let i = 0; i < array.length; i++) {
    const x = array[i].value;
    value += x;
  }
  return value;
};

export default counter;
