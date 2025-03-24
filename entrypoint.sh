#!/bin/sh

echo "👁‍🗨 generating the migrations..."

# Run migrations only if there are no applied migrations
npx drizzle-kit generate --config=drizzle-dev.config.ts

echo "🚀  running the migrations"
npx drizzle-kit migrate --config=drizzle-dev.config.ts

# If you have seeders, run them (optional)
#npx drizzle-seed

echo "✅ Migrations complete. Starting the application..."

# Start the application
npm run start
