import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // Include necessary imports for the standalone component
})
export class HomePage implements OnInit {
  movies: any[] = [];
  errorMessage: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.searchMovies('war').subscribe(
      (data) => {
        if (data.Response === 'True') {
          this.movies = data.Search;
        } else {
          this.errorMessage = data.Error || 'No movies found';
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching movies: ' + error.message;
      }
    );
  }
}