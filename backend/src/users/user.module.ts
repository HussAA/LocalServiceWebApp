import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module'; // Adjust the path as necessary
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule {}
