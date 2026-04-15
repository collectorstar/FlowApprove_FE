# FlowApprove FE

Frontend for the FlowApprove project, built with Angular 21.

## Table of Contents

1. [Overview](#overview)
2. [Current Status](#current-status)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Environment Requirements](#environment-requirements)
6. [Installation](#installation)
7. [Running Locally](#running-locally)
8. [Build](#build)
9. [Testing](#testing)
10. [Backend Integration](#backend-integration)
11. [Known Limitations](#known-limitations)
12. [Next Steps](#next-steps)

## Overview

This repository contains the frontend application for FlowApprove.

At the moment, the frontend is still in the foundation stage. The main goal is to establish the application shell, feature routing, shared UI patterns, and the API integration layer that will be used once backend contracts are stable.

## Current Status

- The main application layout is already in place.
- Feature-based routing has already been set up.
- Shared UI building blocks and theme files already exist.
- The `api-client` folder has been prepared for future generated or handwritten API clients.
- Business features are not implemented yet.
- No finalized entity or domain model exists on the frontend yet.
- Some screens still rely on mock data for UI prototyping.
- Test coverage is still minimal.

## Tech Stack

- Angular 21
- TypeScript
- SCSS
- PrimeNG
- RxJS
- Vitest through the Angular builder

## Project Structure

```text
src/app
|- api-client/     API client layer reserved for backend integration
|- core/           Shared infrastructure such as interceptors and constants
|- features/       Feature-specific screens and flows
|- layout/         App shell, sidebar, topbar, loading overlay
|- shared/         Reusable models, types, and UI components
|- state/          App-level stores
`- theme/          Design tokens and global styles
```

## Environment Requirements

- Node.js 20+
- npm 9+

Quick check:

```bash
node -v
npm -v
```

## Installation

Install dependencies:

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm start
```

Default local URL:

```text
http://localhost:4200
```

## Build

Create a production build:

```bash
npm run build
```

Build output directory:

```text
dist/flow-approve-web
```

## Testing

Run tests:

```bash
npm test
```

Run tests once without watch mode:

```bash
npm test -- --watch=false
```

## Backend Integration

Current base URL configuration:

```ts
baseUrl: '/api'
```

This means the frontend is prepared to call the backend through the same origin or through a reverse proxy. If the frontend and backend are run separately in local development, a proxy or environment-specific configuration will need to be added later.

## Known Limitations

- `api-client/generated` is still a placeholder and has not been generated from OpenAPI yet.
- Several feature services still return mock data.
- There is no finalized feature-to-API integration flow yet.
- Test coverage only covers basic application bootstrapping.
- The current screens should be treated as UI scaffolding, not as production-ready business functionality.

## Next Steps

- Define real frontend models based on actual backend contracts.
- Replace mock services with real API integrations.
- Generate or implement the API client layer.
- Expand feature-level tests.
- Add environment-specific runtime configuration when FE and BE start running together.
