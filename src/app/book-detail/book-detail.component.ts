import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmpDetailComponent implements OnInit {

  emp = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getEmpDetail(this.route.snapshot.params['id']);
  }

  getEmpDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.emp = data;
    });
  }

  deleteEmp(id) {
    this.http.delete('/book/'+id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
