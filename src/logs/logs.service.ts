import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import * as schema from "../database/schema"
import { DrizzleService } from 'src/database/drizzle.service';
import { Subject } from 'rxjs';
import { LogInsert } from './logs.types';

@Injectable()
export class LogsService {
  constructor(private readonly drizzle: DrizzleService) { }
  private logStream = new Subject<any>();

  async create(createLogDto: CreateLogDto) {
    const log: LogInsert = {
      message: createLogDto.message,
      level: createLogDto.level
    }

    const inserted = await this.drizzle.db.insert(schema.logs).values(log).returning();

    // push to stream
    this.logStream.next(inserted[0])

    return inserted[0];
  }

  getLogStream() {
    return this.logStream.asObservable();
  }

  async onModuleInit() {
    setInterval(async () => {
      const fakeLog: LogInsert = {
        message: `Fake Log ${Math.random()}`,
        level: 'info'
      }

      await this.create(fakeLog)
    }, 2000)
  }
}
