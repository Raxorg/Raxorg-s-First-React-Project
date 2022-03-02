const name = "Groxar";

const askHelp = () => {
  return "Help me!";
};

function Hello() {
  return (
    /* <h1>{10 + 2}</h1> */
    /* You can put js expresions inside curly brackets */
    <div>
      <h2>Hello World {name}!</h2>
      <p>Functional component reporting</p>
      <p>{askHelp()}</p>
    </div>
  );
}
/* const hello = ()=> <h1>Hello World!</h1> */
export default Hello;
