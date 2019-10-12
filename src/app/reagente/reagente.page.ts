import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import { reagente } from "./reagente";
import { acesso } from "src/environments/environment";

@Component({
  selector: "app-reagente",
  templateUrl: "./reagente.page.html",
  styleUrls: ["./reagente.page.scss"]
})
export class ReagentePage implements OnInit {
  jsonInfo: JSON;
  quantidade: number;
  reagentes: reagente[];
  tagreagente: string;
  url: string = "http://localhost:3333/recursos";
  exibir: boolean = acesso.permitido;
  public appPages = [
    {
      title: "Uso Reagente",
      url: "/usoreagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/usomeio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/usoequip",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/notificadano",
      icon: "alert"
    },
    {
      title: "Administração",
      url: "/admin",
      icon: "construct"
    },
    {
      title: "Perfil",
      url: "/perfil",
      icon: "person"
    },
    {
      title: "Sair",
      url: "",
      icon: ""
    }
  ];
  public appPages2 = [
    {
      title: "Uso Reagente",
      url: "/usoreagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/usomeio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/usoequip",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/notificadano",
      icon: "alert"
    },
    {
      title: "Perfil",
      url: "/perfil",
      icon: "person"
    },
    {
      title: "Sair",
      url: "",
      icon: ""
    }
  ];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    return this.http
      .get<reagente[]>(this.url)
      .toPromise()
      .then(dados => {
        this.reagentes = dados;
      })
      .catch(response => {
        console.log("get não foi");
      });
  }

  selectItem(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(["updaterecurso"], navigationExtras);
  }
}
