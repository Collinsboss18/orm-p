import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from 'src/database/db.item.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule {}
