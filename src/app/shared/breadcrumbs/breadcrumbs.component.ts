// Built-in modules
import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Rjxs operators
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title!: string;

  public $titleSubscriber: Subscription;

  constructor(private router: Router) {
    this.$titleSubscriber = this.updateTitlePage().subscribe(({ title }) => {
      this.title = title;
      document.title = `Gamificación - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.$titleSubscriber.unsubscribe();
  }

  updateTitlePage() {
    return this.router.events.pipe(
      filter(
        (routerEvent): routerEvent is ActivationEnd =>
          routerEvent instanceof ActivationEnd
      ),
      filter(
        (routerEvent: ActivationEnd) => routerEvent.snapshot.firstChild === null
      ),
      map((routerEvent: ActivationEnd) => routerEvent.snapshot.data)
    );
  }
}
