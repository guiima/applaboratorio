import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menuadm",
  templateUrl: "./menuadm.component.html",
  styleUrls: ["./menuadm.component.scss"]
})
export class MenuadmComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
