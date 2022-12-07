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
      const result: Array<IDbProducts> = [];
      const receivedText = normalizedText(action.payload);
      const longText = action.payload.split(" ");

      if (receivedText === "!h@e#n$r%y&" || receivedText === undefined) {
        localStorage.setItem(
          "@watchstore: researchProducts",
          JSON.stringify([])
        );
        return [];
      }

      if (longText.length > 1) {
        const researchProducts = action.dbProducts.filter((product) => {
          const productDescriptionText = normalizedText(product.description);
          return receivedText === productDescriptionText;
        });

        if (researchProducts.length) {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify(researchProducts)
          );
          return researchProducts;
        } else {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify([{ no_result: "Nenhum resultado!" }])
          );
          return [{ no_result: "Nenhum resultado!" }];
        }
      } else {
        action.dbProducts.forEach((product) => {
          if (receivedText === product.genre) result.push(product);
          let arrayString = product.description.split(" ");
          arrayString.forEach((word) => {
            const productDescriptionText = normalizedText(word);

            if (productDescriptionText === receivedText) result.push(product);
          });
        });

        if (result.length) {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify(result)
          );

          return result;
        } else {
          localStorage.setItem(
            "@watchstore: researchProducts",
            JSON.stringify([{ no_result: "Nenhum resultado!" }])
          );
          return [{ no_result: "Nenhum resultado!" }];
        }
      }

    default:
      return state;
  }
};

export default homeReducer;
