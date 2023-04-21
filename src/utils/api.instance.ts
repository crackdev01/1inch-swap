// import axios, { AxiosError } from "axios";
import axios, { AxiosError } from "axios";

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function makeAPIRequst(
  url: string,
  method: ApiMethod = "GET",
  body: any = {},
  isTokenIncluded: boolean = true
): Promise<any> {
  let headers: {
    Authorization?: string;
  } = {};

  if (isTokenIncluded) {
    headers.Authorization = `Bearer ${localStorage.getItem("token") ?? ""}`;
  }

  try {
    const response = await axios({
      url: `${process.env.REACT_APP_1INCH_API}/${url}`,
      method: method,
      data: body,
      headers: headers,
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (reasonCode === "UNAUTHORIZED") {
        localStorage.removeItem("token");
      }
    }

    throw error;
  }
}
