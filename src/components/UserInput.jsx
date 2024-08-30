import Input from "./Input";
import {useState} from "react"
import { calculateInvestmentResults } from "../util/investment";
import  Calculation  from "./Calculation";
import Table from "./Table"

export default function userInput() {
    const [outPutData, setOutPutData] = useState([]);
    
  const [userInput, setUserInput] = useState({
    initialInverstment: 15000,
    annualInverstment: 900,
    expectedReturns: 5.5,
    duration: 0,
  });
  function handleChange(identifyValues, inputValues) {
     setUserInput((prevInput) => {
        const UpdatedInput= {
            ...prevInput,
            [identifyValues]: inputValues,
          };
          handleAnother(UpdatedInput)
      return UpdatedInput;
      
    });
   
    
  }
  function handleAnother(updatedInput) {
    const OutPut =calculateInvestmentResults(updatedInput.initialInverstment,updatedInput.annualInverstment,updatedInput.expectedReturns,updatedInput.duration);

    setOutPutData(OutPut);
}
 
  return (
    <>
    <div id="user-input">
      <div className="input-group">
        <Input
          labelName="Initial Invertment"
          placeholder="Initial Invertment...."
          inputvalue={userInput.initialInverstment}
          onChangeValue={(event) =>
            handleChange("initialInverstment", event.target.value)
          }
        />
        <Input
          labelName="Auunal Invertment"
          inputvalue={userInput.annualInverstment}
          onChangeValue={(event) =>
            handleChange("annualInverstment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Returns"
          inputvalue={userInput.expectedReturns}
          onChangeValue={(event) =>
            handleChange("expectedReturns", event.target.value)
          }
        />
        <Input
          labelName="Duration"
          inputvalue={userInput.duration}
          onChangeValue={(event) =>
            handleChange("duration", event.target.value)
          }
        />
      </div>
    </div>
    <div id="result" className="center">
    <Table OutPut={outPutData} /> 
      </div>
   
    </>
  );
}
