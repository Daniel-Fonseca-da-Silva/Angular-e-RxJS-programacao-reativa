import { switchMap, tap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
    acoesInput = new FormControl();
    acoes$ = this.acoesInput.valueChanges.pipe(tap(console.log), switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  constructor(private acoesService: AcoesService) {}

}
