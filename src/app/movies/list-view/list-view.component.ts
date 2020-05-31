import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  listView = false;
  movies = [];
  filterResults = [];
  pageIndex = 0;
  pageSize = 10;
  value;
  constructor(private service: MovieService, public router: Router) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((res) => { this.movies = res; this.filterResults = res }, err => console.error('Error: ' + err));
  }

  getPaginatorData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  search(term) {
    // this.filterResults = this.movies.filter(x => x.name.toLowerCase().trim() === term.toLowerCase().trim());
    this.filterResults = this.movies.filter(x => x.name.toLowerCase().includes(term.toLowerCase().trim()) );
  }

  goToDetailView(id) {
    this.router.navigate(['movie-detail', id])
  }

}
