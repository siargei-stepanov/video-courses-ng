import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.less'],
})
export class BreadcrumbsComponent implements OnInit {
	public breadcrumbs = [];

	constructor(
		private router: Router,
		private coursesService: CoursesService
	) {}
	private translationMap = {
		courses: 'Courses',
		new: 'Add new',
	};

	ngOnInit(): void {
		this.parseBreadcrumbs();
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.parseBreadcrumbs();
			}
		});
	}

	private parseBreadcrumbs(): void {
		const url = this.router.routerState.snapshot.url;
		this.breadcrumbs = [];

		const pathParts = url.slice(1).split('/');
		for (const part of pathParts) {
			// try to get translations for the part
			const translation = this.translationMap[part];
			if (translation) {
				this.breadcrumbs.push({
					label: translation,
					url: part,
				});
				continue;
			}

			// maybe the part is a course id
			const id = parseInt(part, 10);
			if (!isNaN(id)) {
				const course = this.coursesService.getById(id);
				if (course) {
					this.breadcrumbs.push({ label: course.title });
				} else {
					console.error(
						'we cannot find the course with the following id',
						id,
						'for path',
						url
					);
					this.breadcrumbs.push({ label: '???' });
				}
			}
		}
		if (this.breadcrumbs.length) {
			const lastIndex = this.breadcrumbs.length - 1;
			this.breadcrumbs[lastIndex].url = '';
		}
	}
}
