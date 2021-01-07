import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { AuthorsService } from 'src/app/common/services/authors.service';
import {
	EAuthorsActions,
	loadAuthorsCompleted,
} from '../actions/authors.actions';

@Injectable({ providedIn: 'root' })
export class AuthorsEffects {
	constructor(
		private actions$: Actions,
		private authorsService: AuthorsService
	) {}

	loadAuthors$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EAuthorsActions.LoadAuthors),
			distinctUntilChanged(),
			switchMap(() =>
				this.authorsService.getAuthors().pipe(
					map((authors) => {
						return loadAuthorsCompleted({ authors });
					})
				)
			)
		)
	);
}
