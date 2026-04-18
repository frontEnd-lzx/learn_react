import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const packageJsonPath = path.join(root, "package.json");

if (!fs.existsSync(packageJsonPath)) {
  console.error("package.json not found in current directory.");
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const scripts = pkg.scripts || {};
const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

const hasFile = (relPath) => fs.existsSync(path.join(root, relPath));
const hasAnyFile = (candidates) => candidates.some((p) => hasFile(p));
const hasDir = (relPath) => {
  try {
    return fs.statSync(path.join(root, relPath)).isDirectory();
  } catch {
    return false;
  }
};

const checks = [
  {
    id: "scripts-baseline",
    level: "required",
    title: "Core scripts (dev/build/test)",
    pass: ["dev", "build", "test"].every((key) => scripts[key]),
    hint: "Add npm scripts for dev, build, and test flows.",
  },
  {
    id: "lint",
    level: "required",
    title: "Lint strategy",
    pass:
      Boolean(scripts.lint) ||
      hasAnyFile(["eslint.config.js", ".eslintrc.js", ".eslintrc.cjs", ".eslintrc.json"]) ||
      Boolean(pkg.eslintConfig),
    hint: "Add ESLint config and a `lint` script.",
  },
  {
    id: "format",
    level: "required",
    title: "Formatting strategy",
    pass:
      Boolean(scripts.format) ||
      hasAnyFile([
        ".prettierrc",
        ".prettierrc.js",
        ".prettierrc.cjs",
        ".prettierrc.json",
        "prettier.config.js",
        "prettier.config.cjs",
      ]),
    hint: "Add Prettier config and a `format` script.",
  },
  {
    id: "ci",
    level: "required",
    title: "CI workflow",
    pass: hasDir(".github/workflows"),
    hint: "Add GitHub Actions workflow for lint/test/build.",
  },
  {
    id: "env-example",
    level: "required",
    title: ".env.example",
    pass: hasFile(".env.example"),
    hint: "Add .env.example to document required environment variables.",
  },
  {
    id: "architecture",
    level: "required",
    title: "Scalable source architecture",
    pass:
      hasDir("src/features") ||
      (hasDir("src/components") && (hasDir("src/pages") || hasDir("src/views"))),
    hint: "Adopt feature-based or layered folder conventions under src/.",
  },
  {
    id: "type-safety",
    level: "recommended",
    title: "Type safety baseline",
    pass:
      hasAnyFile(["tsconfig.json", "jsconfig.json"]) ||
      Object.keys(deps).some((k) => k === "typescript"),
    hint: "Use TypeScript or enforce strict runtime schema checks.",
  },
  {
    id: "git-guards",
    level: "recommended",
    title: "Commit guardrails",
    pass:
      hasDir(".husky") ||
      Boolean(pkg["lint-staged"]) ||
      hasAnyFile([".lintstagedrc", ".lintstagedrc.json", ".lintstagedrc.js"]),
    hint: "Add husky + lint-staged for pre-commit checks.",
  },
  {
    id: "alias",
    level: "recommended",
    title: "Path alias configuration",
    pass:
      hasAnyFile(["tsconfig.json", "jsconfig.json"]) ||
      /\balias\b/.test(fs.existsSync(path.join(root, "vite.config.js")) ? fs.readFileSync(path.join(root, "vite.config.js"), "utf8") : ""),
    hint: "Add import alias in build config and editor config.",
  },
];

const resultLines = [];
let requiredFail = 0;
let recommendedFail = 0;

for (const check of checks) {
  const icon = check.pass ? "PASS" : "FAIL";
  resultLines.push(`[${icon}] [${check.level}] ${check.title}`);
  if (!check.pass) {
    resultLines.push(`  -> ${check.hint}`);
    if (check.level === "required") requiredFail += 1;
    if (check.level === "recommended") recommendedFail += 1;
  }
}

console.log("React Enterprise Audit");
console.log("======================");
console.log(resultLines.join("\n"));
console.log("");
console.log(`Required failed: ${requiredFail}`);
console.log(`Recommended failed: ${recommendedFail}`);

if (requiredFail > 0) {
  process.exit(1);
}
