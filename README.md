# octokit-plugin-get-past-and-present-issue-assignees-logins

> Retrieve an array of GitHub user logins that have been assigned to a given issue at some point

[![@latest](https://img.shields.io/npm/v/octokit-plugin-get-past-and-present-issue-assignees-logins.svg)](https://www.npmjs.com/package/octokit-plugin-get-past-and-present-issue-assignees-logins)
[![Build Status](https://github.com/gr2m/octokit-plugin-get-past-and-present-issue-assignees-logins/workflows/Test/badge.svg)](https://github.com/gr2m/octokit-plugin-get-past-and-present-issue-assignees-logins/actions?query=workflow%3ATest+branch%3Amain)

## usage

<table>
<tbody valign=top align=left>
<tr><th>

Browsers

</th><td width=100%>

Load `octokit-plugin-get-past-and-present-issue-assignees-logins` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.skypack.dev](https://cdn.skypack.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { getPastAndPresentIssueAssigneesLogins } from "https://cdn.skypack.dev/octokit-plugin-get-past-and-present-issue-assignees-logins";
</script>
```

</td></tr>
<tr><th>

Node

</th><td>

Install with `npm install @octokit/core octokit-plugin-get-past-and-present-issue-assignees-logins`. Optionally replace `@octokit/core` with a compatible module

```js
const { Octokit } = require("@octokit/core");
const {
  getPastAndPresentIssueAssigneesLogins,
} = require("octokit-plugin-get-past-and-present-issue-assignees-logins");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(getPastAndPresentIssueAssigneesLogins);
const octokit = new MyOctokit({ auth: "secret123" });

const logins = await octokit.getPastAndPresentIssueAssigneesLogins({
  owner: "gr2m",
  repo: "octokit-plugin-get-past-and-present-issue-assignees-logins",
  issue_number: 1,
});
// `logins` is `["gr2m", "gr2m-test"]`
```

## Options

<table width="100%">
  <thead align=left>
    <tr>
      <th width=150>
        name
      </th>
      <th width=70>
        type
      </th>
      <th>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>option name</code>
      </th>
      <th>
        <code>option type</code>
      </th>
      <td>
        <strong>Required.</strong> Description here
      </td>
    </tr>
  </tbody>
</table>## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
