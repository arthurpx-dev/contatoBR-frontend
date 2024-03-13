import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';
import { Contato } from './model/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly API = '/contatos';

  constructor(private httpClient: HttpClient) {}
  list() {
    return this.httpClient.get<Contato[]>(this.API).pipe(
      first(),
      delay(1500),
      tap((contatos) => console.log(contatos))
    );
  }
}
