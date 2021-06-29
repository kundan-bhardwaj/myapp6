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
        let c = a.style.visibility;
        if (c == "hidden") {
            a.style.cssText = "visibility : visible;animation: 0.3s zoomIn";
        } else {
            a.style.cssText = "animation: 1s bounceOutUp;visibility : hidden";
        }
    }
}