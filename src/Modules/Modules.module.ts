import { Module } from '@nestjs/common';
import { DatabaseModule } from './Database';
import { AuthModule } from './Auth/Auth.module';

@Module({ imports: [DatabaseModule, AuthModule] })
export class ModulesModule {}
