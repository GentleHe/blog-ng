import {CanActivateFn, createUrlTreeFromSnapshot, Router, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export const loginGuardGuard: CanActivateFn = (route, state) => {
  console.log(route);
  console.log(state);
  let loginUser = localStorage.getItem('loginUser');
  console.log('loginUser: ', loginUser);
  if (loginUser) {
    return true;
  }else{
    // let router: Router;
    // 重定向到登录页
    // const tree: UrlTree =
    //   router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
    // const f = tree.fragment; // return 'fragment'
    // const q = tree.queryParams; // returns {debug: 'true'}
    // const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    // const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
    // g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
    // g.children['support'].segments; // return 1 segment 'help'

    let urlTree = createUrlTreeFromSnapshot(route, ['/account/login'], {whereFrom:'notLogin'});

    return urlTree
  }
};
