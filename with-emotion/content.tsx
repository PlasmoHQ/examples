import { useState, useMemo } from "react"
import createCache from "@emotion/cache";
import styled from "@emotion/styled";
import { CacheProvider } from "@emotion/react";

const ROOT_TAGNAME = "unique-container-tagname";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
`;

const Link = styled.a`
  padding: 0.25rem;
  color: cornflowerblue;
`;

const getRootContainer = async () => {
  const container = document.createElement(ROOT_TAGNAME);
  document.body.prepend(container);
  container.attachShadow({ mode: "open" });

  return container.shadowRoot;
};

function IndexPopup() {
  const [data, setData] = useState("");
  const styleCache = useMemo(() => {
    const $mountPoint = document.querySelector(ROOT_TAGNAME);
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

export { getRootContainer };
