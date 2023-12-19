import {
  sendToBackground,
  sendToBackgroundViaRelay,
} from "@plasmohq/messaging";
import tape from "tape";
import type { TestRequest } from "~background/messages/testHandler";

/**
 * This function is a wrapper for the tape test function that will send the
 * failed test results to the background script.
 *
 * @returns the tape test function that can be called to run the tests
 */
export const getTestFunction = () => {
  const test = tape.createHarness();

  const s = test.createStream({
    objectMode: true,
  });

  s.on("data", async (row) => {
    if ("error" in row) {
      console.error(row);
      row.error = {
        message: row.error.message,
        stack: row.error.stack,
      };
      if (location.protocol !== "chrome-extension:") {
        await sendToBackgroundViaRelay<TestRequest>({
          name: "testHandler",
          body: {
            test: row,
          },
        });
      } else {
        await sendToBackground<TestRequest>({
          name: "testHandler",
          body: {
            test: row,
          },
        });
      }
    } else {
      console.log(row);
    }
  });
  return test;
};
