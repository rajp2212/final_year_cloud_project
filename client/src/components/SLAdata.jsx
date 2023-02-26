
import React, { useState, createContext } from 'react';

// create the context
export const DataContext = createContext();

// create a provider component that stores the data
const DataProvider = ({ children }) => {
    const slaData = {
        cpu_capacity: "Extremely High/ Extremely Good (EH/EG)",
        memory_size: "Extremely High/ Extremely Good (EH/EG)",
        boot_time: "Extremely High/ Extremely Good (EH/EG)",
        scale_up: "Extremely High/ Extremely Good (EH/EG)",
        scale_down: "Extremely High/ Extremely Good (EH/EG)",
        scale_up_time: "Extremely High/ Extremely Good (EH/EG)",
        scale_down_time: "Extremely High/ Extremely Good (EH/EG)",
        max_vm_configure: "Extremely High/ Extremely Good (EH/EG)",
        auto_scaling: "Extremely High/ Extremely Good (EH/EG)",
        storage: "Extremely High/ Extremely Good (EH/EG)",
    
    }
  const [slaFormData, setSlaFormData] = useState(slaData);

  return (
    <DataContext.Provider value={{ slaFormData, setSlaFormData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;


