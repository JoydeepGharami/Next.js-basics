'use client'
import ExampleServer from "./ExampleServer"  

const ExampleClient = () => {
  console.log('I am Client component');
  return (
    <div>
      <p>This is client Component</p>
      <ExampleServer />   
    </div>
  );
}

export default ExampleClient;
