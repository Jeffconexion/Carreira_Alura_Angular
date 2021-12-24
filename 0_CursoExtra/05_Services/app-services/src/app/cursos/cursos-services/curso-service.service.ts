import { Injectable } from '@angular/core';

@Injectable()
export class CursoServiceService {

  constructor() {
    console.log("-")
   }

  getCursos(): string[] {
    return ["Angular", "C#", "Java"];
  }

}
