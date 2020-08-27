import React from "react";
import WordBankItem from "../WordBankItem/WordBankItem"
import "./WordBankContainer.css";

const WordBankContainer = () => {
  return (
    <div className="card container-fluid mt-5 py-3">
      <h2>Word Bank</h2>
      <table className="table table-bordered border-bark">
        <thead>
          <tr >
            <th className="text-center " scope="col-md-4">
              Subject
            </th>
            <th className="text-center" scope="col-md-4">
              Word
            </th>
            <th className="text-center" scope="col-md-4">
              Definition
            </th>
          </tr>
        </thead>
        <WordBankItem/>
      </table>
    </div>
  );
};

export default WordBankContainer;