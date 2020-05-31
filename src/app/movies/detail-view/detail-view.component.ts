import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  movie;
  movieId: number;

  constructor(private service: MovieService, private route: ActivatedRoute, public router: Router) {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    /**
     * As we don't have an API for detail view, so we will call list view API then iterate it using the movie id
     */
    this.service.getMovies().subscribe((res) => { this.movie = res.find(movie => movie.id === this.movieId) }, err => console.error('Error: ' + err));

    // this.service.getMovieDetails(this.movieId).subscribe((res: Movie) => {
    //   console.log("res", res);
    //   this.movie = res;
    // })
  }

}
