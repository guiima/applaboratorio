import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { recurso } from "./recurso";
import { acesso } from "src/environments/environment";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recurso",
  templateUrl: "./recurso.page.html",
  styleUrls: ["./recurso.page.scss"]
})
export class RecursoPage implements OnInit {
  id: number;
  idrequest: number;
  quantidade: number;
  quantidaderesquest: number;
  qtd_minima: number;
  nomenclatura: string;
  numeracao: number;
  tipo: string;
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
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.http
      .get<recurso>("http://localhost:3333/recursos/" + this.id)
      .toPromise()
      .then(dados => {
        this.nomenclatura = dados.nomenclatura;
        this.numeracao = dados.numeracao;
        this.tipo = dados.tipo;
        this.idrequest = dados.id;
        this.quantidaderesquest = dados.quantidade;
        console.log(dados);
      })
      .catch(response => {
        console.log(response);
      });
  }

  async alertUso() {
    let alert = await this.alert.create({
      header: "Confirmar uso de: ",
      subHeader: this.quantidade + " (ml ou g) de " + this.nomenclatura,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "OK",
          handler: () => {
            // console.log(this.idrequest);
            // console.log(this.quantidaderesquest);

            if (this.quantidaderesquest - this.quantidade < 0) {
              console.log("errrrrroooooooooou");
              //tratar aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            }

            let jsonInfo = {
              quantidade: this.quantidaderesquest - this.quantidade
            };

            console.log("aqui", this.idrequest);
            this.http
              .put("http://localhost:3333/recursos/" + this.idrequest, jsonInfo)
              .toPromise()
              .then(dados => {
                console.log(dados);
                //tratar aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
              })
              .catch(response => {
                console.log(response);
                //tratar aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
              });
          }
        }
      ]
    });
    await alert.present();
  }
}
