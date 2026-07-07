import { differenceInDays, differenceInMonths } from "date-fns";

function App() {
  const result = differenceInDays(new Date(), new Date(2026, 6, 7));

  return (
    <>
      <main className="flex">
        <div>
          <h1> Upstate Kosher Rentals</h1>

          <h2>Opened:</h2>
          <span>06/16/2025</span>

          <h2>Days in Business</h2>

          <h1>{` ${differenceInMonths(new Date(), new Date(2025, 5, 16))} Months`}</h1>
        </div>

        <div>
          <h1> JWPro Software Solutions</h1>

          <h2>Opened:</h2>
          <span>07/07/2026</span>

          <h2>Days in Business</h2>

          <h1>{` ${result} Days`}</h1>
        </div>
      </main>
    </>
  );
}

export default App;
