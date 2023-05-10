import { Module } from '@nestjs/common';
import { PagesModule } from './Pages/pages.module';
import { ModulesModule } from './Modules/Modules.module';

@Module({ imports: [ModulesModule, PagesModule] })
export class AppModule {}
