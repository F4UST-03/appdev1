import './App.css'


const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}


function TodoList() {
  return (
    <>
      <h1>To Do List for {formatDate(today)}</h1>

      <ul style={
        {
        backgroundColor: 'black',
        color: 'pink'
      }
      }>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  
  );
}


export default TodoList
