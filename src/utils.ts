export function capitalizeFirstLetter(word: string) : string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric'}).format(
    new Date(date)
  );
