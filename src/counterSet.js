import EachNumber from "./eachNm";
function CounterSet({array}) {
    
  return (
    <div className="eachBlock">
 { array.map((a,index)=>{
return (
<EachNumber key={index} a = {a}/>
)
 })}
    </div>
   
   )
}
    
       


export default CounterSet;