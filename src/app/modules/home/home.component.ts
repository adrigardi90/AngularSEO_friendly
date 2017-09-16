import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls : ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    constructor(meta: Meta, 
               title: Title) {

        title.setTitle('HOME PAGE');

        meta.addTags([
          { name: 'author',   content: 'ADRIAN'},
          { name: 'keywords', content: 'HOME'},
          { name: 'description', content: 'HOME PAGE DESCRIPTION' }
        ]);
    }

}
