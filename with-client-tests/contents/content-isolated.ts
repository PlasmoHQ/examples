import type { PlasmoCSConfig } from "plasmo";
import expectedDom from "data-text:~assets/expectedHeader.html";
import { normalizeStructure } from "~contents-helpers/dom-structure";
import { getTestFunction } from "~contents-helpers/get-test-function";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  run_at: "document_idle",
};

const init = () => {
  const test = getTestFunction();

  test("Some valid examples from https://github.com/denysdovhan/wtfjs", (t) => {
    t.notOk(true == ![], "true == ![]");
    // @ts-ignore due to this always being false
    t.notOk(true == [], "true == []");
    t.ok(
      "b" + "a" + +"a" + "a" === "baNaNa",
      '"b" + "a" + +"a" + "a" === "baNaNa"'
    );
    t.notOk(Object.is(-0, 0), "Object.is(-0, 0)");
    t.ok(-0 === 0, "-0 === 0");
    t.end();
  });

  test("A test that should fail, for testing purposes", (t) => {
    t.deepEqual(
      {
        hi: false,
      },
      {
        hi: {
          bye: false,
        },
      },
      "hi should equal bye"
    );
    t.end();
  });

  test("timing test", (t) => {
    t.plan(2);

    t.equal(typeof Date.now, "function");
    var start = Date.now();

    setTimeout(() => {
      t.equal(Date.now() - start, 100, "Timing test should be 100ms");
    }, 100);
  });

  test("test using promises", async (t) => {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    });
    t.ok(result);
  });

  /**
   * This test only tests for the structure of the DOM, not the style or content.
   */
  test("testing the DOM structure of plasmo.com - May fail dependent on plasmo.com site changes", (t) => {
    const parser = new DOMParser();

    const currentMain = document.querySelector("header");
    const expectedMain = parser
      .parseFromString(expectedDom, "text/html")
      .querySelector("header");
    // Example usage
    t.ok(!!currentMain);

    const dom1 = normalizeStructure(currentMain);
    const dom2 = normalizeStructure(expectedMain);

    t.deepEqual(dom1, dom2, "DOM structures should be equal");
    t.end();
  });

  test("testing the DOM structure of plasmo.com, with an invalid structure", (t) => {
    const parser = new DOMParser();

    const currentMain = document.querySelector("header");
    const expectedMain = parser
      .parseFromString(
        `
    <header>
      <div>I should not be a valid header!</div>
    </header>
    `,
        "text/html"
      )
      .querySelector("header");

    const dom1 = normalizeStructure(currentMain);
    const dom2 = normalizeStructure(expectedMain);

    t.deepEqual(
      dom1,
      dom2,
      "DOM structures should be equal - this should fail"
    );
    t.end();
  });
};

init();
