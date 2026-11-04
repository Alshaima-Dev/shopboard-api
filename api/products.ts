
export default function handler(
  request: Request,
  response: {
    status: (code: number) => {
      json: (data: object) => void;
    };
  }
) {
  response.status(200).json({
    message: "Welcome to my ShopBoard API",
    status: "success"
  });
}
