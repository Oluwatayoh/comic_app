import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      value = value.replace(/_/g, ' ');
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return value;
  }
}


@Pipe({ name: 'elipses' })
export class ElipsesPipe implements PipeTransform {
  transform(value: any) {
    if (value.length > 30) {
      let a = value.toString().substr(0, 30)
      return `${a}...`
    }
    return value;
  }
}

@Pipe({ name: 'sentenceCase' })
export class SentenceCase implements PipeTransform {
  transform(value: any) {
    if (value) {
      value = value.replace(/_/g, ' ');
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return value;
  }
}




@Pipe({
  name: "searchPipe"
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    });
  }
}

