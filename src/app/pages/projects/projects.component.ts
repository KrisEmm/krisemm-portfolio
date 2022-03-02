import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import workingProjects from '../../../assets/data/working-projects.json';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

    @ViewChildren('listTabs') tabs: QueryList<ElementRef>;
    @ViewChild('latestProject') latestProject: ElementRef;

    public tabName: string;
    public isFirstTime: boolean;
    public render: Renderer2;
    private router: Router;
    public projects: Array<Record<string, any>>;

    constructor(render: Renderer2,  router: Router) {
        this.tabName = 'latest-project';
        this.render = render;
        this.router = router;
        this.isFirstTime = true;
        this.projects = workingProjects;
    }

    ngOnInit(): void {
        window.scroll({
            top: 0,
        });
    }

    handleChangeTab(event, tabSelected): void {
        this.tabName = tabSelected;
        this.tabs.forEach((tab) => {
            if (tab.nativeElement.classList.contains('projects-tab-is-active')) {
                this.render.removeClass(tab.nativeElement, 'projects-tab-is-active');
            }
        });
        if (!event.currentTarget.classList.contains('projects-tab-is-active')) {
            this.render.addClass(event.currentTarget, 'projects-tab-is-active');
        }
        this.render.removeClass(this.latestProject.nativeElement, 'animate__delay-1s');
        if (this.isFirstTime){
            this.isFirstTime = false;
        }
    }

    async handleClick(): Promise<void> {
        await this.router.navigate(['portfolio']);
    }
}
