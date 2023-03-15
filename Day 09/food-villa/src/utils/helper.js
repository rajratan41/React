// Filter Data of Resturant
export function filterData(searchText, resturants) {
  const filterData = resturants.filter((resturant) =>
    resturant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
