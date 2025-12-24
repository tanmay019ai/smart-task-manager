const calculateStats = (tasks) => {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "PENDING").length;
  const overdue = tasks.filter((t) => t.status === "OVERDUE").length;
  const completed = tasks.filter((t) => t.status === "COMPLETED").length;

  return { total, pending, overdue, completed };
};

const Circle = ({ percent, color }) => {
  const radius = 32;
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="80" height="80">
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="currentColor"
        strokeWidth={stroke}
        fill="transparent"
        className="text-slate-300 dark:text-slate-700"
      />
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="currentColor"
        strokeWidth={stroke}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={color}
      />
    </svg>
  );
};

const Stats = ({ tasks }) => {
  const { total, pending, overdue, completed } = calculateStats(tasks);

  const stats = [
    { label: "Total", value: total, percent: 100, color: "text-blue-500" },
    {
      label: "Pending",
      value: pending,
      percent: total ? (pending / total) * 100 : 0,
      color: "text-yellow-500",
    },
    {
      label: "Overdue",
      value: overdue,
      percent: total ? (overdue / total) * 100 : 0,
      color: "text-red-500",
    },
    {
      label: "Completed",
      value: completed,
      percent: total ? (completed / total) * 100 : 0,
      color: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex items-center gap-4"
        >
          <Circle percent={s.percent} color={s.color} />
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {s.label}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {s.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
