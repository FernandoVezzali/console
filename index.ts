main();

function extractDate(input: string): string {
    if (input) {
      const arr: string[] = input.split('-');
      if (arr.length > 2) {
        const year: string = arr[0].replace(/^\D+/g, '');
        const month: string = arr[1].replace(/^\D+/g, '');
        const day: string = arr[2].replace(/^\D+/g, '');
        return `${day}/${month}/${year}`;
      }
    }
  }

function main() {



    var input = '2018-11-03T03:00:00.000Z'

    var arr:string[] = input.split('-');

    console.log(arr.length);
    console.log(arr[0].replace( /^\D+/g, ''));
    console.log(arr[1].replace( /^\D+/g, ''));    
    console.log(arr[2].substring(0,2));


}

