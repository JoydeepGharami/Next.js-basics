"use client"
export default function ProductButton(props){
    console.log(props)
return (
    <div>
        <button onChange={()=>{console.log(props.price)}}>Click Me</button>
    </div>
)
}
