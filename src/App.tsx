import "./App.css";
import { Invoices } from "./components/Invoices";
import { ChartBlocks } from "./components/ChartBlocks";
import { StateBlocks } from "./components/StateBlocks";
import CheckMarkIcon from "./logos/CheckMarkIcon";
import { LeftMenu } from "./components/LeftMenu";
import { Header } from "./components/Header/Header";

// should load from some data sources, but here just mock the data
// because we are always loading from the mock data. i did not check data here.
// only for screen size > 1350px
// did not display path, search bar and other tool icons on the top right
const mockInvoicesInfo = [
  {
    companyName: "company 1",
    invoiceNumber: "invoice #1234",
    invoiceAmount: "$120,000.00",
    dueDate: "Aug 2, 2022",
  },
  {
    companyName: "company 2",
    invoiceNumber: "invoice #12345",
    invoiceAmount: "$1220,000.00",
    dueDate: "Aug 2, 2022",
  },
];

const mockChartData = [
  {
    options: {
      xaxis: {
        categories: ["APR", "MAY", "JUN", "JULY", "AUG"],
      },
    },
    series: [
      {
        data: [30, 40, 45, 50, 49],
      },
    ],
  },
  {
    options: {
      xaxis: {
        categories: ["APR", "MAY", "JUN", "JULY", "AUG"],
      },
    },
    series: [
      {
        data: [50, 49, 60, 70, 91],
      },
    ],
  }
];

const stateBlockData = [
  {
    icon: <CheckMarkIcon />,
    whichState: "Arbitracy stats!",
    value: 12345,
  },
  {
    icon: <CheckMarkIcon />,
    whichState: "Areebitracy stats!",
    value: 412345,
  },
  {
    icon: <CheckMarkIcon />,
    whichState: "Areebitracy stats!",
    value: 4123345,
  },
  {
    icon: <CheckMarkIcon />,
    whichState: "Areebitracy stats!",
    value: 6412345,
  },
];

function App() {
  return (
    <div className="App">
      <div className="left-container"><LeftMenu /></div>
      <div className="main-container">
        <Header />
        <div>
          <StateBlocks stateBlockData={stateBlockData} />
          <ChartBlocks chartInfo={mockChartData} />
          <Invoices invoicesData={mockInvoicesInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
