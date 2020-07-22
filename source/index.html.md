---
title: API Reference v1.0.5
language_tabs:
  - shell: Shell
  - javascript--node: Node.js
  - javascript: JavaScript
  - python: Python
  - ruby: Ruby
toc_footers:
  - <a href="http://swagger.io">Find out more about Swagger</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-reference">API Reference v1.0.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a prototype to display Sentry's API using Swagger.

Base URLs:

* <a href="https://sentry.io">https://sentry.io</a>

<a href="http://sentry.io/terms/">Terms of service</a>
Email: <a href="mailto:partners@sentry.io">Support</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (auth_token)
    - Parameter Name: **Auth Token**, in: header. 

<h1 id="api-reference-teams">Teams</h1>

Everything about Teams.

<a href="https://github.com/getsentry/sentry-docs/issues/new/?title=API%20Documentation%20Error:%20/api/teams/&template=api_error_template.md">Found an error? Let us know.</a>

## List an Organization's Teams

<a id="opIdList an Organization's Teams"></a>

> Code samples

```shell
curl --request GET \
  --url https://sentry.io/api/0/organizations/organization_slug/teams/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY'
```

```javascript--node
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/organizations/organization_slug/teams/",
  "headers": {
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```javascript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://sentry.io/api/0/organizations/organization_slug/teams/");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

