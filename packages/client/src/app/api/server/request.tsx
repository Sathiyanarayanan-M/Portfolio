import * as Axios from "axios";
import { setupCache } from "axios-cache-adapter";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const client = Axios.default.create({
  baseURL: Constants.API_CONFIG.baseUrl,
  adapter: cache.adapter,
});

export const Request = async (options: StringObject, data?: any) => {
  const { getFromLocalStorage } = Hooks.useLocalStorage();
  return client({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: getFromLocalStorage("user") || "",
    },
    ...options,
    data,
  });
};

export const useQueryRequest = ({
  queryParams = [],
  requestOptions,
  requestData,
  reactQueryoptions,
}: IUseQueryRequest.Props) => {
  return ReactQuery.useQuery(
    queryParams,
    () => Request(requestOptions, requestData),
    reactQueryoptions
  );
};
export const useMutationRequest = ({
  requestOptions,
  requestCallbacks,
}: IUseQueryRequest.Props): IUseQueryRequest.MutationResult => {
  return ReactQuery.useMutation(
    (requestData: any) => Request(requestOptions, requestData),
    requestCallbacks
  );
};

export namespace IUseQueryRequest {
  export interface Props {
    queryParams?: string[];
    requestOptions: StringObject;
    requestData?: any;
    reactQueryoptions?:
      | Omit<
          ReactQuery.UseQueryOptions<any, unknown, any, string[]>,
          "queryKey" | "queryFn"
        >
      | undefined;
    requestCallbacks?: ReactQuery.MutationOptions;
  }

  export type MutationResult = ReactQuery.UseMutationResult<
    Axios.AxiosResponse<any, any>,
    unknown,
    any,
    unknown
  >;
}
