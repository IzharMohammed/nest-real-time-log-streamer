ALTER TABLE "users" RENAME TO "logs";--> statement-breakpoint
ALTER TABLE "logs" ADD COLUMN "message" text NOT NULL;--> statement-breakpoint
ALTER TABLE "logs" ADD COLUMN "level" text NOT NULL;--> statement-breakpoint
ALTER TABLE "logs" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "logs" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "logs" DROP COLUMN "email";