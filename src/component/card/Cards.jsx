import React from "react";
import { Card,CardContent,Typography,Grid, } from  '@material-ui/core'
import  styles from "./Cards.module.css";
import CountUp  from 'react-countup';
import cx from "classname";


const Cards = ({ data:{ confirmed,recovered, deaths,lastUpdate, }}) => {
    //  console.log(confirmed)
     if(!confirmed){
         return 'Loding....';
     }
    

     return (
         <div className={styles.container}>
         <Grid container spacing={4} justify="center">
         <Grid item  component={Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected Person</Typography>
                <Typography variant="h5">
                <CountUp
                    start={0}
                    end={confirmed.value }
                    duration={2.5}
                    separator=","
                />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number Case Infected from COVID-19</Typography>
            </CardContent>
         </Grid>
         <Grid item  component={Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Active Case</Typography>
                <Typography variant="h5">
                <CountUp
                    start={0}
                    end={confirmed.value - recovered.value }
                    duration={2.5}
                    separator=","
                />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number Case Active Now from COVID-19</Typography>
            </CardContent>
         </Grid>
         <Grid item  component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}> 
            <CardContent>
                <Typography color="textSecondary" gutterBottom> Recovered Person</Typography>
                <Typography variant="h5">
                <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                />
                </Typography>                
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of Recovered from COVID-19  </Typography>
            </CardContent>
         </Grid>
         <Grid item  component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                />
                </Typography>                
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of Deaths from COVID-19  </Typography>
            </CardContent>
         </Grid>
         </Grid>

         </div>
          
     )
 }
 export default Cards;