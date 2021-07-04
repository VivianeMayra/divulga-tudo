import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  valorTotalInvestido: number = 0;
  quantidadeMaximaDeVisualizacoes: number = 0;
  quantidadeMaximaDeCliques: number = 0;
  quantidadeMaximaDecompartilhamentos: number = 0;

  constructor(private dialogRef: MatDialogRef<ReportComponent>, @Inject(MAT_DIALOG_DATA) public anuncio: any) {
    this.calcular(anuncio.investimentoPorDia)
  }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close()
  }

  calcular(investimentoPorDia: number): void {
    this.valorTotalInvestido = investimentoPorDia*(this.anuncio.dataTermino- this.anuncio.dataInicio);
    this.quantidadeMaximaDeVisualizacoes= this.valorTotalInvestido*30;
    this.quantidadeMaximaDeCliques= this.quantidadeMaximaDeVisualizacoes*12/100;
    this.quantidadeMaximaDecompartilhamentos= this.quantidadeMaximaDeCliques*15/100;
  }

}
