import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { logado, acesso } from "src/environments/environment";
import { login } from "./login";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: any;
  senha: any;
  auth: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  async alertUso() {
    let alert = await this.alert.create({
      header: "Dados Invalidos",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  login() {
    this.auth = { email: this.email, senha: this.senha };
    this.http
      .post<login>("http://localhost:3333/usuarioslogin", this.auth)
      .toPromise()
      .then(dados => {
        logado.id = dados.id;
        logado.tipo = dados.tipo;
        if (logado.tipo == "professor") {
          acesso.permitido = true;
        }
        this.router.navigate(["home"]);
      })
      .catch(response => {
        this.alertUso();
      });
  }
}
