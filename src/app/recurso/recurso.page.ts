import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { recurso } from "./recurso";
import { acesso } from "src/environments/environment";
import { AlertController } from "@ionic/angular";
import { throwError, timer } from "rxjs";

@Component({
  selector: "app-recurso",
  templateUrl: "./recurso.page.html",
  styleUrls: ["./recurso.page.scss"]
})
export class RecursoPage implements OnInit {
  id: number;
  idrequest: number;
  quantidade_consumida: number;
  quantidade_estoque: number;
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
        this.quantidade_estoque = dados.quantidade;
        console.log(dados);
      })
      .catch(response => {
        console.log(response);
      });
  }

  async quantidadeAlert() {
    let alert = await this.alert.create({
      header: "quantidade requisitada maior que quantidade em estoque",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Confirmação de uso: Recurso registrado com sucesso!",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  async serverErrorAlert() {
    let alert = await this.alert.create({
      header: "Server Error",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  async alertUso() {
    let alert = await this.alert.create({
      header: "Confirmar uso de: ",
      subHeader:
        this.quantidade_consumida + " (ml ou g) de " + this.nomenclatura,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "OK",
          handler: () => {
            try {
              if (this.quantidade_estoque - this.quantidade_consumida < 0) {
                throw new Error("1");
              }

              let jsonInfo = {
                quantidade: this.quantidade_estoque - this.quantidade_consumida
              };

              this.http
                .put(
                  "http://localhost:3333/recursos/" + this.idrequest,
                  jsonInfo
                )
                .toPromise()
                .then(dados => {
                  this.confirmacaoAlert();
                  timer(2000).subscribe(() => {
                    this.router.navigate(["reagente"]);
                  });
                })
                .catch(response => {
                  this.serverErrorAlert();
                });
            } catch (err) {
              if (err.message == 1) {
                this.quantidadeAlert();
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
