import { createContext, useState, useContext } from "react";

const TarefaContext = createContext();

export const TarefaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);

  return (
    <TarefaContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefa = () => useContext(TarefaContext);
