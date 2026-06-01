export function cutAndAddEllipsis(text: string): string {
  const maxLenght = 40;
  if (text.length < maxLenght) return text;
  return `${text.substring(0, maxLenght)}...`;
}
