import ListaTarefas from '../../models/ListaTarefas';
import ListaItem from './ListaItem';
import ListaBotao from './ListaBotao';
import ListaRodape from './ListaRodape';

interface ListaProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void
};

const Lista = (props: ListaProps) => {    
    const { tarefas } = props;

    const renderizarTarefas = () => {
        return tarefas.itens.map((tarefa, index) => {
            return (
                <ListaItem  key={tarefa.id}
                    valor={tarefa.descricao} 
                    concluido={tarefa.concluida} 
                    alterarStatus={() => {
                        const tarefaModificada = tarefa.alternarStatus();
                        const novaLista = tarefas.modificarTarefa(tarefaModificada);
                        props.mudou(novaLista);
                    }}
                />
            )
        })
    }

    return (
        <div className={`flex w-3/5 items-start relative`}>
            <ul className={`
                absolute -top-14
                w-full list-none
                bg-white
                shadow-lg
                rounded-lg
            `}>
                {renderizarTarefas()}
                <ListaRodape tarefas={props.tarefas} 
                    mudou={props.mudou} />
            </ul>
        </div>
    );
};

export default Lista;