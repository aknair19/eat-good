export const filterDataOnClick = (list, searchText) => {
  const filteredData = list.filter((card) =>
    card?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
};
