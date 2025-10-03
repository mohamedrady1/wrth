import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
  @Input() label;
  @Input() name;
  @Input() required = true;
  @Input() control;
  @Input() formGroup: FormGroup;
  @Input() acceptedFiles;
  @Input() acceptedFilesMessage;

  constructor(private cd: ChangeDetectorRef) {}

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          CVFile: reader.result,
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
