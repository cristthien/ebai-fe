import http from "@/lib/http";
import { AuctionListResponseType } from "@/schemaValidations/auction.schema";
import { API_VERSION } from "./version";
const auctionApiRequest = {
  //   getList: () => http.get<ProductListResType>("/products"),
  getAll: (page: number, limit: number) =>
    http.get<AuctionListResponseType>(
      `api/${API_VERSION}/auctions?page=${page}&limit=${limit}`
    ),
};

export default auctionApiRequest;