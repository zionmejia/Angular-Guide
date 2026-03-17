import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import {Place} from '../place.model';
import {PlacesComponent} from '../places.component';
import {PlacesContainerComponent} from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})

export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  public isFetching = signal<boolean>(false);
  public error = signal<string>('');
  private placesService = inject(PlacesService);

  ngOnInit() {
    this.isFetching.set(true)
    const subscription = this.placesService.loadAvailablePlaces()
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
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

  public onSelectedPlace(selectedPlace: Place) {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next: (resData) => console.log(resData),
    })

    this.destroyRef.onDestroy(() => {
      subscription
        .unsubscribe();
    })
  }

  protected readonly event = event;
}
