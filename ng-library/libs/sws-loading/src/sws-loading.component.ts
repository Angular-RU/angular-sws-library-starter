import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoadingState} from './models/loading-state';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sws-loading, [sws-loading]',
  templateUrl: './sws-loading.component.html',
  styleUrls: ['./sws-loading.component.scss']
})
export class SwsLoadingComponent extends LoadingState implements OnInit, OnChanges, OnDestroy {

  @Input() dataObservable: Observable<any>;
  @Input() textNotFound = 'По текущим условиям поиска, записей не найдено.';
  @Input() textError = 'Ошибка загрузки данных, повторите попытку чуть позже.';
  @Input() download = false;
  @Output() dataOut: EventEmitter<any> = new EventEmitter();

  data: any;
  oldObs: Observable<any>;
  downloadChange = false;
  subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngOnInit() {
    this.oldObs = this.dataObservable;
    if (this.download && this.dataObservable) {
      this.loadData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // если используется состояние таба\аккордиона как критерий для загрузки
    if (typeof this.download === 'boolean') {
      // при первом открытии аккордиона\табы
      if (this.download && !this.downloadChange) {
        this.downloadChange = true;
        this.loadData();
      }
      // если был изменен observable и аккордион\таб открыт
      if (this.dataObservable !== this.oldObs && this.download) {
        this.loadData();
        this.oldObs = this.dataObservable;
      }
    } else {
      // если используется Observable как критерий для загрузки
      if (!changes['dataObservable'].firstChange) {
        this.loadData();
      }
    }
  }

  loadData() {
    super.startLoad();
    this.subscription.add(this.dataObservable.distinctUntilChanged().subscribe(
      response => {
        this.data = response;
        this.dataOut.emit(response);
      },
      error => super.errorLoad(error),
      () => super.finishLoad(this.data)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
