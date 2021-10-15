import { Octokit } from "@octokit/core";

const QUERY = `
  query($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
      issueOrPullRequest(number: $number) {
        ... on PullRequest {
          timelineItems(first: 100, itemTypes: ASSIGNED_EVENT) {
            nodes {
              ...assigneeLogin
            }
          }
        }
        ... on Issue {
          timelineItems(first: 100, itemTypes: ASSIGNED_EVENT) {
            nodes {
              ...assigneeLogin
            }
          }
        }
      }
    }
  }

  fragment assigneeLogin on AssignedEvent {
    assignee {
      ... on User {
        login
      }
    }
  }
`;

export type GetPastAndPresentIssueAssigneesLoginsOptions = {
  owner: string;
  repo: string;
  number: number;
};

export async function composeGetPastAndPresentIssueAssigneesLogins(
  octokit: Octokit,
  options: GetPastAndPresentIssueAssigneesLoginsOptions
) {
  const result = await octokit.graphql<{
    repository: {
      issueOrPullRequest: {
        timelineItems: {
          nodes: {
            assignee: {
              login: string;
            };
          }[];
        };
      };
    };
  }>(QUERY, options);

  const assignees =
    result.repository.issueOrPullRequest.timelineItems.nodes.map(
      ({ assignee }) => assignee.login
    );

  const uniqueAssignees = [...new Set(assignees)];
  return uniqueAssignees;
}
