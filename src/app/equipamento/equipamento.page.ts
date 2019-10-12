import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { reserva } from "../reserva/reserva";

@Component({
  selector: "app-equipamento",
  templateUrl: "./equipamento.page.html",
  styleUrls: ["./equipamento.page.scss"]
})
export class EquipamentoPage implements OnInit {
  url: string = "http://localhost:3333/reservas";
  equipamentos: reserva[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    return this.http
      .get<reserva[]>(this.url)
      .toPromise()
      .then(dados => {
        this.equipamentos = dados;
      })
      .catch(response => {
        console.log("get não foi");
      });
  }
  selectEquipamento(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(["recurso"], navigationExtras);
  }
}
