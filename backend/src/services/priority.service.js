const calculateDueDate = (priority) => {
  const now = new Date();

  switch (priority) {
    case "HIGH":
      return new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);

    case "MEDIUM":
      return new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    case "LOW":
      return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    default:
      throw new Error("Invalid priority");
  }
};

module.exports = { calculateDueDate };
