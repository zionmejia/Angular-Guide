import {Component, DestroyRef, inject, OnDestroy, OnInit, signal} from '@angular/core';

import {PlacesContainerComponent} from '../places-container/places-container.component';
import {PlacesComponent} from '../places.component';
import {Place} from "../place.model";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})

export class UserPlacesComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public isFetching = signal<boolean>(false);
  public error = signal<string>('');
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true)
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (error: Error) => {
        console.log(error.message);
        this.error.set('Something went wrong!');
      },
      complete: () => {
        this.isFetching.set(false)
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription
        .unsubscribe();
    })
  }

  onRemovePlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe({

    })
    this.destroyRef.onDestroy(() => {
      subscription
        .unsubscribe();
    })
  }
}
