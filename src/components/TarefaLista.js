import React from "react";
import { useTarefa } from "../context/TarefaContext";

export default function TarefaLista() {
  const { tarefas } = useTarefa();

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}
