interface Props {
  name: String;
  age?: number;
}

function Greeter({age, name} : Props) {
  if (age! < 30) {
    return (
      <p>Witaj {name}</p>
    );
  } else {
    return (
      <p>Dzień dobry {name}</p>
    );    
  }
}

export default Greeter;