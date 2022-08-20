import { startWith, switchMap, tap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Acoes } from './modelo/acoes';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
    acoesInput = new FormControl();
    acoes$: Observable<Acoes> = this.acoesInput.valueChanges
    .pipe(
      startWith('')
    )
    .pipe(
      switchMap((valorDigitado: string) =>
        this.acoesService.getAcoes(valorDigitado)
      )
    );

  constructor(private acoesService: AcoesService) {}

}
