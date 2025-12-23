const msInDay = 24 * 60 * 60 * 1000;

exports.determinePriority = (task) => {
  if (!task || !task.dueDate || task.completed) return 'low';
  const now = Date.now();
  const due = new Date(task.dueDate).getTime();
  const diff = due - now;
  if (diff <= 0) return 'high';
  if (diff <= msInDay) return 'high';
  if (diff <= 7 * msInDay) return 'medium';
  return 'low';
};
