export function preventScrollByCondition(condition: boolean): void {
  const $body = document.querySelector('body')!;
  $body.style.overflow = condition ? 'hidden' : 'auto';
}
