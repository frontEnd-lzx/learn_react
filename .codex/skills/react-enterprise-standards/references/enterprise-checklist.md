# Enterprise React Checklist

## Required baseline

1. Build and test scripts are present and executable.
2. Lint strategy exists (`eslint` config + `lint` script).
3. Formatting strategy exists (`prettier` config + `format` script).
4. CI workflow exists (`.github/workflows/*`) and runs quality checks.
5. `.env.example` exists and documents required runtime variables.
6. Architecture folders are intentionally defined for growth.

## Recommended baseline

1. Type safety with TypeScript or strict runtime schema validation.
2. Commit guardrails via `husky` + `lint-staged`.
3. Coverage threshold policy for critical modules.
4. Import alias + path conventions in build config and tooling.
5. Performance budget checks for bundle size and web vitals.
6. Error boundary, request retry policy, and global logging strategy.

## Standard rollout order

1. Quality tools (`eslint`, `prettier`, scripts)
2. Project structure and import boundaries
3. CI and branch protection
4. Testing depth and coverage policy
5. DX improvements (`lint-staged`, templates, generators)
