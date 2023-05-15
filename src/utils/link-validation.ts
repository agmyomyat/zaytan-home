export function isLinkValid(link: string) {
  const linkRegex = /^(http|https):\/\/[^ "]+$/;
  return linkRegex.test(link);
}
