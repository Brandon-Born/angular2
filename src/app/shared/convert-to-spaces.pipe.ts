import { Pipe } from '@angular/core'
import { PipeTransform } from '@angular/core'

@Pipe ({
    name : 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform( value: string, character: string ) : string {

        return value.replace( character, ' ' );

    }

}