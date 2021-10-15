import { Octokit } from "@octokit/core";

import { getPastAndPresentIssueAssigneesLogins } from "../src";

const TestOctokit = Octokit.plugin(getPastAndPresentIssueAssigneesLogins);

describe("README example", () => {
  it("happy path", async () => {
    const octokit = new TestOctokit();

    octokit.hook.wrap("request", (_request, options) => {
      expect(options.variables).toStrictEqual({
        number: 1,
        owner: "octokit",
        repo: "rest",
      });

      return {
        headers: {},
        status: 200,
        url: "",
        data: {
          data: {
            repository: {
              issueOrPullRequest: {
                timelineItems: {
                  nodes: [
                    {
                      assignee: {
                        login: "gr2m",
                      },
                    },
                    {
                      assignee: {
                        login: "gr2m-test",
                      },
                    },
                    {
                      assignee: {
                        login: "gr2m",
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      };
    });

    const result = await octokit.getPastAndPresentIssueAssigneesLogins({
      owner: "octokit",
      repo: "rest",
      number: 1,
    });

    expect(result).toStrictEqual(["gr2m", "gr2m-test"]);
  });
});
