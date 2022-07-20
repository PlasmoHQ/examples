import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Search from "~search"

const queryClient = new QueryClient()

function IndexPopup() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  )
}

export default IndexPopup
