import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reason } from '../model/reason.model';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  reasonDataUrl = '../assets/data/reasons.js'

  constructor(private http: HttpClient) { }

  getReasons() {
    return this.http.get<Reason[]>(this.reasonDataUrl)
  }
}
