import React from "react";
import { Card,Charts,CountryPicker } from "./component";
import styles  from  "./App.module.css";
import { fetchData } from "./api"
import coronaImage from "./image.png"
class App extends React.Component {
        
        this.setState({data: fetchedData })
    }

    // handleCountryChange = async (country) =>{
    //   const fetchedData = await fetchData(country);
    }
}
export default App;