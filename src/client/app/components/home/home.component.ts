// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config, ConsoleService } from '../../modules/core/index';
import { IAppState, getNames } from '../../modules/ngrx/index';
import { NameList } from '../../modules/sample/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string;

  public tasks: any[] = [];
  warning: string = '没有任何提示';
  
  constructor(
    private store: Store<IAppState>,
    public routerext: RouterExtensions,
    public c: ConsoleService
  ) { }

  ngOnInit() {
    this.names$ = this.store.let(getNames);
    this.newName = '';

    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });

    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });
    this.tasks.push({
      title: '我的任务',
      nickname: '杨明明',
      avatar: 'https://meepo.com.cn/addons/imeepos_runnerpro/icon.jpg'
    });

  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new NameList.AddAction(this.newName));
    this.newName = '';
    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }


  // add
  onScroll(e: any) {
    this.warning = '滑动了';
  }
}
