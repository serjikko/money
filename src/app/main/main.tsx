
import { AddExpenses } from "../../components/add-expenses";
import { AddIncome } from "../../components/add-income";
import { WeeklyStats } from "../../components/weekly-stats/weekly-stats";

import "./style.css";


<main className="page__home">
  <div className="container">
    <h1>Money App</h1>
  </div>
  
  <div className="home__wrapper">
    <>
      <AddExpenses />
      <AddIncome />
      <WeeklyStats />
    </>
  </div>
</main>