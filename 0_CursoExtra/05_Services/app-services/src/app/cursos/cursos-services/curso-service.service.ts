import { Injectable } from '@angular/core';

@Injectable()
export class CursoServiceService {

  constructor() { }

  getCursos(): string[] {
    return ["Angular", "C#", "Java"];
  }

}
