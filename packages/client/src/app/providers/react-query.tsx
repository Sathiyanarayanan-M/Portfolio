import * as ReactQuery from "react-query";

export const ReactQueryProvider = ({ children }: Child) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
