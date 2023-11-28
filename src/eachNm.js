function EachNumber({a}) {

    return ( 
        
        <div className="block" style={{height:`${(a*10)}px`}}>
            {a}
        </div>
     );
}

export default EachNumber;