# 0.6: New note in Single page app diagram

Created a sequence diagram depicting the situation where the user creates a new note using the single-page version of the app.

# Sequence Diagram

```mermaid
sequenceDiagram
    actor user

    user->>SPA: write in textfield
    user->>Server: save note to server
    activate Server

    create participant Notes

    Server->>Notes: create note
    deactivate Server

```
