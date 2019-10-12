import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";

@Component({
  selector: "app-precadastro",
  templateUrl: "./precadastro.page.html",
  styleUrls: ["./precadastro.page.scss"]
})
export class PrecadastroPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    timer(6000).subscribe(() => this.router.navigate(["login"]));
  }
}
