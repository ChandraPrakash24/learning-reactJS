export function filterData(searchText, wholeRestaurentList){
    const filterData = wholeRestaurentList.filter((restauro) => restauro?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}
   