// const Task = ({ message, completed }) => {
//   if (completed === true) {
//     return <p className='test'>{message} COMPLATEDO</p>;
//   }
//   return <p className='test'>{message}</p>;
// };

// const Task = ({ message, completed }) => {
//   return (
//     <p className='test'>
//       {message}
//       {completed ? ' COMPLETADO' : null}
//     </p>
//   );
// };


const Task = ({ message, completed }) => {
  console.log(completed);
  return (
    <p className='test'>
      {message}
      {completed && ' COMPLETADO'}
    </p>
  );
};

export default Task;
