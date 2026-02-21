import { timestamp } from 'drizzle-orm/pg-core';
import { text } from 'drizzle-orm/pg-core';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const logs = pgTable('logs', {
    id: serial('id').primaryKey(),
    message: text('message').notNull(),
    level: text('level').notNull(), // info | warn | error
    createdAt: timestamp('created_at').defaultNow()
});