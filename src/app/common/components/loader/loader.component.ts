import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.less'],
})
export class LoaderComponent implements OnInit {
	public visible = false;
	constructor(private loaderService: LoaderService) {}

	ngOnInit(): void {
		this.loaderService.getLoaderSubject().subscribe((isVisible) => {
			this.visible = isVisible;
		});
	}
}
