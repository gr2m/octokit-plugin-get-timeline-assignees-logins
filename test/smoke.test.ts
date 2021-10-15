import { Octokit } from "@octokit/core";

import {
  getPastAndPresentIssueAssigneesLogins,
  composeGetPastAndPresentIssueAssigneesLogins,
} from "../src";

describe("Smoke test", () => {
  it("{ getPastAndPresentIssueAssigneesLogins } export is a function", () => {
    expect(getPastAndPresentIssueAssigneesLogins).toBeInstanceOf(Function);
  });
  it("{ composeGetPastAndPresentIssueAssigneesLogins } export is a function", () => {
    expect(composeGetPastAndPresentIssueAssigneesLogins).toBeInstanceOf(
      Function
    );
  });

  it("getPastAndPresentIssueAssigneesLogins.VERSION is set", () => {
    expect(getPastAndPresentIssueAssigneesLogins.VERSION).toEqual(
      "0.0.0-development"
    );
  });

  it("Loads plugin", () => {
    expect(() => {
      const TestOctokit = Octokit.plugin(getPastAndPresentIssueAssigneesLogins);
      new TestOctokit();
    }).not.toThrow();
  });
});
