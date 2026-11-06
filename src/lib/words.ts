const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

/** Spell out small counts for running text ("three projects"); digits above twelve. */
export function words(n: number, capitalize = false) {
  const w = n >= 0 && n < WORDS.length ? WORDS[n] : String(n);
  return capitalize ? w.charAt(0).toUpperCase() + w.slice(1) : w;
}

export const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);
