import ProjectStage from './ProjectStage';

export default class Project{

    constructor(
        public id: string,
        public name: string,
        public status: string,
        public stages: ProjectStage[]
    ){ }

    addStage(stage: ProjectStage){
        this.stages.push(stage);
    }

    removeStage(stage){
        let index = this.stages.indexOf(stage);
        if (index > -1) {
            this.stages.splice(index, 1);
        }
    }
}