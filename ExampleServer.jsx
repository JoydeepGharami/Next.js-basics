
const ExampleServer = () => {
    console.log('I m Server Component')
  return (
    <div>
      <p>This is Server Component</p>
      <ExampleServer/>
    </div>
  )
}

export default ExampleServer
