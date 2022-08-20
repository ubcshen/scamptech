export type CompnayInvoices = {
  companyName: string;
  invoiceNumber: string;
  invoiceAmount: string;
  dueDate: string;
};

export type SingleChartData = {
  options: {
    xaxis: {
      categories: string[];
    };
  };
  series: {
    data: number[];
  }[];
};

export type StateBlockData = {
  icon: JSX.Element;
  whichState: string;
  value: number;
}
