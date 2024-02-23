
function Counter(){
    const [counter,setCounter] = React.useState(0);

    const incClickHandler = ()=>{
        setCounter(counter + 1) 
    }

    return <div className="container">
        <section>
            <div className="container">
                <b>{counter}</b>
                <br/>
                <button type="button" onClick={incClickHandler}>Inc</button>
                <button type="button" onClick={()=>{setCounter(counter - 1)}}>Inc</button>
            </div>
        </section>
    </div>
}
