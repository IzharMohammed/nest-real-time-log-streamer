import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import * as schema from "../database/schema"
import { DrizzleService } from 'src/database/drizzle.service';

@Injectable()
export class LogsService {
  constructor(private readonly drizzle: DrizzleService) { }

  create(createLogDto: CreateLogDto) {
    return 'This action adds a new log';
  }

  async findAll() {
    return await this.drizzle.db.select().from(schema.users)
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  update(id: number, updateLogDto: UpdateLogDto) {
    return `This action updates a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
