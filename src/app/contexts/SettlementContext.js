import { createContext, useState } from 'react';
const SettlementContext = createContext({
  handleSelectedValueUpdate: () => {},
  handleSubmitOfSelectedValue: () => {},
  isSelectedShiftEmpty: () => {}
});

export const SettlementProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleSelectedValueUpdate = (update) => {
    setSelectedValue(update);
    console.log(update);
  };
  const isSelectedShiftEmpty = () => {
    console.log(selectedValue);

    if (selectedValue.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmitOfSelectedValue = () => {
    console.log(selectedValue);
  };

  return (
    <SettlementContext.Provider
      value={{ handleSelectedValueUpdate, handleSubmitOfSelectedValue, isSelectedShiftEmpty }}
    >
      {children}
    </SettlementContext.Provider>
  );
};

export default SettlementContext;
