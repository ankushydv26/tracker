import React from "react";
import { Card,Charts,CountryPicker } from "./component";
import styles  from  "./App.module.css";
import { fetchData } from "./api"
import coronaImage from "./image.png"

class App extends React.Component {
   state ={
       data:{},
       country:'',
       count:[]
   }

     async componentDidMount(){
        const  fetchedData = await fetchData();
        
        this.setState({data: fetchedData })
    }

    
    handleCountryChange = async (country,e) => {
        const  fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
   
    }
     
    render(){
        const  {data,country} = this.state;
        return(
        <div className={styles.container}>
            <img  src={coronaImage} alt="COVID-19" className={styles.image}/>
            <h3>STAY HOME STAY SAFE AND SAVE WORLD</h3>
            <Card  data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country} />
        </div>
        )
    }
}
export default App;