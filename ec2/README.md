# EC2 deployment

Deploy sawaweb to AWS EC2.

## Prerequisites

- EC2 instance (Ubuntu 22.04 or Amazon Linux 2)
- Security group: allow SSH (22), HTTP (80), HTTPS (443), and your app ports (3000, 4001)

## Initial setup on EC2

```bash
# SSH into your instance
ssh -i your-key.pem ubuntu@<EC2_IP>

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone repo
git clone https://github.com/Her1tier/sawaweb.git
cd sawaweb

# Install and build
cd frontend && npm ci && npm run build
cd ../backend && npm ci

# Create .env files (copy from .env.example)
# Start backend with PM2
pm2 start backend/src/index.ts --name sawaweb-api --interpreter ts-node
# Or if using compiled: pm2 start dist/index.js --name sawaweb-api
pm2 save
pm2 startup
```

## GitHub Actions deployment

1. Add secrets in **Settings → Secrets and variables → Actions**:
   - `EC2_HOST` — EC2 public IP
   - `EC2_USER` — `ubuntu` (or your SSH user)
   - `EC2_SSH_KEY` — Full contents of your `.pem` private key
   - `EC2_APP_PATH` — e.g. `/home/ubuntu/sawaweb`

2. Push to `main`, `master`, or `Ryan` to trigger deploy.

3. Or run manually: **Actions → Deploy to EC2 → Run workflow**
