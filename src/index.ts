import { Octokit } from "@octokit/core";
import { VERSION } from "./version";

import { composeGetPastAndPresentIssueAssigneesLogins } from "./compose-get-past-and-present-issue-assignees-logins";
export {
  composeGetPastAndPresentIssueAssigneesLogins,
  GetPastAndPresentIssueAssigneesLoginsOptions,
} from "./compose-get-past-and-present-issue-assignees-logins";

/**
 * @param octokit Octokit instance
 */
export function getPastAndPresentIssueAssigneesLogins(octokit: Octokit) {
  return {
    getPastAndPresentIssueAssigneesLogins:
      composeGetPastAndPresentIssueAssigneesLogins.bind(null, octokit),
  };
}

getPastAndPresentIssueAssigneesLogins.VERSION = VERSION;
