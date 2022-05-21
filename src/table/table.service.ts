import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // < NOVO IMPORT
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = []; // < DB EM MEMÓRIA

  constructor(private readonly prisma: PrismaService) {} // < NOVA LINHA

  findAll() {
    return this.prisma.table.findMany(); // < DB VIA ENTIDADE
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = { id: 'random_id', ...createTableDto };

    this.tables.push(table);

    return table;
  }
}
