# Backend Blueprint
## Firebase Functions API (draft)

- POST `/payments/create-order`
  - body: `{ amount: number }`
  - returns: `{ id: string, amount: number, currency: 'INR' }`

- POST `/assignments`
  - body: `{ title, description, amount, deadline, location, files }`
  - returns: `{ id }`

- GET `/assignments/{id}`
  - returns: assignment document

- POST `/messages`
  - body: `{ threadId, text?, fileUrl? }`
  - returns: `{ id }`

Note: Secure via Firebase Auth; validate input with Zod server-side.
# **App Name**: AssignSimple

## Core Features:

- Mode Toggle: Implement a mode toggle button for users to switch between 'Requester' and 'Provider' modes.
- Assignment Creation: Enable requesters to create assignments with title, description, file uploads, payment amount, and deadline. Location can be auto-detected.
- Assignment Application: Providers can view and apply for assignments.
- Real-time Chat: Implement a chatbox for real-time communication between requesters and providers with basic text and file sharing.
- Dashboard: Visual dashboard displaying assignments, earnings/spending, and monthly stats using graphs.
- User Authentication: Implement user authentication and profiles using Firebase Auth.

## Style Guidelines:

- Primary color: Saturated vibrant purple (#9400D3) for a modern and energetic feel.
- Background color: Desaturated purple (#E6E0E9) for a calm backdrop that lets vibrant content pop.
- Accent color: Blue-violet (#4B0082), providing depth and visual interest.
- Body and headline font: 'Space Grotesk' (sans-serif) for a techy, modern feel; works well for headlines and smaller chunks of text. Note: currently only Google Fonts are supported.
- Use a set of simple icons for assignments and profile settings.
- Subtle animations on button interactions and dashboard updates.