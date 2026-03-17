# Changelog

All notable changes to this project are documented here.

## [Unreleased]

## 2025-03-17

### Added

- **Portfolio page** (`/portfolio`)
  - Parallax sections with artist names, artwork sizes, and client names
  - White stroke dividers between sections

- **EC2 deployment**
  - `.github/workflows/deploy-ec2.yml` — GitHub Actions workflow to deploy to AWS EC2
  - `.github/workflows/activity-tracker.yml` — CI (lint + build) on push/PR
  - `.github/README.md` — EC2 secrets and setup instructions

---

## How to update this file

When you commit changes, add a new entry under `[Unreleased]` or the current date:

```markdown
### Added
- New feature description

### Changed
- What changed

### Fixed
- Bug fix description
```
