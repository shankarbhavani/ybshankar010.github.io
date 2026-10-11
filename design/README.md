# Technical studio — design study 01

A standalone, responsive design prototype. The existing root homepage is unchanged.

## Preview

From the repository root, run `python3 -m http.server 8000` and visit
`http://localhost:8000/design/`.

## Direction

Near-black canvas, mint/cyan accent, off-white display typography, monospace
annotations, fine borders, and conceptual system diagrams. Projects lead the
story, followed by engineering approach, the AI conversation, personal context,
writing, and contact.

The diagrams illustrate concepts; they are not verified production specifications.
Existing portfolio claims and outcomes have been reused, with internal-evaluation
qualification retained for Loft. Career dates and deeper case studies need
owner-provided evidence before expansion.

## Interaction scope

- Responsive desktop and mobile layouts.
- Expandable project engineering notes.
- AI preview dialog with scripted sample questions and responses.
- Native modal keyboard handling, Escape to close, and focus restoration.
- No microphone access, AI API calls, backend, analytics, or deployment changes.
- Existing resume, portrait, article links, and contact details reused.

## Subsequent phases

1. Review the visual direction, content hierarchy, and voice panel.
2. Build a grounded voice/text assistant with approved source content,
   source links, interruptible audio, explicit microphone controls, and error states.
3. Choose the application architecture and deploy to Vercel, then migrate the
   custom domain after checking the deployed site.
