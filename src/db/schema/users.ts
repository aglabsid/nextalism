import { integer, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core'
import { timestamps } from './helpers/columns'

export const roleEnum = pgEnum('role', ['admin', 'user'])

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull().unique(),
  name: varchar({ length: 255 }),
  role: roleEnum().default('admin'),
  ...timestamps,
})
