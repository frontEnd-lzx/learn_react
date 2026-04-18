---
name: react-enterprise-standards
description: Enforce enterprise React engineering standards for project setup, architecture, quality gates, CI, testing, and maintainability. Use when working on React codebases that need team-level conventions, onboarding consistency, and repeatable delivery quality (including requests like "企业级规范", "工程化", "加规范", "质量门禁", or "review project standards").
---

# React Enterprise Standards

Follow this workflow when applying enterprise-grade standards to a React project.

## 1. Audit current baseline

Run:

```powershell
npm run skill:react-enterprise
```

Read the report and classify gaps:

- `required`: Must fix to reach minimum enterprise baseline.
- `recommended`: Improves long-term maintainability and team efficiency.

## 2. Apply baseline standards

Implement these in priority order:

1. Project structure
2. Code quality and formatting
3. Testing and coverage strategy
4. CI gate
5. Git workflow guardrails
6. Environment and configuration management

Use the checklist in [references/enterprise-checklist.md](references/enterprise-checklist.md).

## 3. Verify

After changes, re-run:

```powershell
npm run skill:react-enterprise
```

If required items remain failing, continue until passing or document explicit tradeoffs.

## 4. Default architecture guidance

Prefer feature-based organization for medium+ projects:

`src/app`, `src/features`, `src/shared`, `src/widgets`, `src/pages`, `src/processes`.

Keep cross-cutting utilities in `shared`, avoid circular dependencies, and enforce module boundaries by lint rules when possible.
