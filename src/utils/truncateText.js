export const trimmedString = (description, length = 160) => {
  let yourString = description; //replace with your string.
  let maxLength = length; // maximum number of characters to extract

  //trim the string to the maximum length
  let trimmedString = yourString.substr(0, maxLength);

  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  return trimmedString;
};
