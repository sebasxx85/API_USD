import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {

  listaIndicadores: any = []
  valorUF: any
  valorDolar: any
  valorDolarFecha: any

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.apiService.obtenerValoresAPI().subscribe(
      //la info que traemos de la suscripcion la guardamos en listaIndicadores
      respuesta => this.listaIndicadores = respuesta)

    this.apiService.obtenerValorUSD().subscribe(
      respuesta => this.valorDolar = respuesta)

    this.obtenerUfanio('2023')

    this.obtenerDolarFecha('03-10-1985')
  }

  obtenerUfanio(anio: any) {
    this.apiService.obtenerValorUF(anio).subscribe(
      respuesta => this.valorUF = respuesta
    )
  }

  obtenerDolarFecha(fecha: any) {
    this.apiService.obtenerValorUSDFecha(fecha).subscribe(
      respuesta => this.valorDolarFecha = respuesta
    )
  }



}
