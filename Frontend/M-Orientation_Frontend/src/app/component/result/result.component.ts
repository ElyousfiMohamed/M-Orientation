import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Output} from "../../model/output";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @ViewChild('saved' ,{static : false}) el! : ElementRef;

  result: Output = {'resultat' : ""};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.result.resultat = params['resultat']);
  }

  genererPDF() {
    let pdf =  new jsPDF('l','pt','tabloid');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("result.pdf");
      }
    })
  }
}
