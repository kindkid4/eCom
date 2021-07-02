import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      var str =  it.description.split(",");
      return it.title.toLocaleLowerCase().includes(searchText)
      || str[0].toLocaleLowerCase().match(searchText)
      || str[1].toLocaleLowerCase().match(searchText)
      || str[2].toLocaleLowerCase().match(searchText)
      || str[3].toLocaleLowerCase().match(searchText)
      || str[4].toLocaleLowerCase().match(searchText)
      || str[5].toLocaleLowerCase().match(searchText)
      || str[6].toLocaleLowerCase().match(searchText);
    });
  }

}
