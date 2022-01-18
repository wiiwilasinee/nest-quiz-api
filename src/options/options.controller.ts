import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './option.entity';
import { OptionsService } from './options.service';

@Controller('options')
export class OptionsController {
  constructor(private optionsService: OptionsService) {}

  @Get('/:id/answer-check')
  checkOptionCorrect(@Param('id') id: string): Promise<boolean> {
    return this.optionsService.checkOptionCorrect(id);
  }

  @Post()
  createOption(@Body() createOptionDto: CreateOptionDto): Promise<Option> {
    return this.optionsService.createOption(createOptionDto);
  }

  @Delete('/:id')
  deleteOption(@Param('id') id: string): Promise<void> {
    return this.optionsService.deleteOption(id);
  }
}
