import { Injectable } from '@angular/core';
import Spark from '../data/Spark';

import Project from '../models/Project';
import { all } from 'q';
import ProjectStage from '../models/ProjectStage';
import { database } from 'firebase/app';

@Injectable()
export default class ProjectService{

    private database: Spark;
    private path: string;
    private ref: any;

    public cachedProjects = [];

    constructor(){
        this.database = new Spark();
        this.path = 'projects';
        this.ref = this.database.getRef(this.path);
        this.getAllProjects().then(projects => {
            this.cachedProjects = projects;
            console.log(this.cachedProjects);            
        })
    }

    getAllProjects(): Promise<Project[]>{
        return this.database.read(this.path).then(result => {
            let keys = Object.keys(result);
            let values = Object.values(result);
            let allProjects = [];
            values.forEach((value, i) => {
                // todo implement try / catch on here
                allProjects.push(this.sanitize(value, keys[i]));
            });
            return allProjects;
        });
    }

    getProject(id: string): Promise<Project>{
        return this.database.read(this.path + '/' + id).then(response => {
            return this.sanitize(response, id);
        });
    }

    updateProject(project: Project){
        // #todo implement a return to verify upload was successful
        let path = this.path + '/' + project.id;
        this.database.write(path, project);
    }
    
    newProject(): Project{
        let key = this.ref.push('newProject').key;
        let project = new Project(key, 'New Project', 'inception', []);
        let path = this.path + '/' + key;
        this.database.write(path, project);
        return project;
    }

    sanitize(project, id): Project{
        if (project.stages){
            project.stages = Object.values(project.stages);       
        } else {
            project.stages = [];
        }
        let sanitized = new Project(id, project.name, project.status, project.stages);
        return sanitized;
    }

}