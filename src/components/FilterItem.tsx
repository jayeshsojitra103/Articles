interface FilterItemProps {
  filterData: Array<string>;
  onFilterChage:(value:string)=>void,
  selectedItems:Array<string>
}

export const FilterItem: React.FC<FilterItemProps> = ({ filterData,onFilterChage,selectedItems }) => {
  return (
    <>
      {filterData?.map((filter,index) => {
        return (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={filter}
              checked={selectedItems.includes(filter)}
              onChange={() => onFilterChage(filter)}
            />
            <label className="form-check-label" htmlFor={filter}>
              {filter}
            </label>
          </div>
        );
      })}
    </>
  );
};

