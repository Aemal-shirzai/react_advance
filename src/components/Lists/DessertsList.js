function DessertsList(props) {

    const lowCaloriesDessert = props.data
      .filter(lowDessert => lowDessert.calories < 500)
      .sort((a, b) => a.calories - b.calories)
      .map((dessert, index) => {
        return (
          <li key={index}>
           {dessert.name} - {dessert.calories} cal 
         </li>
        );
      });
    
    return <ul> {lowCaloriesDessert} </ul>
  }
  
  export default DessertsList;
  