export const convertedDate = (timeString: string) => {
  const timestampStr = timeString; // The timestamp as a string
  const timestamp = Number(timestampStr); // Convert the string to a number
  const date = new Date(timestamp); // Convert the timestamp to a Date object

  // Format the date (e.g., DD/MM/YYYY HH:mm:ss)
  const day = date.getDate().toString().padStart(2, '0'); // Day with leading zero
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month with leading zero
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0'); // Hours with leading zero
  const minutes = date.getMinutes().toString().padStart(2, '0'); // Minutes with leading zero
  const seconds = date.getSeconds().toString().padStart(2, '0'); // Seconds with leading zero

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  // console.log(formattedDateTime, 'formatted date');
  return formattedDateTime;
};
