import http from "@/lib/http";
import { BidsListResType } from "@/schemaValidations/bids.schema";
const bidApiRequest = {
  //   getList: () => http.get<ProductListResType>("/products"),
  getAll: (slug: string) => http.get<BidsListResType>(`api/v1/bids/${slug}`),
};

export default bidApiRequest;
