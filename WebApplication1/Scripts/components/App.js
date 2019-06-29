class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
        this.hanlderclick = this.hanlderclick.bind(this);
    }

    componentWillMount() {        
                      
    }

    hanlderclick() {
        //alert();
        this.setState({ load: !this.state.load });
    }

    render() {
        var b = this.props.blog;
        console.log(b);
        const commentNodes = this.props.blog.map(b => (
            <div className="col-md-4">
                <h4>{b.title}</h4>
                <p>{b.body}</p>
                <button onClick={this.hanlderclick}>Click</button>
            </div>
        ));
        const loading = <h1>loading...</h1>;
        return (<div> <button onClick={this.hanlderclick}>click</button>{this.state.load ? loading : commentNodes}</div>);
    }
}


module.exports = Blogs;