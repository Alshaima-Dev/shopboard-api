import { products } from "../data/products";

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (data: object) => void;
  end: () => void;
};

export default function handler(
  request: Request,
  response: ApiResponse
): void {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    response.status(405).json({
      error: "Method not allowed",
    });
    return;
  }

  response.status(200).json(products);
}