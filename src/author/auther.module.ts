import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutherService } from './auther.service';
import { AutherResolver } from './auther.resolver';
import { Auther, AutherSchema } from './auther.model';

@Module({
  providers: [AutherService, AutherResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Auther.name,
        schema: AutherSchema,
      },
    ]),
  ],
})
export class AutherModule {}
