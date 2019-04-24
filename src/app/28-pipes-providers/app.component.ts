import {
  Component
} from "@angular/core";
import { FileSizePipe } from "app/27-custom-pipes/filesize.pipe";

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  providers: [FileSizePipe]
})
export class AppComponent {
  constructor(private fileSizePipe: FileSizePipe) { }

  files: File[];
  mapped: File[];

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.mapped = this.files.map((file) => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      }
    })
  }
}
