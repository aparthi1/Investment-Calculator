export default function Table({ OutPut=[] }) {
    debugger
    let value="";
    let NoValue=(<p >
        No data Found
      </p>)
    if(OutPut.length>0){
        NoValue="";
       value = OutPut.map((out) => (
        <tr key={out.year}>
          <td>{out.year}</td>
               <td>{out.valueEndOfYear}</td>
               <td>{out.perMonth}</td>
          <td>{out.interest}</td>
          <td>{out.TotalIntrest}</td>
               <td>{out.investedCapital}</td>              
        </tr>
      ));
    }
   
  return (
    <thead>
      <tbody>
        <tr>
          <th>Year</th>
                  <th>Investment Value</th>
                  <th>Per Month</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>         
        </tr>
        {value}
      </tbody>
      {NoValue}
    </thead>
  );
}
