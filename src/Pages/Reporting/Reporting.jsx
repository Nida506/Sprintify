import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Reporting = () => {
  // received props from the dashboard
  let totalTasks = 10;
  let doneTasks = 3;
  let inProgressTasks = 4;
  let stuckTasks = 3;
  
  const data = [
    {
      name: "Done",
      value: parseFloat(((100 / totalTasks) * doneTasks).toFixed(1)),
    },
    {
      name: "Working on it",
      value: parseFloat(((100 / totalTasks) * inProgressTasks).toFixed(1)),
    },
    {
      name: "Stuck",
      value: parseFloat(((100 / totalTasks) * stuckTasks).toFixed(1)),
    },
  ];

  const COLORS = ["#00CA72", "#FFCC00", "#FB275D"];

  // Custom Tooltip formatter function
  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      const { name, value } = payload[0];
      const color = COLORS[data.findIndex((item) => item.name === name)];
      return (
        <div
          style={{
            backgroundColor: "#1f2937",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FiberManualRecordIcon style={{ color }} />
            <span className="ms-2">
              {name}: {value}%
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex justify-center max-[720px]:flex-col max-[720px]:mt-20 max-[720px]:items-center mt-32 h-screen">
      {/* for pie chart  */}
      <div className="h-80 w-[50vw] flex max-[720px]:justify-center justify-end items-center max-[720px]:w-[100vw]">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = `drop-shadow(0px 0px 4px ${
                    COLORS[index % COLORS.length]
                  }) `)
                }
                onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
              />
            ))}
          </Pie>
          {/* this appear on hover */}
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>

      {/* for info of pie chart */}
      <div className="w-[50vw] h-80 flex max-[720px]:ps-10 justify-start max-[720px]:justify-center max-[720px]:items-start max-[720px]:w-[100vw] items-center">
        <div>
          {/* for done tasks */}
          <div className="flex items-center gap-2 mb-2 cursor-pointer font-Roboto font-semibold">
            <FiberManualRecordIcon className={`text-green`} />
            <span className="ps-2 block text-xl text-gray-500">
              Done : {data[0].value}%
            </span>
          </div>
          {/* for in progress tasks */}
          <div className="flex items-center gap-2 cursor-pointer mb-2">
            <FiberManualRecordIcon className={`text-yellow`} />
            <span className="block ps-2 text-xl font-Roboto font-semibold text-gray-500">
              Working on it : {data[1].value}%
            </span>
          </div>
          {/* for stucked tasks */}
          <div className="flex items-center gap-2 mb-2 cursor-pointer font-Roboto font-semibold">
            <FiberManualRecordIcon className={`text-red`} />
            <span className="block text-gray-500 ps-2 text-xl">
              Stuck : {data[2].value}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
