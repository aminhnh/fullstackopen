## New Note Sequence Diagram
<br>

```mermaid
sequenceDiagram
    actor u as User
    participant b as Browser
    participant s as Server

    u->>b: Clicks the 'Save' button
    b->>+s: POST https://studies.cs.helsinki.fi/exampleapp/new_note with post data
    Note left of s: Server saves data

    s-->>-b: [302 Found]
    Note right of b: Browser reloads page
```
