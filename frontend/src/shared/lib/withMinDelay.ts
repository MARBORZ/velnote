export async function withMinDelay<T>(
  promise: Promise<T>,
  ms = 300,
): Promise<T> {
  const [result] = await Promise.all([
    promise,
    new Promise((res) => {
      setTimeout(res, ms);
    }),
  ]);

  return result;
}
