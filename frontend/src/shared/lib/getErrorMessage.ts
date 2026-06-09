export function getErrorMessage(e: unknown): string {
  if (
    e !== null &&
    typeof e === "object" &&
    "response" in e
  ) {
    const response = (e as { response: unknown }).response;
    if (
      response !== null &&
      typeof response === "object" &&
      "data" in response
    ) {
      const data = (response as { data: unknown }).data;
      if (
        data !== null &&
        typeof data === "object" &&
        "message" in data &&
        typeof (data as { message: unknown }).message === "string"
      ) {
        return (data as { message: string }).message;
      }
    }
  }
  return "Something went wrong.";
}
