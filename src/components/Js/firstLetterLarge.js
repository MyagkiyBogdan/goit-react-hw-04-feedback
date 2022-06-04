const firstLetterLarge = string => {
  if (!string) {
    return;
  }

  const splitedType = string.split('');
  const firstLetter = splitedType[0].toUpperCase();
  const typeCopy = [...splitedType];
  typeCopy.splice(0, 1);
  const result = [firstLetter, ...typeCopy].join('');
  return result;
};

export default firstLetterLarge;
