#!/bin/bash
# GLOFeagles Deployment Script

set -e # Exit immediately if a command exits with a non-zero status

echo "🚀 Starting deployment..."

# 1. Build the project
echo "📦 Building production bundle..."
pnpm install
pnpm run build

# 2. Prepare deployment directory
echo "📁 Cleaning and preparing /var/www/glofeagles..."
sudo mkdir -p /var/www/glofeagles
# Remove old files to prevent "ghost" assets from previous builds
sudo rm -rf /var/www/glofeagles/*

# 3. Copy built files
echo "📋 Copying files..."
sudo cp -r dist/* /var/www/glofeagles/

# 4. Set proper permissions
sudo chown -R www-data:www-data /var/www/glofeagles
sudo chmod -R 755 /var/www/glofeagles

# 5. Handle Nginx Configuration
echo "⚙️  Configuring nginx..."
# Disable the default config that causes the 'duplicate' error
if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "Removing default nginx config link..."
    sudo rm /etc/nginx/sites-enabled/default
fi

sudo cp nginx.conf /etc/nginx/sites-available/glofeagles
sudo ln -sf /etc/nginx/sites-available/glofeagles /etc/nginx/sites-enabled/

# 6. Test and Reload
echo "🧪 Testing nginx configuration..."
if sudo nginx -t; then
    echo "♻️  Reloading nginx..."
    sudo systemctl reload nginx
    echo "✅ Deployment complete!"
else
    echo "❌ Nginx configuration test failed."
    exit 1
fi