import { normalizedText } from "../../../assets/methods";
import { IDbProducts } from "../dbProducts/actions";
import { ISearchProductAction } from "./actions";
import { SEARCH_PRODUCT } from "./constants";

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
        const researchProducts = action.dbProducts.filter((product) => {
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
        action.dbProducts.forEach((product) => {
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
