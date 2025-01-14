import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { LocationstreamingService } from './locationstreaming.service';
import { CreateLocationstreamingDto } from './dto/create-locationstreaming.dto';
import { UpdateLocationstreamingDto } from './dto/update-locationstreaming.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('locationstreaming')
export class LocationstreamingController {
  constructor(private readonly locationstreamingService: LocationstreamingService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLocationstreamingDto: CreateLocationstreamingDto) {
    return this.locationstreamingService.create(createLocationstreamingDto);
  }

  @Get("/film/PlusLoue")
  getFilmPlusLoue() {
    return this.locationstreamingService.getFilmPlusLoue();
  }

  @Get()
  findAll() {
    return this.locationstreamingService.findAll();
  }

  @Get("findAllById/:idFilm")
  async findAllById(@Param('idFilm') idFilm: number) {
    return this.locationstreamingService.findAllById(idFilm);
  }

  @Get('FilmByUsers/:idFilm/:idUti')
  findFilmByRenter(@Param('idFilm') idFilm: number, @Param('idUti') idUti: number ) {
    return this.locationstreamingService.findFilmByRenter(idUti, idFilm);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationstreamingService.findOne(+id);
  }


  @Get('/checked/:idFilm/:idUti/:date')
  findIfAlreadyExist(@Param('idFilm') idFilm: string,@Param('idUti') idUti : string, @Param('date') date : Date ) {
    return this.locationstreamingService.findIfAlreadyExist(+idFilm, +idUti, date);
  }
  

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLocationstreamingDto: UpdateLocationstreamingDto) {
    return this.locationstreamingService.update(+id, updateLocationstreamingDto);
  }

  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationstreamingService.remove(+id);
  }
}
