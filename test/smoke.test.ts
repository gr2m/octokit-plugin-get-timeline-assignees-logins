import { Octokit } from "@octokit/core";

import {
  getTimelineAssigneesLogins,
  composeGetTimelineAssigneesLogins,
} from "../src";

describe("Smoke test", () => {
  it("{ getTimelineAssigneesLogins } export is a function", () => {
    expect(getTimelineAssigneesLogins).toBeInstanceOf(Function);
  });
  it("{ composeGetTimelineAssigneesLogins } export is a function", () => {
    expect(composeGetTimelineAssigneesLogins).toBeInstanceOf(Function);
  });

  it("getTimelineAssigneesLogins.VERSION is set", () => {
    expect(getTimelineAssigneesLogins.VERSION).toEqual("0.0.0-development");
  });

  it("Loads plugin", () => {
    expect(() => {
      const TestOctokit = Octokit.plugin(getTimelineAssigneesLogins);
      new TestOctokit();
    }).not.toThrow();
  });
});
