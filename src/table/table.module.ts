import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // < NOVA LINHA

@Module({
  imports: [PrismaModule], // < NOVA LINHA
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
