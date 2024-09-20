import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrls: ['./liste-animaux.component.scss']
})
export class ListeAnimauxComponent implements OnInit {

  animaux: Animal[] = [];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // On récup les animaux préchargés par le resolver
    this.route.data.subscribe(data => {
      this.animaux = data['animaux'];
    });
  }
}
