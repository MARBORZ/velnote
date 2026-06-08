/**
 * Гарантирует, что промис разрешится не раньше, чем через `ms` миллисекунд.
 * Используется для скелетонов/лоадеров — чтобы при быстром ответе сервера
 * UI не "мигал" (skeleton не появлялся и сразу исчезал).
 *
 * Запрос выполняется как обычно, без задержки — искусственно
 * откладывается только момент, когда loading=false.
 */
export function withMinDelay<T>(promise: Promise<T>, ms = 400): Promise<T> {
  return Promise.all([promise, new Promise((resolve) => setTimeout(resolve, ms))])
    .then(([result]) => result);
}
