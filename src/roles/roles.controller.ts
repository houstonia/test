import { Body, Controller, Post, Get ,Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) { }

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }
    @Get('/:value')
    getByValue(@Param('value') value:string) { 
        return this.roleService.getRoleByValue(value)
    }
}
