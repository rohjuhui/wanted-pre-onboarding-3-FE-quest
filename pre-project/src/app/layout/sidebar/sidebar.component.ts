import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
	menus:any = [
		{name: 'Page A', path: '/page-a'},
		{name: 'Page B', path: '/page-b'},
		{name: 'Page C', path: '/page-c'}
	];


}
