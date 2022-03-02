import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';
import onlineCourses from '../../../assets/data/online-courses.json';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

    @ViewChildren('skillTabs') tabs: QueryList<ElementRef>;

    public tabName: string;
    public render: Renderer2;
    public courses: Array<Record<string, any>>;

    constructor(render: Renderer2) {
        this.tabName = 'toolsAndTechs';
        this.render = render;
        this.courses = onlineCourses;
    }

    ngOnInit(): void {
        window.scroll({
            top: 0,
        });
    }

    handleChangeTab(event, tabSelected: string): void {
        this.tabName = tabSelected;
        this.tabs.forEach((tab: ElementRef) => {
            if (tab.nativeElement.classList.contains('skills-item-active')) {
                this.render.removeClass(tab.nativeElement, 'skills-item-active');
            }
        });
        if (!event.currentTarget.classList.contains('skills-item-active')) {
            this.render.addClass(event.currentTarget, 'skills-item-active');
        }
    }
}
