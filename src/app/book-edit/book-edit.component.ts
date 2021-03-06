import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmpEditComponent implements OnInit {

  emp: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmp(this.route.snapshot.params['id']);
  }

  getEmp(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.emp = data;
    });
  }

  updateEmp(id) {
    this.emp.updated_date = Date.now();
    this.http.put('/book/'+id, this.emp)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
