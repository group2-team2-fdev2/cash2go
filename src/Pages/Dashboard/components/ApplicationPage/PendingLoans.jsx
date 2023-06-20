import { Data } from "./Data";
import { useEffect, useState } from "react";
import Downarrow from "./Downarrow";
import Download from "./Download";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Pending from "./Pending";

function PendingLoans() {
  const [data, setData] = useState(Data);

  useEffect(() => {
    fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  return (
    <div>
      <table className="Application-table">
        <thead >
          <tr>
            <th colspan="6" id="Application-allApp-container">All Applications</th>
          </tr>
          <tr className="Application-second-tableHead">
            <th colspan='2' id='Application-table-applicantinfo'>Applicants info</th>
            <th>
              <div className="Application-tableHead-container">
                <p>Date</p>
                <Downarrow />
              </div>
            </th>
            <th>
              <div className="Application-tableHead-container">
                <p>Status</p>
                <Downarrow />
              </div>
            </th>
            <th>
              <div className="Application-tableHead-container">
                <p>Credit Score</p>
                <Downarrow />
              </div>
            </th>
            <th>
              <div className="Application-tableHead-container">
                <p>Amount</p>
                <Downarrow />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.episode_id}>
                  <td>{item.applicantInfo}</td>
                  <td >{item.date}</td>
                  <td ><Pending/></td>
                  <td >{item.creditscore}</td>
                  <td >{item.amount}</td>
                  <td>
                    <Download />
                  </td>
                </tr>
              );
            })}
          <tr className="Application-footer">
            <div>
              <div className="Application-pre">
                <PreviousArrow />
                <p>Pre</p>
              </div>
            </div>
            <div>
              <div className="Application-page-no">
                <p>1</p>
                <p>2</p>
                <p>...</p>
                <p>5</p>
                <p>6</p>
              </div>
            </div>
            <div>
              <div className="Application-next">
                <p>Next</p>
                <NextArrow />
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PendingLoans;
