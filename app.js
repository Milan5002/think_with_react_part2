

function ReactContainer(){
  return (
      <div>Hello! Welcome to Kalvium   
         <div>Let's rock and roll - this is babel</div>
     </div> )
  };  


let  container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />,container);    