# API Client

This directory is reserved for generated and handwritten HTTP client code.

Recommended structure:
- `generated/`: OpenAPI or Swagger generated files
- `config/`: base URL, auth, and runtime configuration
- `mappers/`: adapter logic from generated DTOs into feature view models when needed

Rules:
- Treat `generated/` as replaceable output from code generation.
- Do not place feature UI logic inside this layer.
- Wrap generated clients in feature services or facades before exposing them to pages.
