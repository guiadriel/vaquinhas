import { Controller, Get, Post, Body, Param } from '@nestjs/common';

type BodyProps = {
    name: string;
    weight: number;
}

@Controller('animals')
export class AnimalController {
    @Get()
    getAnimals(): object[] {
        return [
            {
                name: 'Dog',
                weight: 20
            }
        ];
    }

}
