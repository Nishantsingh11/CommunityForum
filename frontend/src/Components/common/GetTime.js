export const getTimeDifference = (timestamp) => {
    const now = new Date();
    const pastDate = new Date(timestamp);
    const diffInMs = now - pastDate;
    const diffInHours = diffInMs / (1000 * 60 * 60); // Convert milliseconds to hours
    if (diffInHours < 24) {
      return `${diffInHours.toFixed(2)} hours ago`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return `${days}d ago`;
    }
  };