import { Component } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './model/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.listarContatos();
  }

  listarContatos() {
    this.contatoService.list().subscribe((contatos) => {
      this.contatos = contatos;
    });
  }
}
