import { h, Component } from 'preact';
import marked from 'marked';
import '/styles/readme.css';
import '/styles/module.css';

class READMEComponent extends Component {
    state = {
        readmeContent: '',
        isLoading: true,
    };

    fetchReadme(readmePath) {
        fetch(readmePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const renderer = new marked.Renderer();
                const originalImageRenderer = renderer.image.bind(renderer);

                renderer.image = (href, title, text) => {
                    const baseUrl = 'http://cyberfox:8080';
                    if (!href.startsWith('http') && !href.startsWith(baseUrl)) {
                        href = `${baseUrl}${href}`;
                    }
                    return `<div class="image-wrapper"><img src="${href}" alt="${text}" title="${title}"></div>`;
                };

                this.setState({ readmeContent: marked(data, { renderer }), isLoading: false });
            })
            .catch(error => {
                console.error('Failed to fetch README:', error);
                this.setState({ isLoading: false });
            });
    }

    componentDidMount() {
        const readmePath = this.props.readmePath || '/api/readme';
        this.fetchReadme(readmePath);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readmePath && nextProps.readmePath !== this.props.readmePath) {
            this.setState({ isLoading: true }, () => {
                this.fetchReadme(nextProps.readmePath);
            });
        }
    }

    render({}, { readmeContent, isLoading }) {
        if (isLoading) {
            return <div>Loading README...</div>;
        }

        return (
            <div className="readme-container">
                <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
            </div>
        );
    }
}

export default READMEComponent;
