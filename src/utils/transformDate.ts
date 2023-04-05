export const transformDate = (time: number) => {
  const date = new Date(time * 1000).toLocaleString('ru-RU');
  return date;
};
