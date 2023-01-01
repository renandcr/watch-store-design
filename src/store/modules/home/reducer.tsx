import { normalizedText } from "../../../assets/methods";
import { IDbProducts } from "../dbProducts/actions";
import { ISearchProductAction } from "./actions";
import { SEARCH_PRODUCT } from "./constants";

const homeReducer = (
  state: Array<IDbProducts> = JSON.parse(
    localStorage.getItem("@watchstore: researchedProducts") ||
      JSON.stringify("")
  ) || [],
  action: ISearchProductAction
) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      const receivedText = normalizedText(action.payload);

      if (receivedText === "!h@e#n$r%y&" || receivedText === undefined) {
        localStorage.setItem(
          "@watchstore: researchedProducts",
          JSON.stringify([])
        );
        return [];
      }

      const listOfWords = receivedText.split(" ");
      let searchByGenre = false;
      const productsFound = action.dbProducts.filter((current) => {
        if (current.product.genre === listOfWords[0]) {
          searchByGenre = true;
          return current;
        }

        if (searchByGenre) {
          return null;
        } else {
          const productDescription = normalizedText(
            current.product.description
          )!.split(" ");
          const compatibleWords = productDescription.filter((current) => {
            return listOfWords.find((word) => word === current);
          });
          return compatibleWords.length === listOfWords.length;
        }
      });

      if (productsFound.length) {
        localStorage.setItem(
          "@watchstore: researchedProducts",
          JSON.stringify(productsFound)
        );
        return productsFound;
      } else {
        localStorage.setItem(
          "@watchstore: researchedProducts",
          JSON.stringify([
            { no_result: `Nenhum resultado para ${action.payload}` },
          ])
        );
        return [{ no_result: `Nenhum resultado para ${action.payload}` }];
      }
    default:
      return state;
  }
};

export default homeReducer;
