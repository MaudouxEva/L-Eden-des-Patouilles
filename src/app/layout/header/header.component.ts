import { Component } from '@angular/core';
import { Link } from '../../core/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links: Link[] = [
    { title: 'Accueil', url: "/" },
    { title : 'Notre refuge', url: "/a-propos", },
    { title: 'Venez au refuge', url: '/rendez-vous'},
    { title: 'L\'adoption', url: "/adoption",
      children: [
          { title: 'Nos animaux', url: '/adoption/nos-animaux' },
          { title: 'Les adoptés', url: '/adoption/animaux-adoptes' },
      ], isVisibile: false
    },
    
  ];

  toggleIsVisible(link: Link) {
    for (let l of this.links) {
        if (l !== link) {
            l.isVisibile = false;
        }
    }
    link.isVisibile = !link.isVisibile;
}
}
