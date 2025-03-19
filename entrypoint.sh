#!/bin/sh

echo "🚀 Checking database migrations..."

# Run migrations only if there are no applied migrations
npx sequelize-cli db:migrate

# If you have seeders, run them (optional)
# npx sequelize-cli db:seed:all

echo "✅ Migrations complete. Starting the application..."

# Start the application
npm run dev
