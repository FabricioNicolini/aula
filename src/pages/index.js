import Link from "next/link";
import TarefaLista from "../components/TarefaLista";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema de Cadastro de Tarefas</h1>
      <Link href="/cadastrar">
        <button>Cadastrar Nova Tarefa</button>
      </Link>
      <h2>Lista de Tarefas Cadastradas:</h2>
      <TarefaLista />
    </div>
  );
}
