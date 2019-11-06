import PostCSS from "postcss";

import PrefixWrap from "../";
import PrefixAssert from "./support/PrefixAssert";

describe("Acceptance: Standard Prefixing", () => {
  // Generate a postcss instance with our plugin enabled.
  const postCSS = PostCSS([PrefixWrap(".my-container")]);
  const fixtures = __dirname + "/fixtures";

  it("adds prefix class for tags", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/standard-tags-raw.css",
      fixtures + "/standard-tags-expected.css"
    );
  });

  it("adds prefix class for ids", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/standard-ids-raw.css",
      fixtures + "/standard-ids-expected.css"
    );
  });

  it("adds prefix class for classes", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/standard-classes-raw.css",
      fixtures + "/standard-classes-expected.css"
    );
  });

  it("adds prefix class for multiple classes", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/multiple-classes-raw.css",
      fixtures + "/multiple-classes-expected.css"
    );
  });

  // @see https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)
  it("adds prefix class for universal selectors", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/standard-universal-selectors-raw.css",
      fixtures + "/standard-universal-selectors-expected.css"
    );
  });

  // @see https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
  it("adds prefix class for attribute selectors", () => {
    PrefixAssert.actualMatchesExpectedAfterPrefixWrap(
      postCSS,
      fixtures + "/standard-attribute-selectors-raw.css",
      fixtures + "/standard-attribute-selectors-expected.css"
    );
  });
});
