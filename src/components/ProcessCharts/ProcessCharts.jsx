import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (Props) => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [Props.percentage, 100 - Props.percentage],
        backgroundColor: [Props.color, "#EAEAEA"],
        hoverBackgroundColor: [Props.color, "#EAEAEA"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-[200px] md:w-[250px]">
      <h3 className="text-2xl font-semibold mb-2 ">{Props.title}</h3>
      <Pie data={data} />
      <p className="mt-2 text-gray-600">{Props.percentage}%</p>
    </div>
  );
};

const ProcessCharts = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6">
      <PieChart title="Done" percentage={81} color="green" />
      <PieChart title="Working" percentage={70} color="yellow" />
      <PieChart title="Pending" percentage={60} color="red" />
    </div>
  );
};

export default ProcessCharts;