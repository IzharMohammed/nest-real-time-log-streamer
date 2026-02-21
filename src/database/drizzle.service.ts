import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject('DRIZZLE_CONNECTION')
    private readonly db: any,
  ) {}

  get client() {
    return this.db;
  }
}