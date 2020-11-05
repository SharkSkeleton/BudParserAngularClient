import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterCtrl = new FormControl();
  filteredElements: Observable<string[]>;
  defElements: string[] = ['Filter element 0'];
  allElements: string[] = ['Filter element 1', 'Filter element 2', 'Filter element 3', 'Filter element 4', 'Filter element 5'];

  @ViewChild('fruitInput') filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredElements = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allElements.slice()));
  }

  ngOnInit(): void {
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.defElements.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.filterCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.defElements.indexOf(fruit);

    if (index >= 0) {
      this.defElements.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.defElements.push(event.option.viewValue);
    this.filterInput.nativeElement.value = '';
    this.filterCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allElements.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
