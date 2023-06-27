import "./App.css";
import Questions from "./Questions";

function App() {
  const question=[
      {
        id:1,
        title:"Is this a good product?",
        info:"lorem ispomfskfbsf, sfns fn sd,f sn fsd fms d,fnsdmf"
      },
      {
        id:2,
        title:"How I can assist u?",
        info:"lorem ispomfskfbsf, sfns fn sd,f sn fsd fms d,fnsdmf"
      },
      {
        id:3,
        title:"hello dear?",
        info:"lorem ispomfskfbsf, sfns fn sd,f sn fsd fms d,fnsdmf"
      },
      {
        id:3,
        title:"hello dear?",
        info:"lorem ispomfskfbsf, sfns fn sd,f sn fsd fms d,fnsdmf"
      },
      {
        id:3,
        title:"hello dear?",
        info:"lorem ispomfskfbsf, sfns fn sd,f sn fsd fms d,fnsdmf"
      },
      
      
      
      
  ]
  return (
    <div className="App">
      <h1 className="main-heading">Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2 >Frequently Asked Questions</h2>
        <div className="container2">

        {
          question.map((item,idx)=>{
            return  <Questions item={item} idx={idx}/>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
