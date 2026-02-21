import { Module, Global } from '@nestjs/common';
import { databaseProvider } from './database.provider';

@Global() // makes it available everywhere
@Module({
    providers: [databaseProvider],
    exports: [databaseProvider],
})
export class DatabaseModule { }