headers = {
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("GET", "/api/0/organizations/organization_slug/teams/", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/organizations/organization_slug/teams/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'

response = http.request(request)
puts response.read_body
```

`GET /api/0/organizations/{organization_slug}/teams/`

Returns a list of teams bound to a organization.

<h3 id="list-an-organization's-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization for which the teams should be listed.|

> Example responses

> 200 Response

```json
[
  {
    "avatar": {
      "avatarType": "letter_avatar",
      "avatarUuid": null
    },
    "dateCreated": "2018-11-06T21:20:08.115Z",
    "hasAccess": true,
    "id": "3",
    "isMember": true,
    "isPending": false,
    "memberCount": 1,
    "organization": {
      "avatar": {
        "avatarType": "letter_avatar",
        "avatarUuid": null
      },
      "dateCreated": "2018-11-06T21:20:08.115Z",
      "id": "3",
      "isEarlyAdopter": false,
      "name": "The Interstellar Jurisdiction",
      "require2FA": false,
      "slug": "the-interstellar-jurisdiction",
      "status": {
        "id": "active",
        "name": "active"
      }
    },
    "name": "Ancient Gabelers",
    "projects": [
      {
        "avatar": {
          "avatarType": "letter_avatar",
          "avatarUuid": null
        },
        "color": "#bf5b3f",
        "dateCreated": "2018-11-06T21:19:58.536Z",
        "features": [
          "releases",
          "sample-events",
          "minidump",
          "servicehooks",
          "rate-limits",
          "data-forwarding"
        ],
        "firstEvent": null,
        "hasAccess": true,
        "id": "4",
        "isBookmarked": false,
        "isInternal": false,
        "isMember": true,
        "isPublic": false,
        "name": "Prime Mover",
        "platform": "python",
        "slug": "prime-mover",
        "status": "active"
      }
    ],
    "slug": "ancient-gabelers"
  }
]
```

<h3 id="list-an-organization's-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid organization_slug value.|None|

<h3 id="list-an-organization's-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|
|» avatar|[Avatar](#schemaavatar)|false|none|none|
|»» avatarType|string|false|none|none|
|»» avatarUuid|string|false|none|none|
|» dateCreated|string(date-time)|false|none|none|
|» hasAccess|boolean|false|none|none|
|» id|string|false|none|none|
|» isMember|boolean|false|none|none|
|» isPending|boolean|false|none|none|
|» memberCount|integer(int64)|false|none|none|
|» organization|[Organization](#schemaorganization)|false|none|none|
|»» avatar|[Avatar](#schemaavatar)|false|none|none|
|»» dateCreated|string(date-time)|false|none|none|
|»» id|string|false|none|none|
|»» isEarlyAdopter|boolean|false|none|none|
|»» name|string|false|none|none|
|»» require2FA|boolean|false|none|none|
|»» slug|string|false|none|none|
|»» status|[OrganizationStatus](#schemaorganizationstatus)|false|none|none|
|»»» id|string|false|none|none|
|»»» name|string|false|none|none|
|» name|string|false|none|none|
|» projects|[[Project](#schemaproject)]|false|none|none|
|»» avatar|[Avatar](#schemaavatar)|false|none|none|
|»» color|string|false|none|none|
|»» dateCreated|string(date-time)|false|none|none|
|»» features|[string]|false|none|none|
|»» firstEvent|object|false|none|none|
|»» hasAccess|boolean|false|none|none|
|»» id|string|false|none|none|
|»» isBookmarked|boolean|false|none|none|
|»» isInternal|boolean|false|none|none|
|»» isMember|boolean|false|none|none|
|»» isPublic|boolean|false|none|none|
|»» name|string|false|none|none|
|»» platform|string|false|none|none|
|»» slug|string|false|none|none|
|»» status|string|false|none|none|
|» slug|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Create a New Team

<a id="opIdCreate a New Team"></a>

> Code samples

```shell
curl --request POST \
  --url https://sentry.io/api/0/organizations//teams/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY' \
  --header 'content-type: application/json' \
  --data '{"name":"Ancient Gabelers","slug":"ancient-gabelers"}'
```

```javascript--node
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/organizations//teams/",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({name: 'Ancient Gabelers', slug: 'ancient-gabelers'}));
req.end();
```

```javascript
var data = JSON.stringify({
  "name": "Ancient Gabelers",
  "slug": "ancient-gabelers"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sentry.io/api/0/organizations//teams/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

payload = "{\"name\":\"Ancient Gabelers\",\"slug\":\"ancient-gabelers\"}"

headers = {
    'content-type': "application/json",
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("POST", "/api/0/organizations//teams/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/organizations//teams/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'
request.body = "{\"name\":\"Ancient Gabelers\",\"slug\":\"ancient-gabelers\"}"

response = http.request(request)
puts response.read_body
```

`POST /api/0/organizations/{organization_slug}/teams/`

Create a new team bound to an organization. Only the name of the team is needed to create it, the slug can be auto generated.

> Body parameter

```json
{
  "name": "Ancient Gabelers",
  "slug": "ancient-gabelers"
}
```

<h3 id="create-a-new-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug |path|string|true|The slug of the organization the team should be created for.|
|body|body|object|true|none|
|» name|body|string|true|The name of the team.|
|» slug|body|string|false|The optional slug for this team. If not provided it will be auto generated from the name|

> Example responses

> 200 Response

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "dateCreated": "2018-11-06T21:20:08.115Z",
  "hasAccess": true,
  "id": "3",
  "isMember": true,
  "isPending": false,
  "memberCount": 1,
  "organization": {
    "avatar": {
      "avatarType": "letter_avatar",
      "avatarUuid": null
    },
    "dateCreated": "2018-11-06T21:20:08.115Z",
    "id": "3",
    "isEarlyAdopter": false,
    "name": "The Interstellar Jurisdiction",
    "require2FA": false,
    "slug": "the-interstellar-jurisdiction",
    "status": {
      "id": "active",
      "name": "active"
    }
  },
  "name": "Ancient Gabelers",
  "projects": [
    {
      "avatar": {
        "avatarType": "letter_avatar",
        "avatarUuid": null
      },
      "color": "#bf5b3f",
      "dateCreated": "2018-11-06T21:19:58.536Z",
      "features": [
        "releases",
        "sample-events",
        "minidump",
        "servicehooks",
        "rate-limits",
        "data-forwarding"
      ],
      "firstEvent": null,
      "hasAccess": true,
      "id": "4",
      "isBookmarked": false,
      "isInternal": false,
      "isMember": true,
      "isPublic": false,
      "name": "Prime Mover",
      "platform": "python",
      "slug": "prime-mover",
      "status": "active"
    }
  ],
  "slug": "ancient-gabelers"
}
```

<h3 id="create-a-new-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|[Team](#schemateam)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Retrieve a Team

<a id="opIdRetrieve a Team"></a>

> Code samples

```shell
curl --request GET \
  --url https://sentry.io/api/0/teams/string/string/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY'
```

```javascript--node
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/",
  "headers": {
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```javascript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://sentry.io/api/0/teams/string/string/");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

headers = {
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("GET", "/api/0/teams/string/string/", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'

response = http.request(request)
puts response.read_body
```

`GET /api/0/teams/{organization_slug}/{team_slug}/`

Return details on an individual team.

<h3 id="retrieve-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to get.|

> Example responses

> 200 Response

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "dateCreated": "2018-11-06T21:20:08.115Z",
  "hasAccess": true,
  "id": "3",
  "isMember": true,
  "isPending": false,
  "memberCount": 1,
  "organization": {
    "avatar": {
      "avatarType": "letter_avatar",
      "avatarUuid": null
    },
    "dateCreated": "2018-11-06T21:20:08.115Z",
    "id": "3",
    "isEarlyAdopter": false,
    "name": "The Interstellar Jurisdiction",
    "require2FA": false,
    "slug": "the-interstellar-jurisdiction",
    "status": {
      "id": "active",
      "name": "active"
    }
  },
  "name": "Ancient Gabelers",
  "projects": [
    {
      "avatar": {
        "avatarType": "letter_avatar",
        "avatarUuid": null
      },
      "color": "#bf5b3f",
      "dateCreated": "2018-11-06T21:19:58.536Z",
      "features": [
        "releases",
        "sample-events",
        "minidump",
        "servicehooks",
        "rate-limits",
        "data-forwarding"
      ],
      "firstEvent": null,
      "hasAccess": true,
      "id": "4",
      "isBookmarked": false,
      "isInternal": false,
      "isMember": true,
      "isPublic": false,
      "name": "Prime Mover",
      "platform": "python",
      "slug": "prime-mover",
      "status": "active"
    }
  ],
  "slug": "ancient-gabelers"
}
```

<h3 id="retrieve-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|[Team](#schemateam)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid organization_slug or team_slug values.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Update a Team

<a id="opIdUpdate a Team"></a>

> Code samples

```shell
curl --request PUT \
  --url https://sentry.io/api/0/teams/string/string/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY' \
  --header 'content-type: application/json' \
  --data '{"name":"The Inflated Philosophers","slug":"the-inflated-philosophers"}'
```

```javascript--node
var http = require("https");

var options = {
  "method": "PUT",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({name: 'The Inflated Philosophers', slug: 'the-inflated-philosophers'}));
req.end();
```

```javascript
var data = JSON.stringify({
  "name": "The Inflated Philosophers",
  "slug": "the-inflated-philosophers"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://sentry.io/api/0/teams/string/string/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

payload = "{\"name\":\"The Inflated Philosophers\",\"slug\":\"the-inflated-philosophers\"}"

headers = {
    'content-type': "application/json",
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("PUT", "/api/0/teams/string/string/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Put.new(url)
request["content-type"] = 'application/json'
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'
request.body = "{\"name\":\"The Inflated Philosophers\",\"slug\":\"the-inflated-philosophers\"}"

response = http.request(request)
puts response.read_body
```

`PUT /api/0/teams/{organization_slug}/{team_slug}/`

Update various attributes and configurable settings for the given team.

> Body parameter

```json
{
  "name": "The Inflated Philosophers",
  "slug": "the-inflated-philosophers"
}
```

<h3 id="update-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to get.|
|body|body|object|true|none|
|» name|body|string|true|The new name for the team.|
|» slug|body|string|false|A new slug for the team. It has to be unique and available.|

> Example responses

> Success.

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "dateCreated": "2018-11-06T21:20:08.115Z",
  "hasAccess": true,
  "id": "3",
  "isMember": false,
  "isPending": false,
  "memberCount": 1,
  "name": "The Inflated Philosophers",
  "slug": "the-inflated-philosophers"
}
```

<h3 id="update-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|[Team](#schemateam)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Delete a Team

<a id="opIdDelete a Team"></a>

> Code samples

```shell
curl --request DELETE \
  --url https://sentry.io/api/0/teams/string/string/ \
  --header 'auth token: API_KEY'
```

```javascript--node
var http = require("https");

var options = {
  "method": "DELETE",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/",
  "headers": {
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```javascript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "https://sentry.io/api/0/teams/string/string/");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

headers = { 'auth token': "API_KEY" }

conn.request("DELETE", "/api/0/teams/string/string/", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Delete.new(url)
request["auth token"] = 'API_KEY'

response = http.request(request)
puts response.read_body
```

`DELETE /api/0/teams/{organization_slug}/{team_slug}/`

Schedules a team for deletion.

Note: Deletion happens asynchronously and therefor is not immediate. However once deletion has begun the state of a project changes and will be hidden from most public views.

<h3 id="delete-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to get.|

<h3 id="delete-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid organization_slug or team_slug value.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Team not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## List a Team's Projects

<a id="opIdList a Team's Projects"></a>

> Code samples

```shell
curl --request GET \
  --url https://sentry.io/api/0/teams/string/string/projects/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY'
```

```javascript--node
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/projects/",
  "headers": {
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```javascript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://sentry.io/api/0/teams/string/string/projects/");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

headers = {
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("GET", "/api/0/teams/string/string/projects/", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/projects/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'

response = http.request(request)
puts response.read_body
```

`GET /api/0/teams/{organization_slug}/{team_slug}/projects/`

Return a list of projects bound to a team.

<h3 id="list-a-team's-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to get.|

> Example responses

> 200 Response

```json
[
  {
    "avatar": {
      "avatarType": "letter_avatar",
      "avatarUuid": null
    },
    "color": "#bf5b3f",
    "dateCreated": "2018-11-06T21:19:58.536Z",
    "features": [
      "releases",
      "sample-events",
      "minidump",
      "servicehooks",
      "rate-limits",
      "data-forwarding"
    ],
    "firstEvent": null,
    "hasAccess": true,
    "id": "4",
    "isBookmarked": false,
    "isInternal": false,
    "isMember": true,
    "isPublic": false,
    "name": "Prime Mover",
    "platform": "python",
    "slug": "prime-mover",
    "status": "active"
  }
]
```

<h3 id="list-a-team's-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid organization_slug or team_slug values.|None|

<h3 id="list-a-team's-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Project](#schemaproject)]|false|none|none|
|» avatar|[Avatar](#schemaavatar)|false|none|none|
|»» avatarType|string|false|none|none|
|»» avatarUuid|string|false|none|none|
|» color|string|false|none|none|
|» dateCreated|string(date-time)|false|none|none|
|» features|[string]|false|none|none|
|» firstEvent|object|false|none|none|
|» hasAccess|boolean|false|none|none|
|» id|string|false|none|none|
|» isBookmarked|boolean|false|none|none|
|» isInternal|boolean|false|none|none|
|» isMember|boolean|false|none|none|
|» isPublic|boolean|false|none|none|
|» name|string|false|none|none|
|» platform|string|false|none|none|
|» slug|string|false|none|none|
|» status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Create a New Project

<a id="opIdCreate a New Project"></a>

> Code samples

```shell
curl --request POST \
  --url https://sentry.io/api/0/teams/string/string/projects/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY' \
  --header 'content-type: application/json' \
  --data '{"name":"The Spoiled Yoghurt","slug":"the-spoiled-yoghurt"}'
```

```javascript--node
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/projects/",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({name: 'The Spoiled Yoghurt', slug: 'the-spoiled-yoghurt'}));
req.end();
```

```javascript
var data = JSON.stringify({
  "name": "The Spoiled Yoghurt",
  "slug": "the-spoiled-yoghurt"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sentry.io/api/0/teams/string/string/projects/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

payload = "{\"name\":\"The Spoiled Yoghurt\",\"slug\":\"the-spoiled-yoghurt\"}"

headers = {
    'content-type': "application/json",
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("POST", "/api/0/teams/string/string/projects/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/projects/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'
request.body = "{\"name\":\"The Spoiled Yoghurt\",\"slug\":\"the-spoiled-yoghurt\"}"

response = http.request(request)
puts response.read_body
```

`POST /api/0/teams/{organization_slug}/{team_slug}/projects/`

Create a new project bound to a team.

> Body parameter

```json
{
  "name": "The Spoiled Yoghurt",
  "slug": "the-spoiled-yoghurt"
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to create a new project for.|
|body|body|object|true|none|
|» name|body|string|true|The name for the new project.|
|» slug|body|string|false|Optionally a slug for the new project. If it’s not provided a slug is generated from the name.|

> Example responses

> 201 Response

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "color": "#bf5b3f",
  "dateCreated": "2018-11-06T21:19:58.536Z",
  "features": [
    "releases",
    "sample-events",
    "minidump",
    "servicehooks",
    "rate-limits",
    "data-forwarding"
  ],
  "firstEvent": null,
  "hasAccess": true,
  "id": "4",
  "isBookmarked": false,
  "isInternal": false,
  "isMember": true,
  "isPublic": false,
  "name": "Prime Mover",
  "platform": "python",
  "slug": "prime-mover",
  "status": "active"
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created.|[Project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

## Retrieve Event Counts for a Team

<a id="opIdRetrieve Event Counts for a Team"></a>

> Code samples

```shell
curl --request GET \
  --url https://sentry.io/api/0/teams/string/string/stats/ \
  --header 'accept: application/json' \
  --header 'auth token: API_KEY'
```

```javascript--node
var http = require("https");

var options = {
  "method": "GET",
  "hostname": "sentry.io",
  "port": null,
  "path": "/api/0/teams/string/string/stats/",
  "headers": {
    "accept": "application/json",
    "auth token": "API_KEY"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
```

```javascript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://sentry.io/api/0/teams/string/string/stats/");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("auth token", "API_KEY");

xhr.send(data);
```

```python
import http.client

conn = http.client.HTTPSConnection("sentry.io")

headers = {
    'accept': "application/json",
    'auth token': "API_KEY"
    }

conn.request("GET", "/api/0/teams/string/string/stats/", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://sentry.io/api/0/teams/string/string/stats/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["accept"] = 'application/json'
request["auth token"] = 'API_KEY'

response = http.request(request)
puts response.read_body
```

`GET /api/0/teams/{organization_slug}/{team_slug}/stats/`

*Caution
This endpoint may change in the future without notice.*

Return a set of points representing a normalized timestamp and the number of events seen in the period.

Query ranges are limited to Sentry’s configured time-series resolutions.

<h3 id="retrieve-event-counts-for-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_slug|path|string|true|The slug of the organization the team belongs to.|
|team_slug|path|string|true|The slug of the team to get.|
|stat|query|string|false|the name of the stat to query `("received", "rejected")`|
|since|query|string(date-time)|false|A timestamp to set the start of the query in seconds since UNIX epoch.|
|until|query|string(date-time)|false|A timestamp to set the end of the query in seconds since UNIX epoch.|
|resolution|query|string|false|An explicit resolution to search for (one of `10s`, `1h`, and `1d`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|stat|received|
|stat|rejected|
|resolution|10s|
|resolution|1h|
|resolution|1d|

> Example responses

> 200 Response

```json
[
  [
    1541455200,
    3302
  ],
  [
    1541458800,
    3832
  ],
  [
    1541462400,
    3669
  ],
  [
    1541466000,
    3533
  ],
  [
    1541469600,
    3499
  ],
  [
    1541473200,
    3201
  ],
  [
    1541476800,
    3769
  ],
  [
    1541480400,
    2706
  ],
  [
    1541484000,
    2698
  ],
  [
    1541487600,
    3747
  ],
  [
    1541491200,
    3261
  ],
  [
    1541494800,
    2860
  ],
  [
    1541498400,
    4350
  ],
  [
    1541502000,
    2924
  ],
  [
    1541505600,
    3389
  ],
  [
    1541509200,
    2931
  ],
  [
    1541512800,
    3132
  ],
  [
    1541516400,
    3213
  ],
  [
    1541520000,
    3650
  ],
  [
    1541523600,
    3096
  ],
  [
    1541527200,
    3845
  ],
  [
    1541530800,
    3545
  ],
  [
    1541534400,
    2880
  ],
  [
    1541538000,
    4057
  ]
]
```

<h3 id="retrieve-event-counts-for-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid organization_slug or team_slug values.|None|

<h3 id="retrieve-event-counts-for-a-team-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_token
</aside>

# Schemas

<h2 id="tocS_Avatar">Avatar</h2>
<!-- backwards compatibility -->
<a id="schemaavatar"></a>
<a id="schema_Avatar"></a>
<a id="tocSavatar"></a>
<a id="tocsavatar"></a>

```json
{
  "avatarType": "letter_avatar",
  "avatarUuid": null
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarType|string|false|none|none|
|avatarUuid|string|false|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "color": "#bf5b3f",
  "dateCreated": "2018-11-06T21:19:58.536Z",
  "features": [
    "releases",
    "sample-events",
    "minidump",
    "servicehooks",
    "rate-limits",
    "data-forwarding"
  ],
  "firstEvent": null,
  "hasAccess": true,
  "id": "4",
  "isBookmarked": false,
  "isInternal": false,
  "isMember": true,
  "isPublic": false,
  "name": "Prime Mover",
  "platform": "python",
  "slug": "prime-mover",
  "status": "active"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|[Avatar](#schemaavatar)|false|none|none|
|color|string|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|features|[string]|false|none|none|
|firstEvent|object|false|none|none|
|hasAccess|boolean|false|none|none|
|id|string|false|none|none|
|isBookmarked|boolean|false|none|none|
|isInternal|boolean|false|none|none|
|isMember|boolean|false|none|none|
|isPublic|boolean|false|none|none|
|name|string|false|none|none|
|platform|string|false|none|none|
|slug|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_OrganizationStatus">OrganizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationstatus"></a>
<a id="schema_OrganizationStatus"></a>
<a id="tocSorganizationstatus"></a>
<a id="tocsorganizationstatus"></a>

```json
{
  "id": "active",
  "name": "active"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "dateCreated": "2018-11-06T21:20:08.115Z",
  "id": "3",
  "isEarlyAdopter": false,
  "name": "The Interstellar Jurisdiction",
  "require2FA": false,
  "slug": "the-interstellar-jurisdiction",
  "status": {
    "id": "active",
    "name": "active"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|[Avatar](#schemaavatar)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|id|string|false|none|none|
|isEarlyAdopter|boolean|false|none|none|
|name|string|false|none|none|
|require2FA|boolean|false|none|none|
|slug|string|false|none|none|
|status|[OrganizationStatus](#schemaorganizationstatus)|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "avatar": {
    "avatarType": "letter_avatar",
    "avatarUuid": null
  },
  "dateCreated": "2018-11-06T21:20:08.115Z",
  "hasAccess": true,
  "id": "3",
  "isMember": true,
  "isPending": false,
  "memberCount": 1,
  "organization": {
    "avatar": {
      "avatarType": "letter_avatar",
      "avatarUuid": null
    },
    "dateCreated": "2018-11-06T21:20:08.115Z",
    "id": "3",
    "isEarlyAdopter": false,
    "name": "The Interstellar Jurisdiction",
    "require2FA": false,
    "slug": "the-interstellar-jurisdiction",
    "status": {
      "id": "active",
      "name": "active"
    }
  },
  "name": "Ancient Gabelers",
  "projects": [
    {
      "avatar": {
        "avatarType": "letter_avatar",
        "avatarUuid": null
      },
      "color": "#bf5b3f",
      "dateCreated": "2018-11-06T21:19:58.536Z",
      "features": [
        "releases",
        "sample-events",
        "minidump",
        "servicehooks",
        "rate-limits",
        "data-forwarding"
      ],
      "firstEvent": null,
      "hasAccess": true,
      "id": "4",
      "isBookmarked": false,
      "isInternal": false,
      "isMember": true,
      "isPublic": false,
      "name": "Prime Mover",
      "platform": "python",
      "slug": "prime-mover",
      "status": "active"
    }
  ],
  "slug": "ancient-gabelers"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|[Avatar](#schemaavatar)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|hasAccess|boolean|false|none|none|
|id|string|false|none|none|
|isMember|boolean|false|none|none|
|isPending|boolean|false|none|none|
|memberCount|integer(int64)|false|none|none|
|organization|[Organization](#schemaorganization)|false|none|none|
|name|string|false|none|none|
|projects|[[Project](#schemaproject)]|false|none|none|
|slug|string|false|none|none|

