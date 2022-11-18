import { normalizedText } from "../../../assets/methods";
import { ISearchProductAction } from "./actions";
import { SEARCH_PRODUCT } from "./constants";
import { IDbProducts } from "../dbProducts";
import { dbProducts } from "../dbProducts";

const homeReducer = (
  state: Array<IDbProducts> = JSON.parse(
    localStorage.getItem("@watchstore: researchProducts") || JSON.stringify("")
  ) || [],
  action: ISearchProductAction
) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      const result: IDbProducts | any = [];
      const normalizedTextTwo = normalizedText(action.payload);
      const search = action.payload.split(" ");

      if (search.length > 1) {
        const researchProducts = dbProducts.filter((product) => {
          const normalizedTextOne = normalizedText(product.description);
          return normalizedTextTwo === normalizedTextOne;
        });

        if (researchProducts) {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify(researchProducts)
          );
          return researchProducts;
        }
      } else {
        dbProducts.forEach((product) => {
          let arrayString = product.description.split(" ");
          arrayString.forEach((word) => {
            const normalizedTextOne = normalizedText(word);

            if (normalizedTextOne === normalizedTextTwo) result.push(product);
          });
        });

        if (result) {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify(result)
          );

          return result;
        }
      }

      return state;
    default:
      return state;
  }
};

export default homeReducer;
