import reactimg from "./assets/react-core-concepts.png"
import configimg from "./assets/config.png"
import componentsimg from "./assets/components.png"
import { CORE_CONCEPTS } from "./Data.js";



//Dynamic content {}
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const imageing= [reactimg,configimg,componentsimg];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}



function Header(){
return(
  <header>
  <img src={imageing[genRandomInt(2)]} alt="Stylized atom" /> {/* dynamic content*/ }
  <h1>React Learning</h1>
  <p>
    {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>
);
}
  function Hello()
{
  return(
    <button>click me</button>
  )
}

function Coreconcept(props) 
{
  return (<li>
<img src={props.image} alt="props.title"/>
<h2>{props.title}</h2>
<p>{props.description}</p>
  </li>);
} {/*can name it anything. the values passed are objects. 
instead of using props just add{image,title,description}(destructuring) and
 dont use props.image just use image,title,description */}

function TabButton({children,onSelect})
{ 
 

  return <li>
    <button onClick={onSelect}>{children}</button>
    </li>;
}
//props.children to show the exact value we want



function App() {
  function handleSelect() {
    console.log("hello world--selected");
  }
  
  
  
  
  return (
    <div>
    <Header/>
      <main>
         <section id="core-concepts"> 
<h2>Core Concepts</h2>
<ul>
  <Coreconcept title="Components" 
  description="'The core UI building block - compose the user interface by combining multiple components.'"
  image={componentsimg}/> {/*nrml way to use props*/}

   <Coreconcept {...CORE_CONCEPTS[1]}/> {/*another way to use props*/}

    <Coreconcept title={CORE_CONCEPTS[2].title} 
  description={CORE_CONCEPTS[2].description}
   image={CORE_CONCEPTS[2].image}/>  {/*using props from another file */}
   
    <Coreconcept title={CORE_CONCEPTS[3].title} 
  description={CORE_CONCEPTS[3].description}
   image={CORE_CONCEPTS[3].image}/>
</ul>
        </section>



        <section id="examples">
<h2>Examples</h2>
<menu>
   <TabButton onSelect={handleSelect}>Component</TabButton> {/*passing handleSelect function as value to the prop onClick */}
  <TabButton>JSX</TabButton>
  <TabButton>Props</TabButton>
  <TabButton>State</TabButton>
</menu>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  
  );
}




export default App;
