import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {SearcherService} from '../../services/searcher.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements  OnInit, OnDestroy, AfterViewChecked {

    @ViewChild('defaultTag') defaultTag: ElementRef;
    @ViewChild('portfolio') portfolio: ElementRef;

    private searcher: SearcherService;
    private render: Renderer2;
    private mainElement: ElementRef;
    private tagsSelected: Array<string>;
    private elementsTagsSelected: Array<ElementRef>;
    public showTagFilter: boolean;
    public tagIsActivate: boolean;
    public projects: Array<Record<string, any>>;

    constructor(searcher: SearcherService, render: Renderer2) {
        this.showTagFilter = true;
        this.tagIsActivate = false;
        this.tagsSelected = [];
        this.render = render;
        this.elementsTagsSelected = [];
        this.searcher = searcher;
        this.projects = searcher.getProjects();
    }

    ngOnInit(): void {
        window.scroll({
            top: 0,
        });
    }

    ngAfterViewChecked(): void {
        this.mainElement = this.render.parentNode(this.render.parentNode(this.portfolio.nativeElement));
        this.render.setStyle(this.mainElement, 'height', 'auto');
    }

    ngOnDestroy(): void {
        this.render.removeStyle(this.mainElement, 'height');
    }

    handleClickTagFilter(): void {
        this.showTagFilter = !this.showTagFilter;
        this.elementsTagsSelected.forEach((element) => {
            this.render.addClass(element, 'portfolio_basic_filter_item-active');
        });
        if (this.showTagFilter && this.elementsTagsSelected.length >= 1) {
        }
    }

    handleClickTag(event, tagSelected): void {
        this.tagIsActivate = !this.tagIsActivate;
        if (tagSelected === 'All') {
            this.elementsTagsSelected.forEach((element) => {
                this.render.removeClass(element, 'portfolio_basic_filter_item-active');
            });
            this.render.addClass(event.currentTarget, 'portfolio_basic_filter_item-active');
            this.tagsSelected = [];
            this.elementsTagsSelected = [];
            this.projects = this.searcher.getProjects();
            return;
        }
        this.render.removeClass(this.defaultTag.nativeElement, 'portfolio_basic_filter_item-active');
        if (!this.tagsSelected.includes(tagSelected)) {
            this.render.addClass(event.currentTarget, 'portfolio_basic_filter_item-active');
            this.tagsSelected.push(tagSelected);
            this.elementsTagsSelected.push(event.currentTarget);
        } else {
            this.render.removeClass(event.currentTarget, 'portfolio_basic_filter_item-active');
            this.tagsSelected.splice(this.tagsSelected.indexOf(tagSelected), 1);
            this.elementsTagsSelected.splice(this.elementsTagsSelected.indexOf(event.currentTarget));
        }
        if (this.tagsSelected.length === 0 ){
            this.render.addClass(this.defaultTag.nativeElement, 'portfolio_basic_filter_item-active');
        }
        console.log(this.tagsSelected);
        this.projects = this.searcher.searchByTags(this.tagsSelected);
    }

    handleInputChange(event): void {
        console.log(event.currentTarget.value);
        this.projects = event.currentTarget.value !== ' '
            ? this.searcher.searchByText(event.currentTarget.value)
            : this.searcher.getProjects();
    }
}
