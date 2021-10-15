# octokit-plugin-get-timeline-assignees-logins

> Retrieve an array of GitHub user logins that have been assigned to a given issue or pull request at some point

[![@latest](https://img.shields.io/npm/v/octokit-plugin-get-timeline-assignees-logins.svg)](https://www.npmjs.com/package/octokit-plugin-get-timeline-assignees-logins)
[![Build Status](https://github.com/gr2m/octokit-plugin-get-timeline-assignees-logins/workflows/Test/badge.svg)](https://github.com/gr2m/octokit-plugin-get-timeline-assignees-logins/actions?query=workflow%3ATest+branch%3Amain)

## usage

<table>
<tbody valign=top align=left>
<tr><th>

Browsers

</th><td width=100%>

Load `octokit-plugin-get-timeline-assignees-logins` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.skypack.dev](https://cdn.skypack.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { getTimelineAssigneesLogins } from "https://cdn.skypack.dev/octokit-plugin-get-timeline-assignees-logins";
</script>
```

</td></tr>
<tr><th>

Node

</th><td>

Install with `npm install @octokit/core octokit-plugin-get-timeline-assignees-logins`. Optionally replace `@octokit/core` with a compatible module

```js
const { Octokit } = require("@octokit/core");
const {
  getTimelineAssigneesLogins,
} = require("octokit-plugin-get-timeline-assignees-logins");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(getTimelineAssigneesLogins);
const octokit = new MyOctokit({ auth: "secret123" });

const logins = await octokit.getTimelineAssigneesLogins({
  owner: "gr2m",
  repo: "octokit-plugin-get-timeline-assignees-logins",
  number: 1,
});
// `logins` is `["gr2m", "gr2m-test"]`
```

If you want to utilize this plugin with an existing `octokit` instance, use `composeGetTimelineAssigneesLogins` instead

```js
const logins = await composeGetTimelineAssigneesLogins(octokit, {
  owner: "gr2m",
  repo: "octokit-plugin-get-timeline-assignees-logins",
  number: 1,
});
```

**Note**: This plugin only retrieves the first 100 assign events. If you need to retrieve more than 100 assign events, please file an issue. I'm curious to learn about your use case. Retrieving more than 100 is a tad complicated, but not impossible.

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
        <code>owner</code>
      </th>
      <th>
        <code>string</code>
      </th>
      <td>
        <strong>Required.</strong> Repository owner
      </td>
    </tr>
    <tr>
      <th>
        <code>repo</code>
      </th>
      <th>
        <code>string</code>
      </th>
      <td>
        <strong>Required.</strong> Repository name
      </td>
    </tr>
    <tr>
      <th>
        <code>number</code>
      </th>
      <th>
        <code>number</code>
      </th>
      <td>
        <strong>Required.</strong> Issue or pull request number
      </td>
    </tr>
  </tbody>
</table>

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
