import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  adventureMoviesResult: any = [];
  animationMoviesResult: any = [];
  actionMoviesResult: any = [];
  comedyMoviesResult: any = [];
  documentryMoviesResult: any = [];
  scienceFictionMoviesResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.adventureMovies();
    this.animationMovies();
    this.actionMovies();
    this.comedyMovies();
    this.documentaryMovies();
    this.scienceFictionMovies();
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      // console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  // trending movie data
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // adventure movies
  adventureMovies() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventureMovies#');
      this.adventureMoviesResult = result.results;
    });
  }

  // animation movies
  animationMovies() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationMovies#');
      this.animationMoviesResult = result.results;
    });
  }

  // action movies
  actionMovies() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionMovies#');
      this.actionMoviesResult = result.results;
    });
  }

  // comedy movies
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedyMovies#');
      this.comedyMoviesResult = result.results;
    });
  }

  // documentary movies
  documentaryMovies() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentaryMovies#');
      this.documentryMoviesResult = result.results;
    });
  }
  // science-fiction movies
  scienceFictionMovies() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'scienceFictionMovies#');
      this.scienceFictionMoviesResult = result.results;
    });
  }
}
