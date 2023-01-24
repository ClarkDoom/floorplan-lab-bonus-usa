import Texas from "./Texas";
import Minnesota from "./Minnesota";
import Colorado from "./Colorado";

const States = () => {
  return ( 
    <>
      <div>
        <h1>Texas</h1>
        <Texas />
      </div>
      <div>
        <h1>Minnesota</h1>
        <Minnesota />
      </div>
      <div>
        <h1>Colorado</h1>
        <Colorado />
      </div>
    </>
  );
}

export default States;