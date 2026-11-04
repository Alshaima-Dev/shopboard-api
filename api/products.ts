
export default function handler(
  request: Request
): Response {
  return Response.json({
    message: "Welcome to my ShopBoard API",
    status: "success"
  });
}
