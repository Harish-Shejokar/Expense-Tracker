import React from "react";
import Emoji from "../../../Components/Emoji";

import { useSelector } from "react-redux";

const Download = () => {
  const dataFromRedux = useSelector((state) => state.expense.expenseData);
  const downloadExpensesHandler = () => {
    console.log(dataFromRedux);
    const data = [];
    dataFromRedux.map((item) => {
      const obj = {
        expense: item.expense,
        description: item.description,
        category: item.category,
      };
      const dataInStrings = JSON.stringify(obj);

      data.push(dataInStrings.replace("{", "").replace("}", "\n"));
      // console.log(convertedData);
    });

    const blob1 = new Blob(data, { type: "plain/txt" });
    let link = document.getElementById("download");
    link.href = URL.createObjectURL(blob1);

    // const blob2 = new Blob(data);
    // let link2 = document.getElementById("download");
    // link2.href = URL.createObjectURL(blob2);
    };
    
    

  return (
    <div className="" style={{cursor:"pointer"}}>
      <a id="download" download="file1.txt" onClick={downloadExpensesHandler}>
        <Emoji symbol="⬇️" />
      </a>
    </div>
  );
};

export default Download;
