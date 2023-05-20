import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from /*#__PURE__*/ "@tanstack/react-query-devtools"
import _ from "https://tally.so/widgets/embed.js"

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
