import { Octokit } from "@octokit/core";
import { VERSION } from "./version";

import { composeGetTimelineAssigneesLogins } from "./compose-get-timeline-assignees-logins";
export {
  composeGetTimelineAssigneesLogins,
  GetTimelineAssigneesLoginsOptions,
} from "./compose-get-timeline-assignees-logins";

/**
 * @param octokit Octokit instance
 */
export function getTimelineAssigneesLogins(octokit: Octokit) {
  return {
    getTimelineAssigneesLogins: composeGetTimelineAssigneesLogins.bind(
      null,
      octokit
    ),
  };
}

getTimelineAssigneesLogins.VERSION = VERSION;
