import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import Search from "~search"

const queryClient = new QueryClient()

function IndexNewtab() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default IndexNewtab
