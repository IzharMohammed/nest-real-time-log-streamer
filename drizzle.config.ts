import type { Config } from 'drizzle-kit';

export default {
    schema: './src/database/schema/*',
    out: './src/database/migrations',
    // driver: '',
    dialect: "postgresql",
    dbCredentials: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'nest_real_time_log_streamer',
    },
} satisfies Config;