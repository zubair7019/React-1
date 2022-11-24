import ExpenseItem from "./Component/ExpenseItem";

function App() {
  const expense = [
    {
      id: "01",
      title: "Toilet Paper",
      amount: "123.33",
      date: new Date(),
      location: "hyd",
    },
    {
      id: "02",
      title: "Contruct building",
      amount: "100.33",
      date: new Date(),
      location: "karnatak",
    },
    {
      id: "03",
      title: "Car insurance",
      amount: "589.33",
      date: new Date(),
      location: "Bidar",
    },
    {
      id: "04",
      title: "New desk",
      amount: "149.33",
      date: new Date(),
      location: "Bihar",
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        id={expense[0].id}
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location={expense[0].location}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[1].id}
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
        location={expense[1].location}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[2].id}
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
        location={expense[2].location}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[3].id}
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
        location={expense[3].location}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
