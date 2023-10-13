
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import SeriesData from './components/SeriesData';
function ncard(val){
  return(


  
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
    category={val.category}
    title={val.title}
    slink={val.slink}

    />

  )


}



function App() {
  return (
   <>
    <Header no={SeriesData.length}/>
    <div className="container">
    {SeriesData.map(ncard)}
    {console.log(SeriesData.toString())}
    </div>
   </>
  );
}

export default App;
