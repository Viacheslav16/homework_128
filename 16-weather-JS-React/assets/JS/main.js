
    
function MyApp() {
    const [cities, setCities] = React.useState([])
    const [counter, setCounter]= React.useState(0)
    
    const fecthCities = async() =>{
        const resp = await fetch('./data/cities.json?pagenumber='+counter)
        const json = await resp.json()
        setCities(json)
    }

    React.useEffect(() =>{
        //do something while mount
        fecthCities()
        return
        //do something while unmount
    }, [counter])

return <main>
    <div className="container">
       <Header/>
       <b>{counter}</b>
       <button type="button" onClick={()=>setCounter(counter + 1)}>Click me</button>
       <button type="button" onClick={()=>fecthCities()}>Refresh</button>
        <div className="main_info">
            <ul>
                {cities.map((el, index) => <CityItem cityData={el} key={el.index}/>)}
            </ul>
        </div>
        <Footer/>
    </div>
</main>
}

function Header(){
    return <div className="header_title">
    <h1>CSS Weather Forecast</h1>
    <span className="title"><i className="wi wi-sunrise"></i></span>
</div>
}
function Footer(){
    return <div className="footer_title">Have a nice day and don't forget umbrella if you are in New Delhi now!</div>

}

function CityItem({cityData}){
    return <li className={cityData.width}>
              <div className="item">
                <div className="city">{cityData.name}</div>
                <div className="icon">{cityData.temp}&deg;C <i className={`wi wi-${cityData.icon}`}></i></div>
            </div>
            </li>
}

  
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

