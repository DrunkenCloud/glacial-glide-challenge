#!/bin/bash

# GLOFeagles Deployment Script for Nginx

echo "🚀 Starting deployment..."

# 1. Build the project
echo "📦 Building production bundle..."
pnpm install
pnpm run build

# 2. Create deployment directory
echo "📁 Creating deployment directory..."
sudo mkdir -p /var/www/glofeagles

# 3. Copy built files to nginx directory
echo "📋 Copying files to /var/www/glofeagles..."
sudo cp -r dist/* /var/www/glofeagles/

# 4. Set proper permissions
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data /var/www/glofeagles
sudo chmod -R 755 /var/www/glofeagles

# 5. Copy nginx configuration
echo "⚙️  Configuring nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/glofeagles
sudo ln -sf /etc/nginx/sites-available/glofeagles /etc/nginx/sites-enabled/

# 6. Test nginx configuration
echo "🧪 Testing nginx configuration..."
sudo nginx -t

# 7. Reload nginx
if [ $? -eq 0 ]; then
    echo "♻️  Reloading nginx..."
    sudo systemctl reload nginx
    echo "✅ Deployment complete!"
    echo "🌐 Site should be available at http://your-domain.com"
else
    echo "❌ Nginx configuration test failed. Please check the configuration."
    exit 1
fi
