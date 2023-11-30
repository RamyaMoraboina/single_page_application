import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome Back, Ramya</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, a consectetur possimus dignissimos ullam blanditiis, dolore suscipit sit, tempore porro neque magni aspernatur inventore alias.</p>
            <p>
                <a href= "/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}