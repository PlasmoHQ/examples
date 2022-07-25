import { useState, useMemo } from "react"
import createCache from "@emotion/cache";
import styled from "@emotion/styled";
import { CacheProvider } from "@emotion/react";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Link = styled.a`
  padding: 0.25rem;
  color: cornflowerblue;
`;

function IndexPopup() {
  const [data, setData] = useState("");
  const styleCache = useMemo(() => {
    const $mountPoint = document.getElementById("root");
    const cache = createCache({
      key: "emotion-cache",
      prepend: true,
      container: $mountPoint.shadowRoot,
    });

    return cache;
  }, []);

  return (
    <CacheProvider value={styleCache}>
    <Container>
      <h2>
        Welcome to your{" "}
        <Link href="https://www.plasmo.com" target="_blank">
          Plasmo
        </Link>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <Link href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Link>
    </Container>
    </CacheProvider>
  )
}

export default IndexPopup;
