import { animate,query, style, transition, trigger, group, animateChild} from '@angular/animations';
  
export const slideInAnimation =
   trigger('routeAnimations', [
        transition('ContactPage => *, AboutPage => HomePage, WorksPage => AboutPage , WorksPage => HomePage , NewsPage => WorksPage, NewsPage => AboutPage, NewsPage => HomePage', [
             query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%', 'transform-origin': '50% 50%'  }), 
                  { optional: true }),        
             group([
                  query(':enter',[
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.6s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))

                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)'}),
                      animate('0.6s ease-in-out', 
                      style({ transform: 'translateX(100%)' }))
                  ], { optional: true }),
             ])
        ]),
        transition('HomePage => *, AboutPage => WorksPage , AboutPage => ContactPage , AboutPage => NewsPage , WorksPage => NewsPage , WorksPage => ContactPage , NewsPage => ContactPage', [
             query(':enter, :leave', 
                  style({ position: 'fixed',  width: '100%', 'transform-origin': '50% 50%'}), 
                  { optional: true }),
             group([
                  query(':enter', [
                      style({transform: 'translateX(100%)'}), 
                      animate('0.6s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.6s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                      ], { optional: true }),
              ])
        ]),

]);