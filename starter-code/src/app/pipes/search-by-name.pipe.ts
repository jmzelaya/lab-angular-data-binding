import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(arrayOfFoods: any[], inputValue: string): any[] {
    if(!arrayOfFoods){
      return [];
    }

    if(!inputValue){
      return arrayOfFoods;
    }

    const filteredArray = [];

    inputValue = inputValue.toLowerCase();
    arrayOfFoods.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();

      if (lowerName.includes(inputValue)){
        filteredArray.push(oneFood);
      }
    });

    return filteredArray;
  }

}
