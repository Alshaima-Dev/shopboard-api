
export default function handler(
  request: Request,
  response: {
    status: (code: number) => {
      json: (data: object) => void;
    };
  }
) {
  const products = [
    {
      id: 1,
      name: "Leather Tote Bag",
      category: "Bags",
      price: 89,
      image: "images/products/leather-tote-bag.jpg",
      imageAlt:
        "Cognac brown leather tote bag with two long handles on an ivory background",
      translations: {
        en: {
          name: "Leather Tote Bag",
          description: "Cognac leather with two long handles.",
          alt: "Cognac brown leather tote bag with two long handles on an ivory background"
        },
        ar: {
          name: "حقيبة يد جلدية",
          description: "حقيبة بلون بني كونياك مع مقبضين طويلين.",
          alt: "حقيبة يد جلدية، حقيبة بلون بني كونياك مع مقبضين طويلين."
        },
        tr: {
          name: "Deri Omuz Çantası",
          description: "Konyak kahverengisi deri, iki uzun saplı.",
          alt: "Deri Omuz Çantası. Konyak kahverengisi deri, iki uzun saplı."
        }
      }
    }
  ];

  response.status(200).json(products);
}
