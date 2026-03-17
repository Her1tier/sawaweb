# GitHub configuration

This folder contains configuration and automation for the sawaweb repository.

## Contents

| File / Folder | Purpose |
|---------------|---------|
| `workflows/activity-tracker.yml` | Runs on every **push** and **pull_request**. Logs event details and runs lint + build. |
| `workflows/deploy-ec2.yml` | Deploys to **AWS EC2** on push to main/master/Ryan. Requires GitHub secrets. |
| `CHANGELOG.md` | Human-maintained record of notable changes. Update when you commit. |
| `README.md` | This file. |

## EC2 deployment setup

Add these secrets in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `EC2_HOST` | EC2 instance public IP or hostname |
| `EC2_USER` | SSH user (e.g. `ubuntu` for Amazon Linux) |
| `EC2_SSH_KEY` | Private SSH key for EC2 access |
| `EC2_APP_PATH` | (Optional) App path on server, default `/home/ubuntu/sawaweb` |
| `NEXT_PUBLIC_API_URL` | (Optional) API URL for frontend build |

## Where to track GitHub activity

| What you want to see | Where to look |
|----------------------|---------------|
| **Push / pull history** | [Actions](https://github.com/Her1tier/sawaweb/actions) tab |
| **Commit history** | Commits tab or `git log` |
| **Branches & merges** | Branches and Network |
