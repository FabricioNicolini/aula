import { useState } from "react";
import { useRouter } from "next/router";
import { useTarefa } from "../context/TarefaContext";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const { setTarefas } = useTarefa();
  const router = useRouter();

  const handleSalvar = () => {
    if (nome.trim()) {
      setTarefas((prev) => [...prev, nome]);
      router.push("/");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Cadastrar Nova Tarefa</h1>
      <input
        type="text"
        placeholder="Nome da Tarefa"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleSalvar}>Salvar</button>
    </div>
  );
}
