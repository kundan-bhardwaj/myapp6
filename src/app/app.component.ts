import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'myapp6';
    show() {
        let a = < HTMLDivElement > document.getElementById("sidebar");
        let c = a.style.display;
        if (c == "none") {
            a.style.cssText = "display: inline block;animation: 0.3s zoomIn";
        } else {
            a.style.cssText = "animation: 1s bounceOutUp;display: none";
        }
    }
}