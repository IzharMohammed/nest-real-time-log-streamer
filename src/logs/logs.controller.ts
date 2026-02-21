import { Controller, Post, Body, Sse, MessageEvent } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { interval, map, Observable } from 'rxjs';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) { }

  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    return this.logsService.getLogStream().pipe(
      map((log) => ({
        data: log
      }))
    )
  }
}
