import {Injectable} from '@angular/core';
import projects from '../../assets/data/all-projects.json';

@Injectable({
    providedIn: 'root'
})
export class SearcherService {
    private readonly projects: any;
    private readonly keys: Array<string> = ['name', 'description', 'tags'];

    constructor() {
        this.projects = projects;
    }

    getProjects(): any {
        return this.projects;
    }

    searchByText(text: string): Array<Record<string, any>> {
        return  this.projects.filter((project) => this.keys.some((key) => this.assertText(key, text, project)));
    }

    searchByTags(tags: Array<string>): Array<Record<string, any>> {
        return this.projects.filter((project) => this.assertTags(tags, project));
    }

    protected assertText(key: string, text: string, project: Record<string, any>): boolean {
        if (key === 'tags') {
            // const formattedTags =  project[key].map((tag) => tag.toLowerCase());
            // return formattedTags.includes(text.toLowerCase());
            return project[key].some((tag) => tag.toLowerCase().includes(text.toLowerCase()));
        } else {
            return project[key].toLowerCase().includes(text.toLowerCase());
        }
    }

    protected assertTags(tags: Array<string>, project: Record<string, any>): boolean {
        const formattedTags = project.tags.map(tag => tag.toLowerCase());
        return tags.every((tag) => formattedTags.includes(tag.toLowerCase()));
    }
}
