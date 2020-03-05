import { Component, OnInit } from '@angular/core';
import { faSadTear} from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  faSadTear = faSadTear;
  status: string;
  title: string;
  message: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  get dataFromRoute() { return this.activatedRoute.snapshot.data; }
  get dataFromParams() { return this.activatedRoute.snapshot.queryParams; }

  ngOnInit() {
    this.status = this.dataFromRoute.status || this.dataFromParams.status;
    this.title = this.dataFromRoute.title || this.dataFromParams.title;
    this.message = this.dataFromRoute.message || this.dataFromParams.message;
  }

}
