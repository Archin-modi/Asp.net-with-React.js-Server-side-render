class UserDetails extends React.Component {
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
        this.setState({ load: !this.state.load });
    }

    render() { 
        const commentNodes = this.props.blog.map(b => (
            <div className="col-md-4">
                <div class="span4">
                    <blockquote>
                        <p>{b.Name}</p>
                        <small>{b.BookTitle}</small>
                    </blockquote>                   
    </div>
            </div>
        ));        
        return commentNodes;
    } 
}

function HelloWorld() {
    return <h1>Hello, John Deo</h1>
}

// Export multiple Components 
module.exports = { 'UserDetails': UserDetails, 'HelloWorld': HelloWorld };

// Export single Components
//module.exports = UserDetails;