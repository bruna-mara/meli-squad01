
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobsterWeb';
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor(
   
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  voltarAoTopo() {

  }
}
