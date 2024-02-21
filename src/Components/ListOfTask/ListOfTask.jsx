import Task from '../Task/Task';

const ListOfTask = () => {
  return (
    <div>
      <Task completed message={'Comida de Gato'} />

      <Task message={'Realizar los ejercicios Guiño guiño'} />

      <Task completed={true} message={'Feliz día del Gato'} />
    </div>
  );
};

export default ListOfTask;
