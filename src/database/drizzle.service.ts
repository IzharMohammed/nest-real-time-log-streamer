import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject('DRIZZLE_CONNECTION')
    public readonly db: NodePgDatabase<typeof schema>,
  ) { }
}