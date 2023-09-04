import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailsResult: any;
  getMovieVideoResult: any = [];
  getMovieCastResult: any;

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let movieId = this.router.snapshot.paramMap.get('id');
    console.log(movieId, 'movieId#');

    this.getMovie(movieId);
    this.getVideo(movieId);
    this.getMovieCast(movieId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getMovieDetails#');
      this.getMovieDetailsResult = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      // console.log(result, 'getMovieVideo#');
      let count = 0;
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult[count] = element.key;
          count++;
        }
      });
    });
    // this.getMovieDetailsResult = this.getMovieDetailsResult.reverse();
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      // console.log(result, 'movieCast#')
      this.getMovieCastResult = result.cast;
    });
  }
}
