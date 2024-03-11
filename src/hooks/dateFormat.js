function formatDate(dateStr) {
    const months = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];
  
    const date = new Date(dateStr);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    // Get the ordinal indicator
    const ordinal = (day) => {
      const j = day % 10,
            k = day % 100;
      if (j === 1 && k !== 11) {
          return "st";
      }
      if (j === 2 && k !== 12) {
          return "nd";
      }
      if (j === 3 && k !== 13) {
          return "rd";
      }
      return "th";
    };
  
    return `${day}${ordinal(day)} ${months[monthIndex]} ${year}`;
}
  
export default formatDate;