export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export const timeRemaining = (dateString) => {
  const diff = new Date(dateString) - new Date();

  const absDiff = Math.abs(diff);
  const hours = Math.floor(absDiff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (diff <= 0) {
    if (days > 0) return `Overdue by ${days} day(s)`;
    return `Overdue by ${hours} hour(s)`;
  }

  if (days > 0) return `${days} day(s) left`;
  return `${hours} hour(s) left`;
};
